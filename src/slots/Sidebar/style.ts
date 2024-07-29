import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ token, css, prefixCls }, { isSideBarGroupMode }: { isSideBarGroupMode: boolean }) => {
    return {
      asideContainer: css`
        min-height: 100%;
        padding-bottom: 48px;

        &.${prefixCls}-menu-inline {
          user-select: none;
          &.${prefixCls}-menu-root {
            border-inline-end: none;
          }
          .${prefixCls}-menu-submenu-title h4,
          > .${prefixCls}-menu-item, .${prefixCls}-menu-item a {
            overflow: hidden;
            font-size: 14px;
            text-overflow: ellipsis;
          }

          & > .${prefixCls}-menu-item-group:not(:first-child) {
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px dashed ${token.colorBorder};
          }

          .${prefixCls}-menu-item-group:first-of-type {
            .${prefixCls}-menu-item-group-title {
              margin-top: 0;
            }
          }
          .${prefixCls}-menu-item-selected {
            background-color: ${token.colorFillSecondary};
          }
          .${prefixCls}-menu-sub.${prefixCls}-menu-inline {
            background-color: unset;
          }
          .${prefixCls}-menu-item {
            height: 40px;
            line-height: 40px;
          }
          .${prefixCls}-menu-inline .${prefixCls}-menu-item {
            height: 40px;
            line-height: 40px;
          }

          ${!isSideBarGroupMode &&
          css`
            > .${prefixCls}-menu-item,
              > .${prefixCls}-menu-submenu
              > .${prefixCls}-menu-submenu-title,
              > .${prefixCls}-menu-item-group
              > .${prefixCls}-menu-item-group-title,
              > .${prefixCls}-menu-item-group
              > .${prefixCls}-menu-item-group-list
              > .${prefixCls}-menu-item,
              &.${prefixCls}-menu-inline
              > .${prefixCls}-menu-item-group
              > .${prefixCls}-menu-item-group-list
              > .${prefixCls}-menu-item {
              padding-left: 40px !important;

              .${prefixCls}-row-rtl & {
                padding-right: 40px !important;
                padding-left: 16px !important;
              }
            }

            // Nest Category > Type > Article
            &.${prefixCls}-menu-inline {
              .${prefixCls}-menu-item-group-title {
                margin-left: 4px;
                padding-left: 60px;

                .${prefixCls}-row-rtl & {
                  padding-right: 60px;
                  padding-left: 16px;
                }
              }

              .${prefixCls}-menu-item-group-list > .${prefixCls}-menu-item {
                padding-left: 80px !important;

                .${prefixCls}-row-rtl & {
                  padding-right: 80px !important;
                  padding-left: 16px !important;
                }
              }
            }
          `}
        }

        a[disabled] {
          color: ${token.colorTextDisabled};
        }

        .chinese {
          margin-left: 6px;
          font-size: 12px;
          font-weight: normal;
          opacity: 0.67;
        }
      `,
      mainMenu: css`
        .main-menu-inner {
          scrollbar-color: unset;
          scrollbar-width: thin;

          position: sticky;
          top: ${token.headerHeight}px;

          overflow: hidden;
          overflow-y: auto;

          width: 100%;
          height: 100%;
          max-height: calc(100vh - ${token.headerHeight}px);
          padding-top: 16px;
        }

        /* &:hover .main-menu-inner {
        overflow-y: auto;
      } */
      `,
    };
  }
);
