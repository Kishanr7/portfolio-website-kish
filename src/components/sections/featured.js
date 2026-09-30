import React from 'react';
import styled from 'styled-components';

const caseStudies = [
  {
    title: 'Large-scale AWS migration',
    outcome: '65% lower storage bill',
    summary:
      'Moved 10+ TB from Oracle and 30 TB from SAS into S3 as Parquet. The work also had to preserve keys, protect PII and prove that source and target matched.',
    stack: ['AWS Glue', 'PySpark', 'DMS', 'S3', 'Lake Formation'],
  },
  {
    title: 'Faster data processing',
    outcome: '70% shorter Glue runtime',
    summary:
      'Profiled the slow stages, reworked the Glue and PySpark jobs, then connected the pipeline to an event-driven workflow with monitoring and alerts.',
    stack: ['Glue', 'PySpark', 'Lambda', 'Step Functions', 'SNS'],
  },
  {
    title: 'Automated reconciliation',
    outcome: '90x faster validation',
    summary:
      'Schema and row checks were taking too long, so I built reusable Python and SQL comparisons with clear exception outputs for the team to review.',
    stack: ['Python', 'SQL', 'Airflow', 'Redshift', 'Boto3'],
  },
];

const WorkSection = styled.section`
  .cases {
    display: grid;
    gap: 0;
    border-bottom: 1px solid var(--border);
  }

  article {
    display: grid;
    grid-template-columns: 54px minmax(220px, 0.75fr) minmax(0, 1.25fr);
    gap: clamp(20px, 4vw, 54px);
    padding: 32px 0;
    border-top: 1px solid var(--border);
  }

  .case-number {
    color: var(--amber-300);
    font-family: var(--font-mono);
    font-size: 12px;
  }

  h3 {
    margin-bottom: 12px;
    font-size: 27px;
    letter-spacing: -0.02em;
  }
  .outcome {
    margin: 0;
    color: var(--amber-300);
    font-family: var(--font-mono);
    font-size: 12px;
  }

  .summary {
    margin-bottom: 18px;
    color: var(--sage-300);
    font-size: 17px;
  }

  .stack {
    margin: 0;
    color: var(--sage-400);
    font-size: 14px;
  }
  .stack span {
    font-weight: 600;
  }
  .stack span:not(:last-child)::after {
    margin-right: 7px;
    color: var(--amber-300);
    content: ', ';
  }
  @media (max-width: 900px) {
    article {
      grid-template-columns: 42px 1fr;
    }
    .case-copy {
      grid-column: 2;
    }
  }

  @media (max-width: 560px) {
    article {
      grid-template-columns: 1fr;
      gap: 14px;
    }
    .case-copy {
      grid-column: 1;
    }
  }
`;

const Featured = () => (
  <WorkSection id="work" className="section-shell" aria-labelledby="work-title">
    <div className="container">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="work-title">A few problems I’ve worked on.</h2>
        <p>Short, sanitized examples from production work.</p>
      </div>
      <div className="cases">
        {caseStudies.map((item, index) => (
          <article key={item.title}>
            <span className="case-number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3>{item.title}</h3>
              <p className="outcome">{item.outcome}</p>
            </div>
            <div className="case-copy">
              <p className="summary">{item.summary}</p>
              <p className="stack" aria-label="Technologies used">
                {item.stack.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </WorkSection>
);

export default Featured;
