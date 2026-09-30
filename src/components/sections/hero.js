import React from 'react';
import styled from 'styled-components';
import { email } from '@config';

const HeroSection = styled.section`
  padding: clamp(54px, 7vw, 84px) 0 44px;

  .grid {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.65fr);
    gap: clamp(44px, 6vw, 76px);
    align-items: center;
  }

  h1 {
    max-width: 780px;
    margin-bottom: 24px;
    font-size: clamp(48px, 5.8vw, 76px);
    letter-spacing: -0.045em;
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

  .availability {
    max-width: 650px;
    margin-top: 20px;
    color: var(--sage-400);
    font-size: 15px;
  }

  .profile-card {
    position: relative;
    padding: 28px;
    overflow: hidden;
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-lg);
    background: linear-gradient(145deg, var(--surface-card-strong), var(--surface-soft));
    box-shadow: var(--shadow);
  }

  .card-label {
    margin-bottom: 22px;
    color: var(--amber-300);
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  dl {
    display: grid;
    gap: 14px;
    margin: 0;
  }

  dl div {
    display: grid;
    grid-template-columns: 92px 1fr;
    gap: 16px;
    padding-bottom: 13px;
    border-bottom: 1px solid var(--border);
  }

  dt {
    color: var(--sage-400);
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
  }

  dd {
    margin: 0;
    color: var(--cream-100);
    font-size: 16px;
  }

  .metrics {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
    margin-top: clamp(38px, 6vw, 64px);
  }

  .metric {
    padding: 20px 22px;
    border-top: 1px solid var(--border-strong);
    background: var(--surface-card);
  }

  .metric strong {
    display: block;
    margin-bottom: 5px;
    color: var(--mint-300);
    font-size: clamp(28px, 4vw, 42px);
    line-height: 1;
  }

  .metric span {
    color: var(--sage-400);
    font-size: 14px;
  }

  @media (max-width: 900px) {
    min-height: auto;
    .grid {
      grid-template-columns: 1fr;
    }
    .profile-card {
      max-width: 600px;
    }
  }

  @media (max-width: 720px) {
    .metrics {
      grid-template-columns: repeat(2, minmax(0, 1fr));
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
    .profile-card {
      padding: 22px;
    }
  }
`;

const Hero = () => (
  <HeroSection aria-labelledby="hero-title">
    <div className="container grid">
      <div>
        <p className="eyebrow">Kishan Rekhadia · Senior Consultant, Data Engineering</p>
        <h1 id="hero-title">I build reliable data platforms on AWS.</h1>
        <p className="intro">
          I’m a Senior Consultant at Deloitte with 5+ years in data engineering. I work across ETL,
          analytics and cloud infrastructure, and I stay hands-on with Python, SQL and PySpark.
        </p>
        <div className="actions">
          <a className="button" href="#work">
            See selected work ↓
          </a>
          <a
            className="button secondary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer">
            Download résumé ↗
          </a>
        </div>
        <p className="availability">
          Based in Surat, India · Open to senior and lead data engineering opportunities ·{' '}
          <a className="text-link" href={`mailto:${email}`}>
            Get in touch
          </a>
        </p>
      </div>

      <aside className="profile-card" aria-label="Kishan’s professional profile">
        <p className="card-label">Quick profile</p>
        <dl>
          <div>
            <dt>Current</dt>
            <dd>Senior Consultant, Deloitte</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>AWS data platforms and migrations</dd>
          </div>
          <div>
            <dt>Experience</dt>
            <dd>5+ years</dd>
          </div>
          <div>
            <dt>Recognition</dt>
            <dd>Deloitte President Bonus, 2026</dd>
          </div>
        </dl>
      </aside>
    </div>

    <div className="container metrics" aria-label="Selected career results">
      <div className="metric">
        <strong>40+ TB</strong>
        <span>migrated to AWS</span>
      </div>
      <div className="metric">
        <strong>70%</strong>
        <span>shorter Glue runtime</span>
      </div>
      <div className="metric">
        <strong>65%</strong>
        <span>lower storage bill</span>
      </div>
      <div className="metric">
        <strong>90x</strong>
        <span>faster reconciliation</span>
      </div>
    </div>
  </HeroSection>
);

export default Hero;
