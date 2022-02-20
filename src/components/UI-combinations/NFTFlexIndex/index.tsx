import React from 'react';

import LayoutFlex from 'components/UI/LayoutFlex';
import NFTImage from 'components/UI/NFTImage';

type NFTFlexIndexProps = {
  tokens: Token[];
  layout: LayoutType;
};

const NFTFlexIndex: React.FC<NFTFlexIndexProps> = ({ tokens, layout }) => {
  return (
    <LayoutFlex gap='small' justify='space-between'>
      {tokens.map((token, i) => (
        <NFTImage token={token} layout={layout} key={i} />
      ))}
    </LayoutFlex>
  );
};

export default React.memo(NFTFlexIndex);
