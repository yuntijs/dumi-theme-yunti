import { StyleProvider } from '@ant-design/cssinjs';
import { Giscus, ImageGallery } from '@lobehub/ui';
import { useLocation, useOutlet } from 'dumi';
import { memo, useCallback, useEffect } from 'react';
import { Center } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';

import { useResponsive } from '@/hooks/useResponsive';
import ApiHeader from '@/slots/ApiHeader';
import Content from '@/slots/Content';
import { giscusSel, isApiPageSel, useSiteStore } from '@/store';

import { useStyles } from './styles';

const Documents = memo(() => {
  const outlet = useOutlet();
  const location = useLocation();
  const { mobile } = useResponsive();
  const { isApiPage, giscus } = useSiteStore(
    st => ({ giscus: giscusSel(st), isApiPage: isApiPageSel(st) }),
    shallow
  );
  const { styles } = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [location.pathname]);

  const Comment = useCallback(
    () =>
      giscus && (
        <div style={{ marginTop: 64 }}>
          <Giscus
            category={giscus.category}
            categoryId={giscus.categoryId}
            id="lobehub"
            mapping="title"
            repo={giscus.repo}
            repoId={giscus.repoId}
          />
        </div>
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [giscus, location.pathname]
  );
  return (
    <StyleProvider hashPriority="high">
      <div className={styles.background} />
      <Center className={styles.content} style={{ marginBottom: 48, padding: mobile ? 0 : 24 }}>
        {isApiPage ? (
          <div style={{ padding: mobile ? 16 : 0, width: '100%' }}>
            <ApiHeader />
          </div>
        ) : undefined}
        <Content>
          <ImageGallery>{outlet}</ImageGallery>
          {giscus && <Comment />}
        </Content>
      </Center>
    </StyleProvider>
  );
});

export default Documents;
