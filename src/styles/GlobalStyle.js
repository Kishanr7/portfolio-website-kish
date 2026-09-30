import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

  *, *::before, *::after { box-sizing: border-box; }

  html {
    color-scheme: light dark;
    scroll-behavior: smooth;
    scrollbar-color: var(--ink-700) var(--ink-900);
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
    background: var(--ink-900);
    color: var(--sage-300);
    font-family: var(--font-sans);
    font-size: 18px;
    line-height: 1.58;
    -webkit-font-smoothing: antialiased;
  }

  body.menu-open { overflow: hidden; }
  ::selection { background: var(--mint-300); color: var(--button-text); }
  :focus-visible { outline: 3px solid var(--amber-300); outline-offset: 4px; }
  a { color: inherit; text-decoration: none; }
  button, a { -webkit-tap-highlight-color: transparent; }
  button { font: inherit; }
  img, svg { display: block; max-width: 100%; }
  h1, h2, h3, p { margin-top: 0; }
  h1, h2, h3 { color: var(--cream-50); line-height: 1.04; }
  p:last-child { margin-bottom: 0; }
  main {
    overflow: hidden;
    scroll-margin-top: var(--header-height);
  }
  section { scroll-margin-top: calc(var(--header-height) + 24px); }

  .container {
    width: min(100% - 40px, var(--container));
    margin-inline: auto;
  }

  .section-shell { padding: clamp(48px, 5.5vw, 74px) 0; }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
    color: var(--amber-300);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .eyebrow::before {
    width: 28px;
    height: 2px;
    background: currentColor;
    content: '';
  }

  .section-heading { max-width: 760px; margin-bottom: 32px; }
  .section-heading h2 {
    margin-bottom: 14px;
    font-size: clamp(34px, 4.2vw, 52px);
    letter-spacing: -0.02em;
  }
  .section-heading p { max-width: 670px; color: var(--sage-400); }

  .button {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 11px 20px 9px;
    border: 1px solid var(--mint-300);
    border-radius: 7px;
    background: var(--mint-300);
    color: var(--button-text);
    font-family: var(--font-mono);
    font-size: 13px;
    line-height: 1;
    transition: transform var(--transition), background var(--transition), color var(--transition);
  }
  .button:hover { transform: translateY(-2px); background: var(--mint-400); }
  .button.secondary { background: transparent; color: var(--cream-100); }
  .button.secondary:hover { background: var(--accent-wash); color: var(--mint-400); }

  .text-link {
    color: var(--cream-100);
    text-decoration: underline;
    text-decoration-color: var(--border-strong);
    text-underline-offset: 5px;
    transition: color var(--transition), text-decoration-color var(--transition);
  }
  .text-link:hover { color: var(--mint-300); text-decoration-color: var(--mint-300); }

  .skip-to-content {
    position: fixed;
    top: 10px;
    left: 12px;
    z-index: 100;
    padding: 10px 14px;
    border-radius: 6px;
    background: var(--ink-950);
    color: var(--button-text);
    transform: translateY(-160%);
  }
  .skip-to-content:focus { transform: translateY(0); }

  @media (max-width: 620px) {
    body { font-size: 18px; }
    .container { width: min(100% - 28px, var(--container)); }
    .section-heading { margin-bottom: 32px; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyle;
