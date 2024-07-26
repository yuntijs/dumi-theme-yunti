import { Icon } from '@lobehub/ui';
import { Link, useIntl } from 'dumi';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { memo, useMemo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useStyles } from './Linker.style';

interface LinkerProps {
  link: string;
  title: string;
  type?: 'prev' | 'next';
}

const Linker = memo<LinkerProps>(({ title, link, type }) => {
  const { styles, cx } = useStyles();
  const intl = useIntl();
  const navContent = useMemo(() => {
    switch (type) {
      case 'prev': {
        return (
          <>
            <Icon icon={ArrowLeft} />
            <span style={{ lineHeight: 1 }}>
              {intl.formatMessage({ id: 'content.footer.actions.previous' })}
            </span>
          </>
        );
      }
      case 'next': {
        return (
          <>
            <span style={{ lineHeight: 1 }}>
              {intl.formatMessage({ id: 'content.footer.actions.next' })}
            </span>
            <Icon icon={ArrowRight} />
          </>
        );
      }
    }
  }, [intl, type]);

  return (
    <Link to={link}>
      <Flexbox className={styles.container} gap={8}>
        <Flexbox
          className={cx(styles.nav, type === 'next' && styles.alignmentEnd)}
          gap={4}
          horizontal
        >
          {navContent}
        </Flexbox>
        <Flexbox className={cx(styles.title, type === 'next' && styles.alignmentEnd)} horizontal>
          {title}
        </Flexbox>
      </Flexbox>
    </Link>
  );
});

export default Linker;
