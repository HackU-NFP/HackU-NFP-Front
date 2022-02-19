import NFTImage from 'components/UI/NFTImage';
import React from 'react';

// @ts-ignore
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

type NFTGalleryIndexProps = {
  items: string[];
  layout: LayoutType;
};

const NFTGalleryIndex: React.FC<NFTGalleryIndexProps> = ({ items, layout }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 550: 2, 800: 3, 1200: 6 }}>
      <Masonry gutter='10px'>
        {items.map((image, i) => (
          <NFTImage image={image} layout={layout} key={i} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default React.memo(NFTGalleryIndex);
