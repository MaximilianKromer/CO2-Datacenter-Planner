import * as React from "react";
import Layout from "../components/layout";
import Container from "react-bootstrap/Container";
import Results from "../components/Results";

const ResultPage = () => {
  return (
    <Layout>
      <Container className="mt-5">
        <Results></Results>
      </Container>
    </Layout>
  );
};

export const Head = () => <title>Result</title>;

export default ResultPage;
