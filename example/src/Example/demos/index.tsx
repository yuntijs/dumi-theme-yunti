import { ActionIcon, ActionIconProps, StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { folder } from 'leva';
import { Settings } from 'lucide-react';
import React from 'react';

export default () => {
  const store = useCreateStore();
  const size: ActionIconProps['size'] | any = useControls(
    {
      size: folder({
        blockSize: {
          max: 100,
          min: 8,
          step: 4,
          value: 40,
        },
        borderRadius: {
          max: 50,
          min: 2,
          step: 2,
          value: 10,
        },
        fontSize: {
          max: 100,
          min: 8,
          step: 4,
          value: 28,
        },
        strokeWidth: {
          max: 2,
          min: 1,
          step: 0.5,
          value: 2,
        },
      }),
    },
    { store }
  );

  const control: ActionIconProps | any = useControls(
    {
      active: false,
      glass: false,
      tooltip: folder({
        arrow: false,
        loading: false,
        placement: {
          options: [
            'top',
            'left',
            'right',
            'bottom',
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight',
            'leftTop',
            'leftBottom',
            'rightTop',
            'rightBottom',
          ],
          value: 'top',
        },
        spotlight: false,
        title: 'Setting',
      }),
    },
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <ActionIcon icon={Settings} size={size} {...control} />
    </StoryBook>
  );
};
