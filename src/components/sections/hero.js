import React from 'react';
import styled from 'styled-components';
import { email } from '@config';

const HeroSection = styled.section`
  display: grid;
  min-height: calc(100svh - var(--header-height));
  align-items: center;
  padding: clamp(58px, 8vw, 104px) 0;

  .grid {
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(330px, 0.7fr);
    gap: clamp(44px, 6vw, 76px);
    align-items: center;
  }

  h1 {
    max-width: 850px;
    margin-bottom: 24px;
    font-size: clamp(52px, 6.2vw, 80px);
    letter-spacing: -0.045em;
  }

  h1 span {
    display: block;
    color: var(--mint-300);
  }

  .intro {
    max-width: 690px;
    margin-bottom: 32px;
    color: var(--sage-300);
    font-size: clamp(20px, 2vw, 25px);
    line-height: 1.4;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .microcopy {
    max-width: 650px;
    margin-top: 20px;
    color: var(--sage-400);
    font-size: 15px;
  }

  .system-card {
    position: relative;
    padding: 28px;
    overflow: hidden;
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-lg);
    background: linear-gradient(145deg, var(--surface-card-strong), var(--surface-soft));
    box-shadow: var(--shadow);
  }

  .system-card::after {
    position: absolute;
    right: -70px;
    bottom: -90px;
    width: 220px;
    height: 220px;
    border: 1px solid var(--accent-ring);
    border-radius: 50%;
    content: '';
  }

  .card-label {
    margin-bottom: 28px;
    color: var(--amber-300);
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .pipeline {
    display: grid;
    gap: 13px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .pipeline li {
    display: grid;
    grid-template-columns: 30px 1fr;
    gap: 13px;
    align-items: center;
    color: var(--cream-100);
    font-size: 17px;
  }

  .pipeline span {
    display: grid;
    width: 30px;
    height: 30px;
    place-items: center;
    border: 1px solid var(--border-strong);
    border-radius: 50%;
    color: var(--mint-300);
    font-family: var(--font-mono);
    font-size: 10px;
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 28px;
    padding-top: 22px;
    border-top: 1px solid var(--border);
  }

  .stack span {
    padding: 6px 9px;
    border-radius: 999px;
    background: var(--accent-wash);
    color: var(--sage-300);
    font-family: var(--font-mono);
    font-size: 10px;
  }

  @media (max-width: 900px) {
    min-height: auto;
    .grid {
      grid-template-columns: 1fr;
    }
    .system-card {
      max-width: 600px;
    }
  }

  @media (max-width: 520px) {
    h1 {
      font-size: clamp(46px, 15vw, 64px);
    }
    .actions {
      align-items: stretch;
      flex-direction: column;
    }
    .button {
      width: 100%;
    }
    .system-card {
      padding: 22px;
    }
  }
`;

const Hero = () => (
  <HeroSection aria-labelledby="hero-title">
    <div className="container grid">
      <div>
        <p className="eyebrow">Kishan Rekhadia · Senior Consultant, Data Engineering</p>
        <h1 id="hero-title">
          AWS data systems,
          <span>engineered to hold up.</span>
        </h1>
        <p className="intro">
          I build and lead delivery for financial-data platforms where migration scale, data
          correctness, performance and operating cost all matter.
        </p>
        <div className="actions">
          <a className="button" href="#impact">
            See the evidence ↓
          </a>
          <a className="button secondary" href={`mailto:${email}`}>
            Start a conversation
          </a>
        </div>
        <p className="microcopy" id="resume-note">
          5+ years across Deloitte and Infosys. The current career record is on this page and in the{' '}
          <a className="text-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            downloadable résumé
          </a>{' '}
          — updated September 2026.
        </p>
      </div>

      <aside className="system-card" aria-label="Current project scope">
        <p className="card-label">Current project scope</p>
        <ol className="pipeline">
          <li>
            <span>01</span>ETL and data movement
          </li>
          <li>
            <span>02</span>Reporting and analytics
          </li>
          <li>
            <span>03</span>Infrastructure and controls
          </li>
          <li>
            <span>04</span>Monitoring and delivery
          </li>
        </ol>
        <div className="stack" aria-label="Core technologies">
          <span>AWS</span>
          <span>Python</span>
          <span>SQL</span>
          <span>PySpark</span>
          <span>Airflow</span>
        </div>
      </aside>
    </div>
  </HeroSection>
);

export default Hero;
