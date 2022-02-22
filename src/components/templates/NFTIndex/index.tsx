import React, { useCallback, useEffect, useState } from 'react';
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
import { IndexNFT } from 'api/nft';

const images = [
  'https://picsum.photos/900/900?image=10',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/500/500?image=201',
  'https://picsum.photos/700/900?image=209',
  'https://picsum.photos/800/800?image=1050',
];

const NFTIndex = () => {
  const contractId = process.env.NEXT_PUBLIC_CONTRACTID as string;
  const limit = 50;
  const orderBy = 'desc';

  const [layout, setLayout] = useState<LayoutType>('gallery');
  const [isSlideShow, setIsSlideShow] = useState(false);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getTokens = async () => {
    const queryParameter = {
      contractId,
      limit,
      orderBy,
      page,
    };

    const response = await IndexNFT(queryParameter);
    if (response.data.length === 0) {
      setLoading(false);
      return;
    }

    setTokens(tokens.concat(...response.data));
    setPage((page) => page + 1);
    setLoading(false);
  };

  const layoutFunctions: {
    [K in LayoutType]: React.MouseEventHandler<HTMLDivElement>;
  } = {
    gallery: useCallback(() => {
      setLayout('gallery');
    }, []),
    flex: useCallback(() => {
      setLayout('flex');
    }, []),
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

  useEffect(() => {
    getTokens();
  }, []);

  return (
    <>
      {!loading && tokens.length !== 0 && (
        <_NFTIndex_Main>
          <ScrollTopButton />
          <LayoutButton layoutFunctions={layoutFunctions} layout={layout} />
          <_NFTIndex_Container>
            <InfiniteScroll
              pageStart={0}
              loadMore={getTokens}
              hasMore={true || false}
              loader={
                <>
                  <_NFTIndex_Loading className='loader' key={0}>
                    <Grid color='#00BFFF' height={50} width={50} />
                  </_NFTIndex_Loading>
                </>
              }
            >
              {layout === 'gallery' && (
                <NFTGalleryIndex tokens={tokens} layout={layout} />
              )}
              {layout === 'flex' && (
                <NFTFlexIndex tokens={tokens} layout={layout} />
              )}
            </InfiniteScroll>
          </_NFTIndex_Container>
        </_NFTIndex_Main>
      )}
      {isSlideShow && (
        <NFTSlideShow
          tokens={tokens}
          loadFunc={getTokens}
          releaseScroll={releaseScroll}
        />
      )}
    </>
  );
};

export default React.memo(NFTIndex);
