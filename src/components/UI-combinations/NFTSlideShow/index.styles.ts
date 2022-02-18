import styled from "styled-components";
import { breakpoints } from "styles";

export const _NFTSlideShow_Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255,255,255, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
`

export const _NFTSlideShow_Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 99;
`

export const _NFTSlideShow_CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 100;
`

export const _NFTSlideShow_ImageWrapper = styled.div`
  width: 100vw;
  height: 75%;
  display: block;

  @media ${breakpoints.md} {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

export const _NFTSlideShow_ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const _NFTSlideShow_ArrowIcon = styled.div`
  display: none;

  @media ${breakpoints.md} {
    display: flex;
  }
`

export const _NFTSlideShow_ArrowIconWrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgb(191, 191, 191);
  cursor: pointer;
  height: 100px;

  @media ${breakpoints.md} {
    height: 100%;
  }
`

export const _NFTSlideShow_Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  user-select: none;
  pointer-events: none;

  @media ${breakpoints.md} {
    max-height: 80%;
  }
`