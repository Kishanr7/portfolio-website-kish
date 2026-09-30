import React from 'react';
import styled from 'styled-components';

const groups = [
  { title: 'Languages & processing', items: ['Python', 'SQL', 'PySpark', 'Apache Spark'] },
  {
    title: 'AWS & cloud services',
    items: ['Glue', 'Lambda', 'Step Functions', 'DMS', 'SNS', 'Lake Formation'],
  },
  {
    title: 'Data platforms & storage',
    items: ['Amazon S3', 'Redshift', 'RDS', 'Aurora PostgreSQL', 'Parquet'],
  },
  {
    title: 'Orchestration & automation',
    items: ['Airflow', 'Amazon MWAA', 'Boto3', 'CI/CD', 'Docker'],
  },
  {
    title: 'Governance & quality',
    items: ['PII masking', 'RBAC', 'Reconciliation', 'Data quality', 'Monitoring'],
  },
  {
    title: 'Delivery & architecture',
    items: ['Data modelling', 'Cloud migration', 'Technical RFPs', 'Infrastructure assessment'],
  },
];

const SkillsSection = styled.section`
  .layout {
    display: grid;
    grid-template-columns: minmax(250px, 0.55fr) minmax(0, 1.45fr);
    gap: clamp(40px, 9vw, 120px);
  }

  .intro h2 {
    margin-bottom: 18px;
    font-size: clamp(36px, 5vw, 58px);
    letter-spacing: -0.025em;
  }
  .intro p:last-child {
    color: var(--sage-400);
  }

  .groups {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  article {
    padding: 24px;
    border-top: 1px solid var(--border-strong);
    background: var(--surface-card);
  }

  h3 {
    margin-bottom: 16px;
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    color: var(--sage-300);
    font-size: 16px;
  }
  li:not(:last-child)::after {
    margin-left: 10px;
    color: var(--ink-700);
    content: '/';
  }

  @media (max-width: 800px) {
    .layout {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 560px) {
    .groups {
      grid-template-columns: 1fr;
    }
  }
`;

const Skills = () => (
  <SkillsSection id="skills" className="section-shell" aria-labelledby="skills-title">
    <div className="container layout">
      <div className="intro">
        <p className="eyebrow">Working toolkit</p>
        <h2 id="skills-title">Technology in service of the system.</h2>
        <p>Grouped by how I use it—not by badge count or a self-scored progress bar.</p>
      </div>
      <div className="groups">
        {groups.map(group => (
          <article key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </SkillsSection>
);

export default Skills;
