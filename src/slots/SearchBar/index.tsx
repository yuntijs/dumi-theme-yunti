import { SearchBar as Input } from '@lobehub/ui';
import { useResponsive } from 'antd-style';
import { useIntl, useSiteSearch } from 'dumi';
import SearchResult from 'dumi/theme-default/slots/SearchResult';
import { memo, useState } from 'react';

import { useStyles } from './style';

const SearchBar = memo(() => {
  const { mobile } = useResponsive();
  const { styles } = useStyles();
  const [focusing, setFocusing] = useState(false);
  const { keywords, setKeywords, result, loading } = useSiteSearch();
  const intl = useIntl();

  return (
    <div className={styles.container}>
      <Input
        enableShortKey
        onBlur={() => {
          setTimeout(() => {
            setFocusing(false);
          }, 1);
        }}
        onChange={(e: any) => setKeywords(e.target.value)}
        onFocus={() => setFocusing(true)}
        placeholder={intl.formatMessage({ id: 'header.search.placeholder' })}
        spotlight
      />

      {keywords.trim() && focusing && (result.length > 0 || !loading) && (
        <div className={styles.popover}>
          <SearchResult data={result} loading={loading} />
        </div>
      )}
    </div>
  );
});

export default SearchBar;
