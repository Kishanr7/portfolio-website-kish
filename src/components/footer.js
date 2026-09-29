import React from 'react';
import styled from 'styled-components';
import { email, socialMedia } from '@config';

const StyledFooter = styled.footer`
  border-top: 1px solid var(--border);
  padding: 30px 0;

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  p {
    margin: 0;
    color: var(--sage-400);
    font-family: var(--font-mono);
    font-size: 11px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: var(--sage-300);
    font-family: var(--font-mono);
    font-size: 11px;
  }
  a:hover {
    color: var(--mint-300);
  }

  @media (max-width: 660px) {
    .inner {
      align-items: flex-start;
      flex-direction: column-reverse;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="container inner">
      <p>Designed and built by Kishan Rekhadia · Surat, India</p>
      <ul aria-label="Contact and social links">
        {socialMedia.map(({ name, url }) => (
          <li key={name}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </li>
        ))}
        <li>
          <a href={`mailto:${email}`}>Email</a>
        </li>
      </ul>
    </div>
  </StyledFooter>
);

export default Footer;
