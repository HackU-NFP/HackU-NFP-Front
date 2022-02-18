import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Grid } from 'react-loader-spinner';

import {
  _NFTIndex_Main,
  _NFTIndex_Container,
  _NFTIndex_Loading,
} from './index.styles';

import NFTGalleryIndex from 'components/UI-combinations/NFTGalleryIndex';
import NFTFlexIndex from 'components/UI-combinations/NFTFlexIndex';
import LayoutButton from 'components/UI/LayoutButton';
import ScrollTopButton from 'components/UI/ScrollTopButton';

const images = [
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/400/300?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/400/300?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/400/300?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/400/300?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
];

export type LayoutType = 'gallery' | 'flex';

const NFTIndex = () => {
  const [layout, setLayout] = useState<LayoutType>('gallery');
  const [items, setItems] = useState<string[]>([]);

  const layoutFunctions: {
    [K in LayoutType]: React.MouseEventHandler<HTMLDivElement>;
  } = {
    gallery: () => setLayout('gallery'),
    flex: () => setLayout('flex'),
  };

  function loadFunc() {
    setTimeout(() => {
      setItems(items.concat(...images));
    }, 1000);
  }

  useEffect(() => {
    setItems(images);
  }, []);

  return (
    <>
      <_NFTIndex_Main>
        <ScrollTopButton />
        <LayoutButton layoutFunctions={layoutFunctions} layout={layout} />
        <_NFTIndex_Container>
          <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
            loader={
              <_NFTIndex_Loading className='loader' key={0}>
                <Grid color='#00BFFF' height={50} width={50} />
              </_NFTIndex_Loading>
            }
          >
            {layout === 'gallery' && (
              <NFTGalleryIndex items={items} layout={layout} />
            )}
            {layout === 'flex' && (
              <NFTFlexIndex items={items} layout={layout} />
            )}
          </InfiniteScroll>
        </_NFTIndex_Container>
      </_NFTIndex_Main>
    </>
  );
};

export default React.memo(NFTIndex);
