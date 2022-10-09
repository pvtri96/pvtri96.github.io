import { Layout, SEO } from "components/common";
import React from "react";
import styled from "styled-components";

export default function Page404() {
  return (
    <Layout>
      <SEO title="404: Not found" location="/404" />
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  text-align: center;
`;
