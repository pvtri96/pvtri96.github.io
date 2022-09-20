import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card, TitleWrap } from "components/common";
import Star from "components/common/Icons/Star";
import Fork from "components/common/Icons/Fork";
import { Wrapper, Grid, Item, Content, Stats, Languages } from "./styles";

export const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const { github } = useStaticQuery(
    graphql`
      {
        github {
          repository1: repository(name: "react-starter", owner: "pvtri96") {
            ...RepoInfo
          }
          repository2: repository(name: "re-radio", owner: "pvtri96") {
            ...RepoInfo
          }
          repository3: repository(name: "team-radio", owner: "mgm-interns") {
            ...RepoInfo
          }
          repository4: repository(name: "acm-client", owner: "sunway-official") {
            ...RepoInfo
          }
          repository5: repository(name: "acm-server", owner: "sunway-official") {
            ...RepoInfo
          }
          repository6: repository(name: "poe-oil-rigs", owner: "pvtri96") {
            ...RepoInfo
          }
        }
      }

      fragment RepoInfo on GitHub_Repository {
        id
        name
        url
        homepageUrl
        description
        stargazers {
          totalCount
        }
        forkCount
        languages(first: 3) {
          nodes {
            id
            name
          }
        }
      }
    `
  );

  const edges = Object.values(github);

  return (
    <Wrapper as={Container} id="projects">
      <h2>Open Source Projects</h2>
      <Grid>
        {edges.map((node) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{node.homepageUrl ? <a href={node.homepageUrl}>{node.name}</a> : node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <TitleWrap>
                <Stats theme={theme}>
                  <div>
                    <Star color={theme === "light" ? "#000" : "#fff"} />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork color={theme === "light" ? "#000" : "#fff"} />
                    <span>{node.forkCount}</span>
                  </div>
                </Stats>
                <Stats theme={theme}>
                  <Languages>
                    {node.languages.nodes.map(({ id, name }) => (
                      <span key={id}>{name}</span>
                    ))}
                  </Languages>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
