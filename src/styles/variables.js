import { css } from 'styled-components';

const variables = css`
  :root {
    --ink-950: #040a08;
    --ink-900: #07120f;
    --ink-850: #0a1814;
    --ink-800: #0d1f19;
    --ink-700: #173228;
    --cream-50: #faf8f2;
    --cream-100: #f1ede3;
    --sage-300: #b8c8be;
    --sage-400: #95a99e;
    --mint-300: #9be8c2;
    --mint-400: #72d8aa;
    --amber-300: #f4c46f;
    --border: rgba(184, 200, 190, 0.16);
    --border-strong: rgba(155, 232, 194, 0.34);
    --shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
    --font-sans: 'Calibre', 'Inter', 'Segoe UI', sans-serif;
    --font-mono: 'SF Mono', 'Cascadia Code', 'Consolas', monospace;
    --container: 1180px;
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 26px;
    --header-height: 76px;
    --transition: 180ms ease;
  }
`;

export default variables;
