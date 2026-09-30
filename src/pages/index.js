import React from 'react';
import { Contact, Featured, Hero, Jobs, Layout, Skills } from '@components';

const IndexPage = () => (
  <Layout>
    <Hero />
    <Jobs />
    <Featured />
    <Contact />
    <Skills />
  </Layout>
);

export default IndexPage;
