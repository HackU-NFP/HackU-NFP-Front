import styled, { css } from "styled-components";

export const _NFTSlideShow_Main = styled.div`
  width: 100vw;
  height: 100%;
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
  height: 40px;
  display: flex;
  justify-content: flex-end;
  z-index: 100;
`

export const _NFTSlideShow_ImageWrapper = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const _NFTSlideShow_ArrowIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const _NFTSlideShow_ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const _NFTSlideShow_ArrowIcon = styled.div<{ isActive: boolean; }>`
  background: ${(props) => props.isActive ? 'rgb(229, 229, 229)' : 'rgb(114, 114, 114)'};
  ${(props) => {
    return !props.isActive && css`
      cursor: pointer;
    `
  }}
`

export const _NFTSlideShow_Image = styled.img`
  max-width: 95vw;
  max-height: 98%;
  user-select: none;
  pointer-events: none;
`

export const _NFTSlideShow_BottomContainer = styled.div`
  width: 100vw;
  height: 27%;
  background: #fff;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  padding-top: 0.7rem;
`

export const _NFTSlideShow_AutoButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const _NFTSlideShow_AutoButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const _NFTSlideShow_BottomText = styled.div`
  width: 95%;
  font-size: 1.5rem;
  line-height: initial;
  text-align: center;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: none;
`

export const _NFTSlideShow_MoreTextLink = styled.a`
  text-decoration: none;
`

export const _NFTSlideShow_MoreText = styled.div`
  cursor: pointer;
  color: rgb(86, 86, 86);
  user-select: none;

  &:hover {
    border-bottom: 1px solid #000;
  }
`