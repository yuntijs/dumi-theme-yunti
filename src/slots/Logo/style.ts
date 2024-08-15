import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, token }, { mobile }: { mobile?: boolean }) => css`
    display: inline-flex;
    align-items: center;

    font-size: 22px;
    font-weight: 500;
    line-height: 1;
    color: ${token.colorText};
    text-decoration: none;

    ${mobile} {
      font-size: 18px;
    }
  `
);
