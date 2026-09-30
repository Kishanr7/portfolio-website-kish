import { css } from 'styled-components';

const variables = css`
  :root {
    --ink-950: #172033;
    --ink-900: #f3ede3;
    --ink-850: #fffaf2;
    --ink-800: #e7ddcf;
    --ink-700: #b6a995;
    --cream-50: #172033;
    --cream-100: #263957;
    --sage-300: #3e4b5e;
    --sage-400: #5d6979;
    --mint-300: #3157a4;
    --mint-400: #244589;
    --amber-300: #b34b34;
    --border: rgba(23, 32, 51, 0.18);
    --border-strong: rgba(49, 87, 164, 0.52);
    --surface-card: #fffaf2;
    --surface-card-strong: #fffdf8;
    --surface-soft: #e7ddcf;
    --accent-wash: rgba(49, 87, 164, 0.09);
    --accent-ring: rgba(49, 87, 164, 0.22);
    --header-bg: rgba(243, 237, 227, 0.94);
    --button-text: #fffaf2;
    --contrast-bg: #1c3555;
    --contrast-text: #fff6e9;
    --contrast-muted: #d8e0e9;
    --contrast-accent: #ff9b73;
    --shadow: 0 18px 48px rgba(23, 32, 51, 0.12);
    --shadow-soft: 0 8px 24px rgba(23, 32, 51, 0.07);
    --font-sans: 'Calibre', 'Inter', 'Segoe UI', sans-serif;
    --font-mono: 'SF Mono', 'Cascadia Code', 'Consolas', monospace;
    --container: 1180px;
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 26px;
    --header-height: 76px;
    --transition: 180ms ease;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --ink-950: #fff3df;
      --ink-900: #171b24;
      --ink-850: #202734;
      --ink-800: #293241;
      --ink-700: #4e5969;
      --cream-50: #fff3df;
      --cream-100: #e6edf5;
      --sage-300: #c7d0dc;
      --sage-400: #a8b2c0;
      --mint-300: #91a7ff;
      --mint-400: #b3c0ff;
      --amber-300: #ff936f;
      --border: rgba(230, 237, 245, 0.16);
      --border-strong: rgba(145, 167, 255, 0.58);
      --surface-card: #202734;
      --surface-card-strong: #252d3a;
      --surface-soft: #293241;
      --accent-wash: rgba(145, 167, 255, 0.11);
      --accent-ring: rgba(145, 167, 255, 0.25);
      --header-bg: rgba(23, 27, 36, 0.94);
      --button-text: #171b24;
      --contrast-bg: #304f70;
      --contrast-text: #fff5e8;
      --contrast-muted: #d9e4ee;
      --contrast-accent: #ffad88;
      --shadow: 0 24px 64px rgba(0, 0, 0, 0.3);
      --shadow-soft: 0 12px 36px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default variables;
