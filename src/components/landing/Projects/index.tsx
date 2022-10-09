import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card, TitleWrap } from "components/common";
import Star from "components/common/Icons/Star";
import Fork from "components/common/Icons/Fork";
import { Wrapper, Grid, Item, Content, Stats, Languages } from "./styles";

export const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const repositories = useRepositories();

  return (
    <Wrapper as={Container} id="projects">
      <h2>Open Source Projects</h2>
      <Grid>
        {repositories.map((repo) => (
          <Item key={repo.id} as="a" href={repo.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{repo.homepageUrl ? <a href={repo.homepageUrl}>{repo.name}</a> : repo.name}</h4>
                <p>{repo.description}</p>
              </Content>
              <TitleWrap>
                <Stats theme={theme}>
                  <div>
                    <Star color={theme === "light" ? "#000" : "#fff"} />
                    <span>{repo.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork color={theme === "light" ? "#000" : "#fff"} />
                    <span>{repo.forkCount}</span>
                  </div>
                </Stats>
                <Stats theme={theme}>
                  <Languages>
                    {repo.languages.nodes.map(({ id, name }) => (
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

export interface GitHubRepository {
  id: string;
  name: string;
  url: string;
  homepageUrl: string;
  description: string;
  stargazers: {
    totalCount: number;
  };
  forkCount: number;
  languages: {
    nodes: {
      id: string;
      name: string;
    }[];
  };
}

interface Github {
  [key: string]: GitHubRepository;
}

interface GithubQueryData {
  github: Github;
}

function useRepositories() {
  const { github } = useStaticQuery<GithubQueryData>(
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

  return React.useMemo(() => Object.values(github), []);
}
