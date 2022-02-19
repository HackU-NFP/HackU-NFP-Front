import React, { useEffect, useState } from 'react';
import disableScroll from 'disable-scroll';
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
import NFTSlideShow from 'components/UI-combinations/NFTSlideShow';

const images = [
  'https://picsum.photos/900/900?image=10',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/500/500?image=201',
  'https://picsum.photos/700/900?image=209',
  'https://picsum.photos/800/800?image=1050',
];

const NFTIndex = () => {
  const [layout, setLayout] = useState<LayoutType>('gallery');
  const [isSlideShow, setIsSlideShow] = useState(false);
  const [items, setItems] = useState<string[]>([]);

  const layoutFunctions: {
    [K in LayoutType]: React.MouseEventHandler<HTMLDivElement>;
  } = {
    gallery: () => setLayout('gallery'),
    flex: () => setLayout('flex'),
    slideShow: (e) => _disableScroll(),
  };

  const _disableScroll = () => {
    setIsSlideShow(true);
    disableScroll.on();
  };
  const releaseScroll = () => {
    setIsSlideShow(false);
    disableScroll.off();
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
      {isSlideShow && (
        <NFTSlideShow
          images={items}
          loadFunc={loadFunc}
          releaseScroll={releaseScroll}
        />
      )}
    </>
  );
};

export default React.memo(NFTIndex);
