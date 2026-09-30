import React from 'react';
import styled from 'styled-components';

const roles = [
  {
    title: 'Senior Consultant - Data Engineering',
    company: 'Deloitte',
    url: 'https://www.deloitte.com/',
    dates: 'Jun 2026 - Present',
    summary: 'Project senior lead across ETL, Reporting, Analytics and Infrastructure.',
    bullets: [
      'Set technical direction and coordinate delivery across the project’s data and infrastructure workstreams.',
      'Designed an event-driven AWS platform spanning on-premises ingestion, bronze and silver processing, analytics base tables, model-refresh triggers and dashboards, with auditing and monitoring throughout.',
      'Re-engineered AWS Glue and PySpark workloads to reduce measured runtime by 70%.',
    ],
  },
  {
    title: 'Consultant - Data Engineering',
    company: 'Deloitte',
    url: 'https://www.deloitte.com/',
    dates: 'Oct 2023 - May 2026',
    summary:
      'AWS migration, governance and data-quality engineering for financial-services programs.',
    bullets: [
      'Designed full-load and incremental pipelines that moved 10+ TB from Oracle and 30 TB from a SAS warehouse to Amazon S3 in Parquet format, reducing the storage bill by 65%.',
      'Built deterministic PII-masking pipelines in Glue and PySpark, preserving referential integrity and enforcing role-based access through Lake Formation.',
      'Developed metadata-driven reconciliation across Oracle, S3, RDS and Redshift, using Aurora PostgreSQL rules and consolidated validation outputs.',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Infosys',
    url: 'https://www.infosys.com/',
    dates: 'Jun 2021 - Sep 2023',
    summary: 'AWS modernisation and analytics automation for a US financial-services program.',
    bullets: [
      'Built Python ingestion and transformation services across EC2, Lambda and S3, with batch orchestration in Amazon MWAA and Airflow.',
      'Developed production Airflow DAGs with deployment support, data-quality checks and failure alerting.',
      'Built Python and SQL reconciliation tooling for schema and row-level validation, achieving a measured 90x improvement over the previous process.',
    ],
  },
];

const ExperienceSection = styled.section`
  .timeline {
    position: relative;
    display: grid;
    gap: 18px;
  }

  article {
    display: grid;
    grid-template-columns: 245px minmax(0, 1fr);
    gap: clamp(28px, 5vw, 72px);
    padding: clamp(24px, 3vw, 34px);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: var(--surface-card);
  }

  .role-meta {
    align-self: start;
  }

  .dates {
    margin-bottom: 14px;
    color: var(--amber-300);
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h3 {
    margin-bottom: 8px;
    font-size: 28px;
  }

  .company {
    color: var(--mint-300);
    font-family: var(--font-mono);
    font-size: 13px;
  }

  .summary {
    margin-bottom: 20px;
    color: var(--cream-100);
    font-size: 21px;
    line-height: 1.35;
  }

  ul {
    display: grid;
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    padding-left: 21px;
    color: var(--sage-400);
    font-size: 16px;
  }
  li::before {
    position: absolute;
    left: 0;
    color: var(--mint-300);
    content: '↳';
  }

  @media (max-width: 760px) {
    article {
      grid-template-columns: 1fr;
      gap: 24px;
    }
    .role-meta {
      padding-bottom: 22px;
      border-bottom: 1px solid var(--border);
    }
  }
`;

const Jobs = () => (
  <ExperienceSection id="experience" className="section-shell" aria-labelledby="experience-title">
    <div className="container">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2 id="experience-title">From building pipelines to leading delivery.</h2>
        <p>A quick view of my progression across Deloitte and Infosys.</p>
      </div>
      <div className="timeline">
        {roles.map(role => (
          <article key={role.title + role.dates}>
            <div className="role-meta">
              <p className="dates">{role.dates}</p>
              <h3>{role.title}</h3>
              <a className="company" href={role.url} target="_blank" rel="noopener noreferrer">
                {role.company} ↗
              </a>
            </div>
            <div>
              <p className="summary">{role.summary}</p>
              <ul>
                {role.bullets.map(bullet => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </ExperienceSection>
);

export default Jobs;
