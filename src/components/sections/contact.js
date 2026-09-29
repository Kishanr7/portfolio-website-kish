import React from 'react';
import styled from 'styled-components';
import { email } from '@config';

const ContactSection = styled.section`
  .card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 38px;
    align-items: end;
    padding: clamp(32px, 7vw, 72px);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-lg);
    background: linear-gradient(135deg, var(--ink-800), var(--ink-850));
    box-shadow: var(--shadow);
  }

  h2 {
    max-width: 760px;
    margin-bottom: 18px;
    font-size: clamp(40px, 6vw, 68px);
    letter-spacing: -0.035em;
  }
  .copy {
    max-width: 720px;
    color: var(--sage-300);
  }
  .actions {
    display: grid;
    gap: 10px;
    min-width: 220px;
  }
  .linkedin {
    color: var(--cream-100);
    font-family: var(--font-mono);
    font-size: 11px;
    text-align: center;
  }
  .linkedin:hover {
    color: var(--mint-300);
  }

  @media (max-width: 800px) {
    .card {
      grid-template-columns: 1fr;
      align-items: start;
    }
    .actions {
      min-width: 0;
    }
  }
`;

const Contact = () => (
  <ContactSection id="contact" className="section-shell" aria-labelledby="contact-title">
    <div className="container">
      <div className="card">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Building a data platform that needs to work in the real world?</h2>
          <p className="copy">
            I’m open to conversations with engineering leaders, recruiters and collaborators about
            senior data engineering and suitable lead data engineering opportunities.
          </p>
        </div>
        <div className="actions">
          <a className="button" href={`mailto:${email}`}>
            Email Kishan
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/kishan-rekhadia-757b69126/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  </ContactSection>
);

export default Contact;
