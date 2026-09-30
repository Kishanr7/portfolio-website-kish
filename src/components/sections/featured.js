import React from 'react';
import styled from 'styled-components';

const caseStudies = [
  {
    title: 'Large-scale AWS migration',
    outcome: '65% lower storage bill',
    summary:
      'Moved 10+ TB from Oracle and 30 TB from SAS into S3 as Parquet. I designed the full and incremental loads, masking controls and reconciliation checks.',
    stack: ['AWS Glue', 'PySpark', 'DMS', 'S3', 'Lake Formation'],
  },
  {
    title: 'Faster data processing',
    outcome: '70% shorter Glue runtime',
    summary:
      'Reworked Glue and PySpark jobs to remove bottlenecks, then connected the pipeline to an event-driven workflow with monitoring and alerts.',
    stack: ['Glue', 'PySpark', 'Lambda', 'Step Functions', 'SNS'],
  },
  {
    title: 'Automated reconciliation',
    outcome: '90x faster validation',
    summary:
      'Built reusable Python and SQL checks for schema and row-level validation, replacing a slow manual comparison process.',
    stack: ['Python', 'SQL', 'Airflow', 'Redshift', 'Boto3'],
  },
];

const WorkSection = styled.section`
  .cases {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  article {
    display: flex;
    min-height: 330px;
    flex-direction: column;
    padding: 28px;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--ink-850);
  }

  h3 {
    margin-bottom: 14px;
    font-size: 28px;
    letter-spacing: -0.02em;
  }
  .outcome {
    margin-bottom: 20px;
    color: var(--amber-300);
    font-family: var(--font-mono);
    font-size: 12px;
  }

  .summary {
    color: var(--sage-400);
    font-size: 16px;
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: auto;
    padding-top: 22px;
  }
  .stack span {
    padding: 5px 8px;
    border-radius: 999px;
    background: var(--accent-wash);
    color: var(--sage-300);
    font-family: var(--font-mono);
    font-size: 9px;
  }
  @media (max-width: 900px) {
    .cases {
      grid-template-columns: 1fr;
    }
    article {
      min-height: auto;
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
        {caseStudies.map(item => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p className="outcome">{item.outcome}</p>
            <p className="summary">{item.summary}</p>
            <div className="stack" aria-label="Technologies used">
              {item.stack.map(tech => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </WorkSection>
);

export default Featured;
