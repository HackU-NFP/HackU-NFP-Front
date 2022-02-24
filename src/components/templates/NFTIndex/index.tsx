import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import disableScroll from 'disable-scroll';

import { _NFTIndex } from './index.styles';

import NFTGalleryIndex from 'components/UI-combinations/NFTGalleryIndex';
import NFTFlexIndex from 'components/UI-combinations/NFTFlexIndex';
import LayoutButton from 'components/UI/LayoutButton';
import ScrollTopButton from 'components/UI/ScrollTopButton';
import NFTSlideShow from 'components/UI-combinations/NFTSlideShow';
import { IndexNFT, IndexUserNFT } from 'api/nft';
import { ProfileContext } from 'contexts/profile';
import { BsFilter, BsCheck2 } from 'react-icons/bs';

type FillterName = 'ALL' | 'MY';

const NFTIndex = () => {
  const contractId = process.env.NEXT_PUBLIC_CONTRACTID as string;
  const limit = 50;
  const orderBy = 'desc';
  const _ = _NFTIndex;

  //const refEle = useRef(null);
  const refEle = useRef<HTMLDivElement>(null);
  const documentRef = useRef<any>(null);

  //--- Context ---
  const profile = useContext(ProfileContext);

  //--- State ---
  const [layout, setLayout] = useState<LayoutType>('gallery');
  const [isSlideShow, setIsSlideShow] = useState(false);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [page, setPage] = useState(1);
  const [isLoadFinish, setIsLoadFinish] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentFilter, setCurrentFilter] = useState<FillterName>('ALL');

  useEffect(() => {
    documentRef.current = (e: any) => {
      if (!refEle.current?.contains(e.target)) {
        setIsFilter(false);
        document.removeEventListener('click', documentRef.current);
      }
    };
  });

  useEffect(() => {
    isFilter && document.addEventListener('click', documentRef.current);
  }, [isFilter]);

  const isLiff = useMemo(() => {
    return profile.profile && profile.isInClient ? true : false;
  }, [profile]);

  const callIndexUserNFT = async (queryParameter: queryParameter) => {
    const userId = profile.profile?.userId as string;
    const response = await IndexUserNFT(userId, queryParameter);

    if (response.data.length === 0) {
      setIsLoadFinish(true);
      return;
    }
    return response;
  };

  const callIndexNFT = async (queryParameter: queryParameter) => {
    const response = await IndexNFT(queryParameter);

    if (response.data.length === 0) {
      setIsLoadFinish(true);
      return;
    }
    return response;
  };

  const getUsersTokens = async (queryParameter: queryParameter) => {
    const response = await callIndexUserNFT(queryParameter);
    if (!response) return;

    setTokens(tokens.concat(...response.data));
    setPage((page) => page + 1);
  };

  const getTokens = async (queryParameter: queryParameter) => {
    const response = await callIndexNFT(queryParameter);
    if (!response) return;

    setTokens(tokens.concat(...response.data));
    setPage((page) => page + 1);
    setLoading(false);
  };

  const readMore = async () => {
    const param = {
      contractId,
      limit,
      orderBy,
      page,
    };
    if (currentFilter === 'ALL') {
      await getTokens(param);
      return;
    }
    if (currentFilter === 'MY') {
      await getUsersTokens(param);
      return;
    }
  };

  const changeFillter = async (fillterName: FillterName) => {
    //if (!isLiff) return;
    if (fillterName === currentFilter) {
      setIsFilter(false);
      return;
    }

    setTokens(tokens.filter((t) => t.tokenType === '!'));
    setIsLoadFinish(false);
    setPage(1);
    console.log(page);

    const queryParameter = {
      contractId,
      limit,
      orderBy,
      page: 1,
    };

    if (fillterName === 'ALL') {
      setCurrentFilter('ALL');

      const response = await callIndexNFT(queryParameter);
      if (!response) return;

      setTokens(response.data);
    } else {
      setCurrentFilter('MY');

      const response = await callIndexUserNFT(queryParameter);
      if (!response) return;

      setTokens(response.data);
    }
    setPage((page) => page + 1);
    setIsFilter(false);
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
    slideShow: (e) => {
      if (tokens.length) {
        _disableScroll();
      }
    },
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
    getTokens({
      contractId,
      limit,
      orderBy,
      page,
    });
  }, []);

  return (
    <>
      {!loading && (
        <_.Main>
          <ScrollTopButton />
          {isLiff ? (
            <_.ButtonContainer>
              <_.FilterButton
                ref={refEle}
                onClick={() => setIsFilter(!isFilter)}
              >
                <BsFilter size={'2.3rem'} />
              </_.FilterButton>
              {isFilter && (
                <_.FilterContainer>
                  <_.FilterTextWrapper onClick={() => changeFillter('ALL')}>
                    <_.FilterText>All NFT</_.FilterText>
                    {currentFilter === 'ALL' && <BsCheck2 size={'2rem'} />}
                  </_.FilterTextWrapper>
                  <_.FilterTextWrapper
                    onClick={() => changeFillter('MY')}
                    border={true}
                  >
                    <_.FilterText>My NFT</_.FilterText>
                    {currentFilter === 'MY' && <BsCheck2 size={'2rem'} />}
                  </_.FilterTextWrapper>
                </_.FilterContainer>
              )}
              <LayoutButton layoutFunctions={layoutFunctions} layout={layout} />
            </_.ButtonContainer>
          ) : (
            <LayoutButton layoutFunctions={layoutFunctions} layout={layout} />
          )}
          {tokens.length !== 0 ? (
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
                  <_.ReadMoreText onClick={readMore}>Read more</_.ReadMoreText>
                )}
              </_.BottomTextContainer>
            </_.Container>
          ) : (
            <_.NotNFTText>NFT does not exist.</_.NotNFTText>
          )}
        </_.Main>
      )}
      {isSlideShow && (
        <NFTSlideShow tokens={tokens} releaseScroll={releaseScroll} />
      )}
    </>
  );
};

export default React.memo(NFTIndex);
