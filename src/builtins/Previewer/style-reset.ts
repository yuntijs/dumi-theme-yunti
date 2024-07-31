import { FullToken, css } from 'antd-style';

// reset style of https://github.com/lobehub/lobe-ui/blob/master/src/Markdown/markdown.style.ts
export const resetStyle = (token: FullToken) => css`
  /* stylelint-disable */
  font-size: ${token.fontSize}px;
  line-height: ${token.lineHeight};
  word-break: normal;

  a {
    color: revert;

    &:hover {
      color: revert;
    }
  }

  blockquote {
    margin-block: revert;
    margin-inline: revert;
    padding-block: revert;
    padding-inline: revert;

    color: revert;

    border-inline-start: revert;
  }
  code {
    display: revert;

    margin-inline: revert;
    padding-block: revert;
    padding-inline: revert;

    font-family: revert;
    font-size: revert;
    line-height: revert;
    word-break: revert;
    white-space: revert;

    background: revert;
    border: revert;
    border-radius: revert;
  }

  details {
    margin-block: revert;
    padding-block: revert;
    padding-inline: revert;

    background: revert;
    border-radius: revert;
    box-shadow: revert;

    summary {
      cursor: revert;
      display: revert;
      align-items: revert;
      list-style: revert;

      &::before {
        content: revert;

        position: revert;
        inset-inline-end: revert;
        transform: revert;

        display: revert;

        width: revert;
        height: revert;

        font-family: revert;

        border-block-end: revert;
        border-inline-end: revert;

        transition: revert;
      }

      &[open] {
        summary {
          padding-block-end: revert;
          border-block-end: revert;

          &::before {
            transform: revert;
          }
        }
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block: revert;
    font-weight: revert;
    line-height: revert;
  }

  h1 {
    font-size: revert;
  }

  h2 {
    font-size: revert;
  }

  h3 {
    font-size: revert;
  }

  h4 {
    font-size: revert;
  }

  h5,
  h6 {
    font-size: revert;
  }

  hr {
    margin-block: revert;

    border-color: revert;
    border-style: revert;
    border-width: revert;
    border-block-start: revert;
    border-inline-start: revert;
    border-inline-end: revert;
  }

  img {
    max-width: revert;
  }

  > img,
  > p > img {
    margin-block: revert;
    border-radius: revert;
    box-shadow: revert;
  }

  kbd {
    cursor: revert;

    display: revert;

    min-width: revert;
    margin-inline: revert;
    padding-block: revert;
    padding-inline: revert;

    font-family: revert;
    font-size: revert;
    font-weight: revert;
    line-height: revert;
    text-align: revert;

    background: revert;
    border: revert;
    border-radius: revert;
  }

  li {
    margin-block: revert;

    p {
      display: revert;
    }
  }

  ul,
  ol {
    margin-block: revert;
    margin-inline-start: revert;
    padding-inline-start: revert;
    list-style-position: revert;

    ul,
    ol {
      margin-block: revert;
    }

    li {
      margin-inline-start: revert;
    }
  }

  ol {
    list-style: revert;
  }

  ul {
    list-style-type: revert;

    li {
      &::before {
        content: revert;
        display: revert;
        margin-inline: revert;
        opacity: revert;
      }
    }
  }

  p {
    margin-block: revert;
    line-height: revert;
    letter-spacing: revert;
  }

  pre,
  [data-code-type='highlighter'] {
    white-space: revert;
    border: revert;

    > code {
      padding: revert;

      font-family: revert;
      font-size: revert;
      line-height: revert;

      border: revert;
    }
  }

  strong {
    font-weight: revert;
  }

  table {
    unicode-bidi: revert;
    overflow: revert;
    display: revert;
    border-spacing: revert;
    border-collapse: revert;

    box-sizing: revert;
    width: revert;
    max-width: revert;
    margin-block: revert;

    text-align: revert;
    text-indent: revert;
    text-wrap: revert;
    word-break: revert;
    overflow-wrap: revert;

    background: revert;
    border-radius: revert;
    box-shadow: revert;

    code {
      word-break: revert;
    }

    thead {
      background: revert;
    }

    tr {
      box-shadow: revert;
    }

    th,
    td {
      min-width: revert;
      padding-block: revert;
      padding-inline: revert;
      text-align: revert;
    }
  }

  > video,
  > p > video {
    margin-block: revert;
    border-radius: revert;
    box-shadow: revert;
  }

  video {
    max-width: revert;
  }
`;
