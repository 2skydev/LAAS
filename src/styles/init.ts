import { memo } from 'react';

import { createGlobalStyle } from 'styled-components';

export const InitGlobalStyled = memo(createGlobalStyle`
  @import "/fonts/Boxicons/css/boxicons.css";

  @font-face {
    src: url("/fonts/Aquatico/Aquatico-Regular.woff2");
    font-family: "Aquatico";
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url("/fonts/NanumSquareRound/NanumSquareRoundOTFL.woff2");
    font-family: "NanumSquareRound";
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    src: url("/fonts/NanumSquareRound/NanumSquareRoundOTFR.woff2");
    font-family: "NanumSquareRound";
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    src: url("/fonts/NanumSquareRound/NanumSquareRoundOTFB.woff2");
    font-family: "NanumSquareRound";
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    src: url("/fonts/NanumSquareRound/NanumSquareRoundOTFEB.woff2");
    font-family: "NanumSquareRound";
    font-weight: 900;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "NanumSquareRound";
  }

  body {
    .ant-switch {
      height: 28px;
      width: 56px;

      .ant-switch-handle {
        width: 24px;
        height: 24px;

        &::before {
          border-radius: 50%;
        }
      }

      .ant-switch-inner {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .ant-switch-checked .ant-switch-handle {
      left: calc(100% - 24px - 2px);
    }

    .ant-btn {
      border-radius: 4px;
    }

    .rightButtons {
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;
    }
  }
`);
