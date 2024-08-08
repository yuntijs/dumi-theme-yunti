import { Hero as H } from '@lobehub/ui';
import { memo } from 'react';

import { heroActionsSel, heroDescSel, heroTitleSel, isHeroPageSel, useSiteStore } from '@/store';

const Hero = memo(() => {
  const isHeroSet = useSiteStore(isHeroPageSel);
  const title = useSiteStore(heroTitleSel);
  const description = useSiteStore(heroDescSel);
  const actions = useSiteStore(heroActionsSel);

  if (!isHeroSet) {
    return;
  }

  return <H actions={actions} description={description} title={title!} />;
});

export default Hero;
