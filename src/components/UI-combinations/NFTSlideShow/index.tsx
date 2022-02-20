import React, { useCallback, useState } from 'react';
import Link from 'next/link';

import { IoMdClose, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { BsFillPlayFill, BsStopFill } from 'react-icons/bs';
import useInterval from 'use-interval';
import { Line } from 'rc-progress';

import { _NFTSlideShow } from './index.styles';

type NFTSlideShowProps = {
  tokens: Token[];
  loadFunc: () => void;
  releaseScroll: () => void;
};

const NFTSlideShow: React.FC<NFTSlideShowProps> = ({
  releaseScroll,
  loadFunc,
  tokens,
}) => {
  const _ = _NFTSlideShow;
  const iconSize = '3.5rem';
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
    return currentImagesIndex >= tokens.length - 1;
  }, [currentImagesIndex, tokens.length]);

  const clickBackButton = useCallback(
    (e?) => {
      // 自動スライドショー中にボタンが押されたら何もしない
      if (e && isPlay) return;
      if (disableBackButton()) return;

      setPercent(0);
      setCurrentImagesIndex((prevIndex) => prevIndex - 1);
    },
    [disableBackButton, isPlay]
  );

  const clickNextButton = useCallback(
    (e?) => {
      // 自動スライドショー中にボタンが押されたら何もしない
      if (e && isPlay) return;
      if (disableNextButton()) return;

      setPercent(0);
      setCurrentImagesIndex((prevIndex) => prevIndex + 1);
      // スライドが終わりそうだったらAPI叩く
      // if (currentImagesIndex === tokens.length - 1) {
      //   loadFunc();
      // }
    },
    [currentImagesIndex, disableNextButton, tokens.length, isPlay, loadFunc]
  );

  /**
   * percentが100になったら自動スライドさせる。
   * 定期実行
   */
  useInterval(() => {
    if (!isPlay) return;
    if (percent >= 100) {
      setPercent(0);
      if (currentImagesIndex >= tokens.length - 1) {
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
    <_.Main>
      <_.Container>
        <_.CloseButtonWrapper>
          <IoMdClose
            onClick={releaseScroll}
            size={'3rem'}
            style={{ cursor: 'pointer' }}
          />
        </_.CloseButtonWrapper>

        <_.ImageWrapper>
          <_.ImageContainer>
            <_.Image
              alt='NFT'
              src={`${process.env.NEXT_PUBLIC_GCP_STORAGE}${tokens[currentImagesIndex].tokenType}`}
              loading='lazy'
            />
          </_.ImageContainer>
        </_.ImageWrapper>
        <_.NFTNameWrapper>
          <_.NFTNameContainer>
            <_.NFTName>{tokens[currentImagesIndex].name}</_.NFTName>
            <Link href={`/${tokens[currentImagesIndex].tokenType}`} passHref>
              <_.MoreTextLink onClick={stopAutoSlider} target='_blank'>
                <_.MoveDetailText>view the details</_.MoveDetailText>
              </_.MoreTextLink>
            </Link>
          </_.NFTNameContainer>
        </_.NFTNameWrapper>

        <_.AutoButtonWrapper>
          <_.AutoButtonContainer>
            <_.Progress>
              <Line strokeWidth={2} percent={percent} />
            </_.Progress>
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
          </_.AutoButtonContainer>
        </_.AutoButtonWrapper>
        <_.ArrowIconsWrapper>
          <_.ArrowIconContainer>
            <_.ArrowIcon isActive={isPlay || disableBackButton()}>
              <_.ArrowIconWrapper onClick={clickBackButton}>
                <IoIosArrowBack size={iconSize} color={'#fff'} />
              </_.ArrowIconWrapper>
            </_.ArrowIcon>
            <_.ArrowIcon isActive={isPlay || disableNextButton()}>
              <_.ArrowIconWrapper onClick={clickNextButton}>
                <IoIosArrowForward size={iconSize} color={'#fff'} />
              </_.ArrowIconWrapper>
            </_.ArrowIcon>
          </_.ArrowIconContainer>
        </_.ArrowIconsWrapper>
      </_.Container>
    </_.Main>
  );
};

export default React.memo(NFTSlideShow);
