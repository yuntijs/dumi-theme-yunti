import { Layout } from '@lobehub/ui';
import { useResponsive, useTheme } from 'antd-style';
import { Helmet, useIntl, useLocation, useOutlet } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo, useCallback, useEffect } from 'react';
import { shallow } from 'zustand/shallow';

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

  const { loading, page, siteTitle, noToc } = useSiteStore(s => {
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
    };
  }, shallow);

  const fm = useSiteStore(s => s.routeMeta.frontmatter, isEqual);

  const customConfig = useSiteStore(customConfigSel);

  const hideSidebar =
    page !== 'docs' || mobile || fm.sidebar === false || customConfig?.sider === false;
  const shouldHideToc = fm.toc === false || noToc;
  const hideToc = mobile ? shouldHideToc : !laptop || shouldHideToc;

  const HelmetBlock = useCallback(
    () => (
      <Helmet>
        <html lang={intl.locale.replace(/-.+$/, '')} />
        {fm.title && <meta content={fm.title} property="og:title" />}
        {fm.description && <meta content={fm.description} name="description" />}
        {fm.description && <meta content={fm.description} property="og:description" />}
        {fm.keywords && <meta content={fm.keywords.join(',')} name="keywords" />}
        {fm.keywords && <meta content={fm.keywords.join(',')} property="og:keywords" />}
        {!fm.title || page === 'home' ? (
          <title>{siteTitle}</title>
        ) : (
          <title>
            {fm.title} - {siteTitle}
          </title>
        )}
      </Helmet>
    ),
    [intl, fm, siteTitle, page]
  );

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
