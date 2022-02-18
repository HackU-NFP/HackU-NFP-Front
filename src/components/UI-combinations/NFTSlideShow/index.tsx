import React, { useCallback, useState } from 'react';
import { IoMdClose, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import {
  _NFTSlideShow_Main,
  _NFTSlideShow_Container,
  _NFTSlideShow_CloseButtonWrapper,
  _NFTSlideShow_ImageWrapper,
  _NFTSlideShow_Image,
  _NFTSlideShow_ImageContainer,
  _NFTSlideShow_ArrowIconWrapper,
  _NFTSlideShow_ArrowIcon,
} from './index.styles';

type NFTSlideShowProps = {
  images: string[];
  releaseScroll: () => void;
};

const NFTSlideShow: React.FC<NFTSlideShowProps> = ({
  releaseScroll,
  images,
}) => {
  const iconSize = '5rem';

  const [currentImagesIndex, setCurrentImagesIndex] = useState(0);

  const disableBackButton = useCallback(() => {
    return currentImagesIndex === 0 ? true : false;
  }, [currentImagesIndex]);
  const disableNextButton = () => {
    // Todo 最後の要素だったら表示させない
  };

  const clickBackButton = useCallback(() => {
    const backIndex = currentImagesIndex - 1;
    setCurrentImagesIndex(backIndex);
  }, [currentImagesIndex]);

  const clickNextButton = useCallback(() => {
    const nextIndex = currentImagesIndex + 1;
    setCurrentImagesIndex(nextIndex);
  }, [currentImagesIndex]);

  return (
    <>
      <_NFTSlideShow_Main>
        <_NFTSlideShow_Container>
          <_NFTSlideShow_CloseButtonWrapper>
            <IoMdClose onClick={releaseScroll} size={'4rem'} />
          </_NFTSlideShow_CloseButtonWrapper>
          <_NFTSlideShow_ImageWrapper>
            <_NFTSlideShow_ArrowIcon>
              {!disableBackButton() && (
                <_NFTSlideShow_ArrowIconWrapper onClick={clickBackButton}>
                  <IoIosArrowBack size={iconSize} color={'#fff'} />
                </_NFTSlideShow_ArrowIconWrapper>
              )}
            </_NFTSlideShow_ArrowIcon>
            <_NFTSlideShow_ImageContainer>
              <_NFTSlideShow_Image
                alt='NFT'
                src={images[currentImagesIndex]}
                loading='lazy'
              />
            </_NFTSlideShow_ImageContainer>
            <_NFTSlideShow_ArrowIcon>
              <_NFTSlideShow_ArrowIconWrapper onClick={clickNextButton}>
                <IoIosArrowForward size={iconSize} color={'#fff'} />
              </_NFTSlideShow_ArrowIconWrapper>
            </_NFTSlideShow_ArrowIcon>
          </_NFTSlideShow_ImageWrapper>
        </_NFTSlideShow_Container>
      </_NFTSlideShow_Main>
    </>
  );
};

export default React.memo(NFTSlideShow);
