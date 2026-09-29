import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Head, Layout } from '@components';

const NotFound = styled.section`
  display: grid;
  min-height: calc(100vh - var(--header-height));
  place-items: center;
  padding: 80px 0;
  text-align: center;

  .code {
    margin-bottom: 12px;
    color: var(--mint-300);
    font-family: var(--font-mono);
    font-size: 13px;
  }
  h1 {
    margin-bottom: 18px;
    font-size: clamp(48px, 10vw, 92px);
    letter-spacing: -0.04em;
  }
  p {
    max-width: 480px;
    margin: 0 auto 28px;
    color: var(--sage-400);
  }
`;

const NotFoundPage = () => (
  <Layout>
    <Head
      title="Page not found | Kishan Rekhadia"
      description="The requested page could not be found."
    />
    <NotFound>
      <div className="container">
        <p className="code">HTTP 404</p>
        <h1>This route has moved on.</h1>
        <p>The portfolio has been streamlined. Return to the homepage to continue.</p>
        <Link className="button" to="/">
          Back to the portfolio
        </Link>
      </div>
    </NotFound>
  </Layout>
);

export default NotFoundPage;
