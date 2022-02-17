import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Grid } from 'react-loader-spinner';

import {
  _NFTIndex_Main,
  _NFTIndex_Loading,
  _NFTIndex_Image,
  _NFTIndex_Figure,
  _NFTIndex_ImageTextWrapper,
  _NFTIndex_ImageText,
} from './index.styles';

// @ts-ignore
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

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

const NFTIndex = () => {
  const [items, setItems] = useState<string[]>([]);

  function loadFunc() {
    setTimeout(() => {
      setItems(items.concat(...images));
    }, 1000);
  }

  useEffect(() => {
    setItems(images);
  }, []);

  return (
    <_NFTIndex_Main>
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
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 550: 2, 750: 3, 800: 3, 1200: 6 }}
        >
          <Masonry gutter='10px'>
            {items.map((image, i) => (
              <_NFTIndex_Figure key={i}>
                <_NFTIndex_Image key={i} alt='NFT' src={image} loading='lazy' />
                <_NFTIndex_ImageTextWrapper>
                  <_NFTIndex_ImageText>
                    {i + 'HogeImageHogeImageHogeImageHogeImage'}
                  </_NFTIndex_ImageText>
                </_NFTIndex_ImageTextWrapper>
              </_NFTIndex_Figure>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>
    </_NFTIndex_Main>
  );
};

export default React.memo(NFTIndex);
