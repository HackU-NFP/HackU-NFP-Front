import React, { useCallback, useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

import {
  _ScrollTopButton_Button,
  _ScrollTopButton_ButtonIcon,
  _ScrollTopButton_ButtonWrapper,
} from './index.styles';

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const clickScrollButton = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  const checkScrollY = useCallback(() => {
    window.scrollY > 400 ? setShowButton(true) : setShowButton(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollY);

    return () => {
      window.removeEventListener('scroll', checkScrollY);
    };
  }, [checkScrollY]);

  return (
    <>
      {showButton && (
        <_ScrollTopButton_ButtonWrapper>
          <_ScrollTopButton_Button onClick={clickScrollButton}>
            <_ScrollTopButton_ButtonIcon>
              <IoIosArrowUp size={'1.6rem'} color={'white'} />
            </_ScrollTopButton_ButtonIcon>
          </_ScrollTopButton_Button>
        </_ScrollTopButton_ButtonWrapper>
      )}
    </>
  );
};

export default React.memo(ScrollTopButton);
