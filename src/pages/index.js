import React from 'react';
import { About, Contact, Featured, Hero, Impact, Jobs, Layout, Skills, Writing } from '@components';

const IndexPage = () => (
  <Layout>
    <Hero />
    <Impact />
    <Jobs />
    <Featured />
    <Skills />
    <Writing />
    <About />
    <Contact />
  </Layout>
);

export default IndexPage;
