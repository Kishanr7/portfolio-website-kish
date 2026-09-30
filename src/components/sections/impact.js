import React from 'react';
import styled from 'styled-components';

const outcomes = [
  {
    metric: '40+ TB',
    title: 'Financial-data platform scope',
    detail: '10+ TB from Oracle and 30 TB from a SAS warehouse moved into an AWS data platform.',
  },
  {
    metric: '70%',
    title: 'Shorter Glue runtime',
    detail:
      'Measured after re-engineering AWS Glue and PySpark workloads for more efficient execution.',
  },
  {
    metric: '65%',
    title: 'Lower storage bill',
    detail:
      'Measured cost reduction from a redesigned migration and storage approach—not a footprint claim.',
  },
  {
    metric: '90x',
    title: 'Faster reconciliation',
    detail:
      'Python and SQL validation tooling replaced a much slower schema and row-comparison process.',
  },
  {
    metric: '30',
    title: 'Use cases delivered on time',
    detail:
      'Daily prioritisation and blocker reviews helped the team land the agreed scope within timeline.',
  },
];

const ImpactSection = styled.section`
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 14px;
  }

  article {
    grid-column: span 4;
    min-height: 238px;
    padding: 28px;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.82);
    box-shadow: 0 12px 36px rgba(37, 48, 80, 0.06);
  }

  article:first-child,
  article:nth-child(2) {
    grid-column: span 6;
  }

  .metric {
    margin-bottom: 30px;
    color: var(--mint-300);
    font-size: clamp(44px, 6vw, 68px);
    font-weight: 600;
    letter-spacing: -0.04em;
    line-height: 0.85;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 24px;
  }
  article p:last-child {
    color: var(--sage-400);
    font-size: 16px;
  }

  @media (max-width: 800px) {
    article,
    article:first-child,
    article:nth-child(2) {
      grid-column: span 6;
    }
  }

  @media (max-width: 540px) {
    article,
    article:first-child,
    article:nth-child(2) {
      grid-column: 1 / -1;
      min-height: auto;
    }
  }
`;

const Impact = () => (
  <ImpactSection id="impact" className="section-shell" aria-labelledby="impact-title">
    <div className="container">
      <div className="section-heading">
        <p className="eyebrow">Evidence, with context</p>
        <h2 id="impact-title">Outcomes tied to real systems.</h2>
        <p>
          The numbers below describe separate, measured outcomes. Each is connected to the workload
          or delivery problem it came from.
        </p>
      </div>
      <div className="grid">
        {outcomes.map(outcome => (
          <article key={outcome.metric + outcome.title}>
            <p className="metric">{outcome.metric}</p>
            <h3>{outcome.title}</h3>
            <p>{outcome.detail}</p>
          </article>
        ))}
      </div>
    </div>
  </ImpactSection>
);

export default Impact;
