/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import { KEY_CODES } from '@utils';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--slate)')};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const dataForJobs = [
  {
    node: {
      frontmatter: {
        title: 'Consultant - Data Engineer',
        company: 'Deloitte',
        location: 'Remote',
        range: 'Oct 23 - Present',
        url: 'www.deloitte.com',
      },
      html:
        '<ul>\n' +
        '<li>Led a team of 3 in designing and developing scalable data ingestion and data masking pipelines for a major Indian banking client.</li>\n' +
        '<li>Designed and implemented full-load and incremental data ingestion pipelines transferring 10 TB from on-prem Oracle and 30 TB from SAS Data Warehouse to AWS S3 in optimized Parquet format using AWS Glue and DMS, reducing storage footprint by 65% and improving analytics performance.</li>\n' +
        '<li>Built a deterministic data masking pipeline using AWS Glue and PySpark to encrypt PII fields while preserving referential integrity, with role-based access control enforced via Lake Formation.</li>\n' +
        '<li>Created a metadata-driven reconciliation framework to validate data across Oracle, S3, RDS, and Redshift using centralized metadata in Aurora PostgreSQL with flexible rule-based validation and CSV reporting.</li>\n' +
        '<li>Developed end-to-end orchestration using Step Functions, AWS Lambda, and AWS Glue to automate ingestion, masking, and reconciliation with dependency handling and alerts via Amazon SNS.</li>\n' +
        '<li>Team member of the Risk and Finance data transformation program for a major UK financial bank, driving modernization of data architecture and identifying bottlenecks in a multi-cloud environment.</li>\n' +
        '<li>Provided data modeling expertise to scale new data marts used for evaluating financial disclosure reports.</li>\n' +
        '<li>Recommended third-party ETL and data integration tools by aligning business needs with technical standards and best practices.</li>\n' +
        '</ul>',
    },
  },
  {
    node: {
      frontmatter: {
        title: 'Data Engineer',
        company: 'Infosys',
        location: 'Remote',
        range: 'June 21 - Sept 23',
        url: 'https://www.infosys.com/',
      },
      html:
        '<ul>\n' +
        '<li>Delivered data modernization solutions for a leading US financial institution, enabling seamless migration of legacy data systems to AWS and supporting hybrid cloud adoption.</li>\n' +
        '<li>Core contributor to the Reporting Data Lake Platform and Analytics (RKPA) initiative, responsible for modernizing the enterprise data warehouse by designing scalable ETL pipelines and integrating 10+ legacy data sources into a unified AWS-based data lake architecture.</li>\n' +
        '<li>Played a key backend engineering role in the development of modular, reusable Python microservices deployed on AWS infrastructure (EC2, Lambda, S3), powering ingestion, transformation, and metadata workflows.</li>\n' +
        '<li>Designed and developed robust, reusable ETL pipelines in Python for high-volume data ingestion and transformation into a centralized S3-based data lake, supporting schema evolution and idempotency using AWS Glue and custom logic.</li>\n' +
        '<li>Contributed to CI/CD, unit testing, and production deployment of data lake components, leading to a successful production release with zero critical defects.</li>\n' +
        '<li>Developed and orchestrated end-to-end batch workflows using Apache Airflow DAGs for automated pipeline execution, dependency resolution, and failure alerting, reducing manual intervention by 90%.</li>\n' +
        '<li>Enhanced production performance by implementing multi-threading in critical modules, achieving a 5x improvement in processing efficiency.</li>\n' +
        '<li>Automated the migration of Amazon QuickSight dashboards, datasets, and analyses across environments and AWS accounts using custom Python scripts with Boto3, reducing deployment time by 70% and enabling version control of artifacts.</li>\n' +
        '</ul>',
    },
  },
];

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  const jobsData = data.jobs.edges;

  console.log(jobsData, 'jobsDAta');

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = e => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <StyledJobsSection id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">Where I’ve Worked</h2>

      <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
          {dataForJobs &&
            dataForJobs.map(({ node }, i) => {
              const { company } = node.frontmatter;
              return (
                <StyledTabButton
                  key={i}
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  ref={el => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}>
                  <span>{company}</span>
                </StyledTabButton>
              );
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {dataForJobs &&
            dataForJobs.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { title, url, company, range } = frontmatter;

              return (
                <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade">
                  <StyledTabPanel
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}>
                    <h3>
                      <span>{title}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={url} className="inline-link">
                          {company}
                        </a>
                      </span>
                    </h3>

                    <p className="range">{range}</p>

                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </StyledTabPanel>
                </CSSTransition>
              );
            })}
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
