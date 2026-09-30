import React from 'react';
import styled from 'styled-components';

const caseStudies = [
  {
    number: '01',
    title: '40+ TB migration with governance built in',
    outcome: '65% lower storage bill',
    problem:
      'Move large Oracle and SAS estates into AWS without losing control over PII, access or data quality.',
    constraints:
      'Hybrid sources, referential integrity, multiple target stores and sensitive financial data.',
    contribution:
      'Designed ingestion, deterministic masking, Lake Formation RBAC and metadata-driven reconciliation across Oracle, S3, RDS and Redshift.',
    stack: ['AWS Glue', 'PySpark', 'DMS', 'S3', 'Lake Formation', 'Aurora PostgreSQL'],
    flow: ['Oracle + SAS', 'Ingest + mask', 'S3 platform', 'Reconcile + govern'],
  },
  {
    number: '02',
    title: 'Event-driven analytics delivery platform',
    outcome: '70% shorter runtime · 30 use cases on time',
    problem:
      'Connect ingestion, transformation, analytics and dashboard refresh while making failures visible and recoverable.',
    constraints:
      'Cross-workstream dependencies, source gaps, operational monitoring and fixed delivery timelines.',
    contribution:
      'Designed the workflow, re-engineered Glue/PySpark jobs, added audit and monitoring paths, and established a regular blocker-review cadence.',
    stack: ['Glue', 'PySpark', 'Lambda', 'Step Functions', 'SNS', 'Analytics tables'],
    flow: ['On-prem source', 'Bronze + silver', 'Analytics base', 'Refresh + monitor'],
  },
  {
    number: '03',
    title: 'Reconciliation and analytics automation',
    outcome: '90x faster validation',
    problem: 'Replace slow, manual schema and row-level comparisons across heterogeneous systems.',
    constraints:
      'Different database engines, repeatable checks, useful failure output and production deployment needs.',
    contribution:
      'Built reusable Python and SQL comparison tooling with structured CSV outputs, alongside Airflow and QuickSight deployment automation.',
    stack: ['Python', 'SQL', 'Airflow / MWAA', 'Redshift', 'QuickSight', 'Boto3'],
    flow: ['Source schemas', 'Rules + compare', 'Exceptions', 'Validation report'],
  },
];

const WorkSection = styled.section`
  .cases {
    display: grid;
    gap: 22px;
  }

  article {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 0.75fr);
    gap: clamp(30px, 6vw, 80px);
    padding: clamp(28px, 5vw, 56px);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--ink-850);
  }

  .case-number {
    margin-bottom: 26px;
    color: var(--mint-300);
    font-family: var(--font-mono);
    font-size: 12px;
  }
  h3 {
    margin-bottom: 14px;
    font-size: clamp(30px, 4vw, 46px);
    letter-spacing: -0.02em;
  }
  .outcome {
    margin-bottom: 28px;
    color: var(--amber-300);
    font-family: var(--font-mono);
    font-size: 12px;
  }

  dl {
    display: grid;
    gap: 18px;
    margin: 0;
  }
  dt {
    margin-bottom: 3px;
    color: var(--cream-100);
    font-family: var(--font-mono);
    font-size: 11px;
    text-transform: uppercase;
  }
  dd {
    margin: 0;
    color: var(--sage-400);
    font-size: 16px;
  }

  .architecture {
    align-self: center;
    padding: 24px;
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-md);
    background: var(--ink-900);
  }

  .architecture-label {
    margin-bottom: 18px;
    color: var(--sage-400);
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
  }
  .flow {
    display: grid;
    gap: 9px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .flow li {
    position: relative;
    padding: 12px 14px;
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--cream-100);
    font-size: 15px;
  }
  .flow li:not(:last-child)::after {
    position: absolute;
    bottom: -13px;
    left: 22px;
    z-index: 2;
    color: var(--mint-300);
    content: '↓';
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 20px;
  }
  .stack span {
    padding: 5px 8px;
    border-radius: 999px;
    background: rgba(83, 104, 200, 0.08);
    color: var(--sage-300);
    font-family: var(--font-mono);
    font-size: 9px;
  }
  .disclosure {
    margin-top: 20px;
    color: var(--sage-400);
    font-size: 13px;
  }

  @media (max-width: 820px) {
    article {
      grid-template-columns: 1fr;
    }
  }
`;

const Featured = () => (
  <WorkSection id="work" className="section-shell" aria-labelledby="work-title">
    <div className="container">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="work-title">What the engineering looked like.</h2>
        <p>
          Sanitized production case studies. Client names, source data and private repositories are
          intentionally omitted.
        </p>
      </div>
      <div className="cases">
        {caseStudies.map(item => (
          <article key={item.number}>
            <div>
              <p className="case-number">Case study / {item.number}</p>
              <h3>{item.title}</h3>
              <p className="outcome">{item.outcome}</p>
              <dl>
                <div>
                  <dt>Problem</dt>
                  <dd>{item.problem}</dd>
                </div>
                <div>
                  <dt>Constraints</dt>
                  <dd>{item.constraints}</dd>
                </div>
                <div>
                  <dt>My contribution</dt>
                  <dd>{item.contribution}</dd>
                </div>
              </dl>
              <p className="disclosure">Production work · no public repository or demo</p>
            </div>
            <div className="architecture">
              <p className="architecture-label">Sanitized system flow</p>
              <ol className="flow">
                {item.flow.map(step => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="stack" aria-label="Technologies used">
                {item.stack.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </WorkSection>
);

export default Featured;
