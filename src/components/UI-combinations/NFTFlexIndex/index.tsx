import React from 'react';

import { LayoutType } from 'components/templates/NFTIndex';
import LayoutFlex from 'components/UI/LayoutFlex';
import NFTImage from 'components/UI/NFTImage';

type NFTFlexIndexProps = {
  items: string[];
  layout: LayoutType;
};

const NFTFlexIndex: React.FC<NFTFlexIndexProps> = ({ items, layout }) => {
  return (
    <LayoutFlex gap='small' justify='space-between'>
      {items.map((image, i) => (
        <NFTImage image={image} layout={layout} key={i} />
      ))}
    </LayoutFlex>
  );
};

export default React.memo(NFTFlexIndex);
