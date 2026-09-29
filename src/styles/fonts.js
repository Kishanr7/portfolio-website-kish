import { css } from 'styled-components';
import CalibreRegularWoff2 from '@fonts/Calibre/Calibre-Regular.woff2';
import CalibreSemiboldWoff2 from '@fonts/Calibre/Calibre-Semibold.woff2';
import SFMonoRegularWoff2 from '@fonts/SFMono/SFMono-Regular.woff2';

const Fonts = css`
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreRegularWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreSemiboldWoff2}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoRegularWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

export default Fonts;
