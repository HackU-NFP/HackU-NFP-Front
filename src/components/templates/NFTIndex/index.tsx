import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import disableScroll from 'disable-scroll';

import { _NFTIndex } from './index.styles';

import NFTGalleryIndex from 'components/UI-combinations/NFTGalleryIndex';
import NFTFlexIndex from 'components/UI-combinations/NFTFlexIndex';
import LayoutButton from 'components/UI/LayoutButton';
import ScrollTopButton from 'components/UI/ScrollTopButton';
import NFTSlideShow from 'components/UI-combinations/NFTSlideShow';
import { IndexNFT } from 'api/nft';
import { ProfileContext } from 'contexts/profile';

const NFTIndex = () => {
  const contractId = process.env.NEXT_PUBLIC_CONTRACTID as string;
  const limit = 10;
  const orderBy = 'desc';
  const _ = _NFTIndex;

  //--- Context ---
  const profile = useContext(ProfileContext);

  //--- State ---
  const [layout, setLayout] = useState<LayoutType>('gallery');
  const [isSlideShow, setIsSlideShow] = useState(false);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isUserMode, setIsUserMode] = useState(false);
  const [isLoadFinish, setIsLoadFinish] = useState(false);

  const isLiff = useMemo(() => {
    return profile.profile && profile.isInClient ? true : false;
  }, [profile]);

  const changeUserMode = useCallback(() => {
    if (isUserMode) {
      setIsUserMode(false);
    } else {
      setIsUserMode(true);
    }
  }, [isUserMode]);

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
      setIsLoadFinish(true);
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
        <_.Main>
          <ScrollTopButton />
          {isLiff ? (
            <_.ButtonContainer>
              <_.UserButton
                onClick={changeUserMode}
                isUserMode={isUserMode}
                src={profile.profile?.pictureUrl}
              />
              <LayoutButton layoutFunctions={layoutFunctions} layout={layout} />
            </_.ButtonContainer>
          ) : (
            <LayoutButton layoutFunctions={layoutFunctions} layout={layout} />
          )}
          <_.Container>
            {layout === 'gallery' && (
              <NFTGalleryIndex tokens={tokens} layout={layout} />
            )}
            {layout === 'flex' && (
              <NFTFlexIndex tokens={tokens} layout={layout} />
            )}
            <_.BottomTextContainer>
              {isLoadFinish ? (
                <_.NoMoerText>No more</_.NoMoerText>
              ) : (
                <_.ReadMoreText onClick={getTokens}>Read more</_.ReadMoreText>
              )}
            </_.BottomTextContainer>
          </_.Container>
        </_.Main>
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
