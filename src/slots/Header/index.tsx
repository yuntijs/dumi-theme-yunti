import { Header as Head } from '@lobehub/ui';
import { Flex } from 'antd';
import { useResponsive } from 'antd-style';
import { memo } from 'react';

import Logo from '@/slots/Logo';
import Navbar from '@/slots/Navbar';
import SearchBar from '@/slots/SearchBar';
import { useSiteStore } from '@/store/useSiteStore';

import Burger from './Burger';
import DiscordButton from './DiscordButton';
import GithubButton from './GithubButton';
import LangSwitch from './LangSwitch';
import ThemeSwitch from './ThemeSwitch';
import { HeaderUserActionButton } from './UserActionButton';

const Header = memo(() => {
  const hasHeader = useSiteStore(s => Boolean(s.routeMeta.frontmatter));

  const { mobile } = useResponsive();
  if (!hasHeader) return;

  return (
    <Head
      actions={
        mobile ? (
          <Flex align="center" gap="small">
            <ThemeSwitch />
            <HeaderUserActionButton />
          </Flex>
        ) : (
          <>
            <SearchBar />
            <LangSwitch />
            <GithubButton />
            <DiscordButton />
            <ThemeSwitch />
            <HeaderUserActionButton />
          </>
        )
      }
      logo={<Logo />}
      nav={mobile ? <Burger /> : <Navbar />}
    />
  );
});

export default Header;
