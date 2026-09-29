import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Head, Nav, Footer } from '@components';
import { GlobalStyle, theme } from '@styles';

const Page = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle at 82% 8%, rgba(155, 232, 194, 0.08), transparent 28rem),
    var(--ink-900);
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Head />
    <GlobalStyle />
    <Page>
      <a className="skip-to-content" href="#content">
        Skip to main content
      </a>
      <Nav />
      <main id="content">{children}</main>
      <Footer />
    </Page>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
