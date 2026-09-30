import React from 'react';
import styled from 'styled-components';
import { email } from '@config';

const ContactSection = styled.section`
  .card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 38px;
    align-items: end;
    padding: clamp(28px, 5vw, 52px);
    border-top: 6px solid var(--contrast-accent);
    border-radius: 8px;
    background: var(--contrast-bg);
    color: var(--contrast-text);
  }

  h2 {
    max-width: 760px;
    margin-bottom: 18px;
    font-size: clamp(40px, 6vw, 68px);
    letter-spacing: -0.035em;
    color: var(--contrast-text);
  }
  .copy {
    max-width: 720px;
    color: var(--contrast-muted);
  }
  .actions {
    display: grid;
    gap: 10px;
    min-width: 220px;
  }
  .linkedin {
    color: var(--contrast-text);
    font-size: 13px;
    text-align: center;
  }
  .linkedin:hover {
    color: var(--contrast-accent);
  }
  .button {
    border-color: var(--contrast-accent);
    background: var(--contrast-accent);
    color: #172033;
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
          <h2 id="contact-title">Let’s talk about your data engineering role.</h2>
          <p className="copy">
            I’m open to senior and lead data engineering opportunities where I can stay close to the
            technical work and help a team deliver well.
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
            rel="noopener noreferrer">
            Connect on LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  </ContactSection>
);

export default Contact;
