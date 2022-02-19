import React, { useCallback, useState } from 'react';
import { IoMdClose, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { BsFillPlayFill, BsStopFill } from 'react-icons/bs';
import useInterval from 'use-interval';
import { Line } from 'rc-progress';

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
  _NFTSlideShow_BottomText,
  _NFTSlideShow_MoreText,
  _NFTSlideShow_MoreTextLink,
} from './index.styles';
import Link from 'next/link';

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
  const slideTime = 50;

  const [currentImagesIndex, setCurrentImagesIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [percent, setPercent] = useState(0);

  const clickPlayButton = useCallback(() => {
    setIsPlay(!isPlay);
  }, [isPlay]);

  const stopAutoSlider = useCallback(() => {
    if (isPlay) {
      setIsPlay(false);
    }
  }, [isPlay]);

  const disableBackButton = useCallback(() => {
    return currentImagesIndex === 0 ? true : false;
  }, [currentImagesIndex]);

  const disableNextButton = useCallback(() => {
    return currentImagesIndex >= images.length - 1;
  }, [currentImagesIndex, images.length]);

  const clickBackButton = useCallback(
    (e?) => {
      setPercent(0);
      // 自動スライドショー中にボタンが押されたら何もしない
      if (e && isPlay) return;
      if (disableBackButton()) return;

      setCurrentImagesIndex((prevIndex) => prevIndex - 1);
    },
    [disableBackButton, isPlay]
  );

  const clickNextButton = useCallback(
    (e?) => {
      setPercent(0);
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

  /**
   * percentが100になったら自動スライドさせる。
   * 定期実行
   */
  useInterval(() => {
    if (!isPlay) return;
    if (percent >= 100) {
      setPercent(0);
      if (currentImagesIndex >= images.length - 1) {
        setIsPlay(false);
        return;
      }
      clickNextButton();
    }
  }, slideTime);

  /**
   * 5秒毎に実行させるようにしてる。
   */
  useInterval(() => {
    if (isPlay) {
      const newPercent = percent + 1;
      setPercent(newPercent);
    }
  }, slideTime);

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
              <_NFTSlideShow_AutoButtonContainer>
                <div style={{ width: 300 }}>
                  <Line strokeWidth={2} percent={percent} />
                </div>
                {isPlay ? (
                  <BsStopFill
                    onClick={clickPlayButton}
                    size={'3rem'}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <BsFillPlayFill
                    onClick={clickPlayButton}
                    size={'3rem'}
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </_NFTSlideShow_AutoButtonContainer>
              <_NFTSlideShow_ArrowIcon isActive={isPlay || disableNextButton()}>
                <_NFTSlideShow_ArrowIconWrapper onClick={clickNextButton}>
                  <IoIosArrowForward size={iconSize} color={'#fff'} />
                </_NFTSlideShow_ArrowIconWrapper>
              </_NFTSlideShow_ArrowIcon>
            </_NFTSlideShow_ArrowIconWrapper>

            <_NFTSlideShow_BottomContainer>
              <_NFTSlideShow_BottomText>
                HogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHoge
              </_NFTSlideShow_BottomText>
              <Link href={`/12878`} passHref>
                <_NFTSlideShow_MoreTextLink
                  onClick={stopAutoSlider}
                  target='_blank'
                >
                  <_NFTSlideShow_MoreText>詳細を見る</_NFTSlideShow_MoreText>
                </_NFTSlideShow_MoreTextLink>
              </Link>
            </_NFTSlideShow_BottomContainer>
          </div>
        </_NFTSlideShow_Container>
      </_NFTSlideShow_Main>
    </>
  );
};

export default React.memo(NFTSlideShow);
