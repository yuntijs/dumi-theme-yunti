import { createGlobalStyle } from 'antd-style';

const GlobalStyle = createGlobalStyle`
  #nprogress {
    .bar {
      background: ${({ theme }) => theme.colorText};
    }

    .peg {
      display: none !important;
    }

    .spinner {
      display: none;
    }
  }

  .dumi-default-table {
    &-content {
      table {
        display: table;
        table-layout: auto;
        width: 100%;
      }
    }
  }
`;

export default GlobalStyle;
