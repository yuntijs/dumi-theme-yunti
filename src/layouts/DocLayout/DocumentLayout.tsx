import { Layout } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import { Helmet, useIntl, useLocation, useOutlet } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo, useCallback, useEffect } from 'react';
import { shallow } from 'zustand/shallow';

import { useResponsive } from '@/hooks/useResponsive';
import Changelog from '@/pages/Changelog';
import Docs from '@/pages/Docs';
import Home from '@/pages/Home';
import Footer from '@/slots/Footer';
import Header from '@/slots/Header';
import Sidebar from '@/slots/Sidebar';
import Toc from '@/slots/Toc';
import {
  customConfigSel,
  isHeroPageSel,
  siteTitleSel,
  tocAnchorItemSel,
  useSiteStore,
} from '@/store';

const DocumentLayout = memo(() => {
  const intl = useIntl();
  const { hash } = useLocation();
  const theme = useTheme();
  const { mobile, laptop } = useResponsive();

  const { loading, page, siteTitle, noToc, themeConfig } = useSiteStore(s => {
    const isChanlogPage = s.location.pathname === '/changelog';
    const isHomePage = isHeroPageSel(s);
    let page;

    if (isHomePage || s.location.pathname === '/') {
      page = 'home';
    } else if (isChanlogPage) {
      page = 'changelog';
    } else {
      page = 'docs';
    }

    return {
      loading: s.siteData.loading,
      noToc: tocAnchorItemSel(s).length === 0,
      page: page,
      siteTitle: siteTitleSel(s),
      themeConfig: s.siteData.themeConfig,
    };
  }, shallow);

  const fm = useSiteStore(s => s.routeMeta.frontmatter, isEqual);

  const customConfig = useSiteStore(customConfigSel);

  const hideSidebar =
    page !== 'docs' || mobile || fm.sidebar === false || customConfig?.sider === false;
  const shouldHideToc = fm.toc === false || noToc;
  const hideToc = mobile ? shouldHideToc : !laptop || shouldHideToc;

  const HelmetBlock = useCallback(() => {
    const title = customConfig?.title || fm.title;
    const description = customConfig?.description || fm.description || themeConfig.description;
    const keywords = customConfig?.keywords || fm.keywords || themeConfig.keywords;
    return (
      <Helmet>
        <html lang={intl.locale.replace(/-.+$/, '')} />
        {title && <meta content={title} property="og:title" />}
        {description && <meta content={description} name="description" />}
        {description && <meta content={description} property="og:description" />}
        {keywords && <meta content={keywords.join(',')} name="keywords" />}
        {keywords && <meta content={keywords.join(',')} property="og:keywords" />}
        {!title || page === 'home' ? (
          <title>{siteTitle}</title>
        ) : (
          <title>
            {title} - {siteTitle}
          </title>
        )}
      </Helmet>
    );
  }, [
    customConfig?.description,
    customConfig?.keywords,
    customConfig?.title,
    fm.description,
    fm.keywords,
    fm.title,
    intl.locale,
    page,
    siteTitle,
    themeConfig.description,
    themeConfig.keywords,
  ]);

  // handle hash change or visit page hash after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');

    if (!id) return;
    setTimeout(() => {
      const elm = document.querySelector(`#${decodeURIComponent(id)}`);
      if (elm) {
        elm.scrollIntoView();
        window.scrollBy({ top: -80 });
      }
    }, 1);
  }, [loading, hash]);

  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [siteTitle]);

  const outlet = useOutlet();

  if (
    customConfig?.header === false &&
    customConfig?.sider === false &&
    customConfig?.footer === false
  ) {
    return (
      <>
        <HelmetBlock />
        {outlet}
      </>
    );
  }

  return (
    <>
      <HelmetBlock />
      <Layout
        asideWidth={theme.sidebarWidth}
        footer={customConfig?.footer !== false && <Footer />}
        header={customConfig?.header !== false && <Header />}
        headerHeight={mobile && page !== 'home' ? theme.headerHeight + 36 : theme.headerHeight}
        // @Todo: workaround for sidebar
        key={hideSidebar ? 'full' : 'no-sidebar'}
        sidebar={hideSidebar ? undefined : <Sidebar />}
        toc={hideToc ? undefined : <Toc />}
        tocWidth={hideToc ? 0 : theme.tocWidth}
      >
        {customConfig && outlet}
        {!customConfig && page === 'home' && <Home />}
        {!customConfig && page === 'changelog' && <Changelog />}
        {!customConfig && page === 'docs' && <Docs />}
      </Layout>
    </>
  );
});

export default DocumentLayout;
