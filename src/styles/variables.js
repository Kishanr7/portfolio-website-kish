import { css } from 'styled-components';

const variables = css`
  :root {
    --ink-950: #1e2633;
    --ink-900: #f7f3ec;
    --ink-850: #fffaf3;
    --ink-800: #eee7dc;
    --ink-700: #d8d0c5;
    --cream-50: #1e2633;
    --cream-100: #334052;
    --sage-300: #4b596b;
    --sage-400: #637083;
    --mint-300: #4f60b8;
    --mint-400: #3e4fa6;
    --amber-300: #a95538;
    --border: rgba(51, 64, 82, 0.14);
    --border-strong: rgba(79, 96, 184, 0.3);
    --surface-card: rgba(255, 250, 243, 0.88);
    --surface-card-strong: rgba(255, 250, 243, 0.98);
    --surface-soft: rgba(238, 231, 220, 0.9);
    --accent-wash: rgba(79, 96, 184, 0.09);
    --accent-ring: rgba(79, 96, 184, 0.17);
    --header-bg: rgba(247, 243, 236, 0.9);
    --button-text: #ffffff;
    --page-glow-accent: rgba(79, 96, 184, 0.1);
    --page-glow-warm: rgba(169, 85, 56, 0.07);
    --shadow: 0 24px 64px rgba(48, 43, 38, 0.12);
    --shadow-soft: 0 12px 36px rgba(48, 43, 38, 0.07);
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
      --ink-950: #f3eee6;
      --ink-900: #191b1f;
      --ink-850: #23262c;
      --ink-800: #2b2f36;
      --ink-700: #414750;
      --cream-50: #f3eee6;
      --cream-100: #e1d9cf;
      --sage-300: #c5bdb3;
      --sage-400: #aaa197;
      --mint-300: #a8b3ff;
      --mint-400: #c0c7ff;
      --amber-300: #e9a17e;
      --border: rgba(243, 238, 230, 0.12);
      --border-strong: rgba(168, 179, 255, 0.3);
      --surface-card: rgba(35, 38, 44, 0.9);
      --surface-card-strong: rgba(35, 38, 44, 0.98);
      --surface-soft: rgba(43, 47, 54, 0.92);
      --accent-wash: rgba(168, 179, 255, 0.11);
      --accent-ring: rgba(168, 179, 255, 0.22);
      --header-bg: rgba(25, 27, 31, 0.9);
      --button-text: #181b25;
      --page-glow-accent: rgba(118, 130, 215, 0.14);
      --page-glow-warm: rgba(227, 143, 103, 0.08);
      --shadow: 0 24px 64px rgba(0, 0, 0, 0.3);
      --shadow-soft: 0 12px 36px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default variables;
