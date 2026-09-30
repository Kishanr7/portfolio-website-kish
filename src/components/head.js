import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          twitterUsername
        }
      }
    }
  `);
  const metadata = site.siteMetadata;
  const seo = {
    title: title || metadata.title,
    description: description || metadata.description,
    image: `${metadata.siteUrl}${image || metadata.image}`,
    url: `${metadata.siteUrl}${pathname}`,
  };
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kishan Rekhadia',
    url: metadata.siteUrl,
    image: seo.image,
    jobTitle: 'Senior Consultant - Data Engineering',
    worksFor: { '@type': 'Organization', name: 'Deloitte' },
    sameAs: [
      'https://github.com/Kishanr7',
      'https://www.linkedin.com/in/kishan-rekhadia-757b69126/',
      'https://kish.hashnode.dev/',
    ],
    knowsAbout: [
      'Data engineering',
      'Amazon Web Services',
      'Python',
      'SQL',
      'PySpark',
      'Data migration',
      'Data reconciliation',
    ],
  };

  return (
    <Helmet title={seo.title}>
      <html lang="en" />
      <link rel="canonical" href={seo.url} />
      <link rel="sitemap" type="application/xml" href="/sitemap-index.xml" />
      <link rel="icon" href="/monogram.svg" type="image/svg+xml" />
      <meta name="theme-color" content="#f7f6f2" />
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={metadata.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" />
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = { title: null, description: null, image: null };

export default Head;
