import { css } from 'antd-style';

export const resetStyle = css`
  blockquote,
  code,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  img,
  kbd,
  p,
  pre,
  strong,
  video {
    all: unset;
  }

  details {
    all: unset;

    summary {
      all: unset;
    }
  }

  a {
    color: unset;

    &:hover {
      color: unset;
    }
  }

  ol,
  ul {
    all: unset;

    & > li {
      all: unset;
    }
  }

  table {
    all: unset;

    code,
    thead,
    tr,
    th,
    td {
      all: unset;
    }
  }
`;
