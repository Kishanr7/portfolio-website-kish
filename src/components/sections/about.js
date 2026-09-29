import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const AboutSection = styled.section`
  .layout {
    display: grid;
    grid-template-columns: minmax(280px, 0.7fr) minmax(0, 1.3fr);
    gap: clamp(46px, 9vw, 118px);
    align-items: center;
  }

  .portrait-wrap {
    position: relative;
  }
  .portrait-wrap::before {
    position: absolute;
    inset: 18px -18px -18px 18px;
    z-index: 0;
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-lg);
    content: '';
  }

  .portrait {
    position: relative;
    z-index: 1;
    overflow: hidden;
    border-radius: var(--radius-lg);
  }
  .copy h2 {
    margin-bottom: 24px;
    font-size: clamp(36px, 5vw, 58px);
    letter-spacing: -0.025em;
  }
  .copy p {
    max-width: 690px;
    color: var(--sage-300);
  }

  .principles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 30px;
  }
  .principles div {
    padding-top: 14px;
    border-top: 1px solid var(--border-strong);
  }
  .principles strong {
    display: block;
    margin-bottom: 5px;
    color: var(--cream-100);
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
  }
  .principles span {
    color: var(--sage-400);
    font-size: 14px;
  }

  @media (max-width: 780px) {
    .layout {
      grid-template-columns: 1fr;
    }
    .portrait-wrap {
      width: min(88%, 500px);
    }
  }
  @media (max-width: 520px) {
    .principles {
      grid-template-columns: 1fr;
    }
  }
`;

const About = () => (
  <AboutSection id="about" className="section-shell" aria-labelledby="about-title">
    <div className="container layout">
      <div className="portrait-wrap">
        <StaticImage
          className="portrait"
          src="../../images/me1.jpg"
          alt="Kishan Rekhadia outdoors"
          width={760}
          height={840}
          quality={82}
          placeholder="blurred"
          formats={['auto', 'webp', 'avif']}
          loading="lazy"
        />
      </div>
      <div className="copy">
        <p className="eyebrow">About</p>
        <h2 id="about-title">Senior scope, still close to the code.</h2>
        <p>
          I’m a data engineer based in Surat, India, with 5+ years of experience primarily in
          financial services. At Deloitte, I’m a Senior Consultant and the project senior lead
          across ETL, Reporting, Analytics and Infrastructure.
        </p>
        <p>
          My work sits where platform design meets delivery: turning migration constraints into
          operating pipelines, building controls that make data trustworthy, and improving systems
          with evidence rather than fashionable abstractions.
        </p>
        <div className="principles" aria-label="Engineering priorities">
          <div>
            <strong>Correctness</strong>
            <span>Reconciliation before assumption</span>
          </div>
          <div>
            <strong>Operability</strong>
            <span>Auditing, alerts and clear recovery</span>
          </div>
          <div>
            <strong>Economics</strong>
            <span>Runtime and bill, measured separately</span>
          </div>
        </div>
      </div>
    </div>
  </AboutSection>
);

export default About;
