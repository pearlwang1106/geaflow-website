import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Home from './Home';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <h1>1111</h1>
  );
}

export default function Index(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Home />
    </Layout>
  );
}
