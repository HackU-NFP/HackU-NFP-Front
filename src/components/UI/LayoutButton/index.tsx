import { LayoutType } from 'components/templates/NFTIndex';
import React from 'react';
import { RiLayoutMasonryFill, RiLayoutGridFill } from 'react-icons/ri';

import { _LayoutButton_Button, _LayoutButton_Buttons } from './index.styles';

type LayoutButtonProps = {
  layout: LayoutType;
  layoutFunctions: {
    [K in LayoutType]: React.MouseEventHandler<HTMLDivElement>;
  };
};

const LayoutButton: React.FC<LayoutButtonProps> = ({
  layout,
  layoutFunctions,
}) => {
  const iconSize = '2.3rem';

  const isActiveLayout = (layoutName: LayoutType) => {
    return layout === layoutName ? true : false;
  };
  const iconColor = (layoutName: LayoutType) => {
    return isActiveLayout(layoutName) ? '#fff' : '#000';
  };

  return (
    <_LayoutButton_Buttons>
      <_LayoutButton_Button
        onClick={layoutFunctions.gallery}
        isActive={isActiveLayout('gallery')}
      >
        <RiLayoutMasonryFill size={iconSize} color={iconColor('gallery')} />
      </_LayoutButton_Button>
      <_LayoutButton_Button
        onClick={layoutFunctions.flex}
        isActive={isActiveLayout('flex')}
        isLeft={true}
      >
        <RiLayoutGridFill size={iconSize} color={iconColor('flex')} />
      </_LayoutButton_Button>
    </_LayoutButton_Buttons>
  );
};

export default React.memo(LayoutButton);
