import React, { useCallback, useEffect, useState } from 'react';
import { IoMdClose, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { BsFillPlayFill, BsStopFill } from 'react-icons/bs';
import useInterval from 'use-interval';

import {
  _NFTSlideShow_Main,
  _NFTSlideShow_Container,
  _NFTSlideShow_CloseButtonWrapper,
  _NFTSlideShow_ImageWrapper,
  _NFTSlideShow_Image,
  _NFTSlideShow_ImageContainer,
  _NFTSlideShow_ArrowIcon,
  _NFTSlideShow_BottomContainer,
  _NFTSlideShow_AutoButtonWrapper,
  _NFTSlideShow_AutoButtonContainer,
  _NFTSlideShow_ArrowIconWrapper,
} from './index.styles';

type NFTSlideShowProps = {
  images: string[];
  loadFunc: () => void;
  releaseScroll: () => void;
};

const NFTSlideShow: React.FC<NFTSlideShowProps> = ({
  releaseScroll,
  loadFunc,
  images,
}) => {
  const iconSize = '5rem';

  const [currentImagesIndex, setCurrentImagesIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  const clickPlayButton = useCallback(() => {
    setIsPlay(!isPlay);
  }, [isPlay]);

  const disableBackButton = useCallback(() => {
    return currentImagesIndex === 0 ? true : false;
  }, [currentImagesIndex]);

  const disableNextButton = useCallback(() => {
    return currentImagesIndex >= images.length - 1;
  }, [currentImagesIndex, images.length]);

  const clickBackButton = useCallback(
    (e?) => {
      // 自動スライドショー中にボタンが押されたら何もしない
      if (e && isPlay) return;
      if (disableBackButton()) return;

      setCurrentImagesIndex((prevIndex) => prevIndex - 1);
    },
    [disableBackButton, isPlay]
  );

  const clickNextButton = useCallback(
    (e?) => {
      // 自動スライドショー中にボタンが押されたら何もしない
      if (e && isPlay) return;
      if (disableNextButton()) return;

      setCurrentImagesIndex((prevIndex) => prevIndex + 1);

      // スライドが終わりそうだったらAPI叩く
      if (currentImagesIndex >= images.length - 5) {
        loadFunc();
      }
    },
    [currentImagesIndex, disableNextButton, images.length, isPlay, loadFunc]
  );

  useInterval(() => {
    console.log('OK');
    if (isPlay) {
      if (currentImagesIndex >= images.length - 1) {
        setIsPlay(false);
        return;
      }
      clickNextButton();
    }
  }, 5000);

  return (
    <>
      <_NFTSlideShow_Main>
        <_NFTSlideShow_Container>
          <_NFTSlideShow_CloseButtonWrapper>
            <IoMdClose
              onClick={releaseScroll}
              size={'3rem'}
              style={{ cursor: 'pointer' }}
            />
          </_NFTSlideShow_CloseButtonWrapper>
          <_NFTSlideShow_ImageWrapper>
            <_NFTSlideShow_ImageContainer>
              <_NFTSlideShow_Image
                alt='NFT'
                src={images[currentImagesIndex]}
                loading='lazy'
              />
            </_NFTSlideShow_ImageContainer>
          </_NFTSlideShow_ImageWrapper>
          <div style={{ height: '50%' }}>
            <_NFTSlideShow_ArrowIconWrapper>
              <_NFTSlideShow_ArrowIcon isActive={isPlay || disableBackButton()}>
                <_NFTSlideShow_ArrowIconWrapper onClick={clickBackButton}>
                  <IoIosArrowBack size={iconSize} color={'#fff'} />
                </_NFTSlideShow_ArrowIconWrapper>
              </_NFTSlideShow_ArrowIcon>
              <_NFTSlideShow_ArrowIcon isActive={isPlay || disableNextButton()}>
                <_NFTSlideShow_ArrowIconWrapper onClick={clickNextButton}>
                  <IoIosArrowForward size={iconSize} color={'#fff'} />
                </_NFTSlideShow_ArrowIconWrapper>
              </_NFTSlideShow_ArrowIcon>
            </_NFTSlideShow_ArrowIconWrapper>

            <_NFTSlideShow_BottomContainer>
              <_NFTSlideShow_AutoButtonWrapper>
                {isPlay ? (
                  <_NFTSlideShow_AutoButtonContainer>
                    <BsStopFill
                      onClick={clickPlayButton}
                      size={'3rem'}
                      style={{ cursor: 'pointer' }}
                    />
                    <div>During automatic slider...</div>
                  </_NFTSlideShow_AutoButtonContainer>
                ) : (
                  <_NFTSlideShow_AutoButtonContainer>
                    <BsFillPlayFill
                      onClick={clickPlayButton}
                      size={'3rem'}
                      style={{ cursor: 'pointer' }}
                    />
                    <div>Automatic slider</div>
                  </_NFTSlideShow_AutoButtonContainer>
                )}
              </_NFTSlideShow_AutoButtonWrapper>
            </_NFTSlideShow_BottomContainer>
          </div>
        </_NFTSlideShow_Container>
      </_NFTSlideShow_Main>
    </>
  );
};

export default React.memo(NFTSlideShow);
