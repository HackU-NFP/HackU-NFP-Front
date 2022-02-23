import styled, { css } from "styled-components";
import { breakpoints } from "styles";

export const _NFTSlideShow = {
  Main: styled.div`
    width: 100vw;
    height: 100%;
    background-color: rgba(255,255,255, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
  `,
  Container: styled.div`
    z-index: 99;
  `,
  ImageWrapper: styled.div`
    width: 100%;
    height: 75%;
    position: absolute;
    top: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
  `,
  ImageContainer: styled.div`
    max-width: 95%;
    margin: 0 auto;
    position: relative;
  `,
  Image: styled.img`
    max-width: 100%;
    max-height: 500px;
    user-select: none;
    pointer-events: none;

    @media ${breakpoints.sm} {
      max-height: 600px;
    }
  `,
  ImageTextWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    left:0;
    opacity: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    transition: 0.3s;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;

    &:hover {
      opacity: 4;
    }
  `,
  ImageText: styled.span`
    max-width: 90%;
    line-height: initial;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  NFTNameWrapper: styled.div`
    position: absolute;
    bottom: 140px;
  `,
  NFTNameContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
  `,
  NFTName: styled.div`
    max-width: 300px;
    margin: 0 auto;
    font-size: 1.5rem;
    text-align: center;
    overflow-x: hidden;
    text-overflow: ellipsis;
    line-height: 1.3;
  `,
  MoveDetailText: styled.div`
    cursor: pointer;
    color: rgb(86, 86, 86);
    user-select: none;
    text-decoration: none;
    padding-top: 0.5rem;
  `,
  CloseButtonWrapper: styled.div`
    height: 40px;
    display: flex;
    justify-content: flex-end;
    z-index: 100;
  `,
  ArrowIconWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
  ArrowIcon: styled.div<{ isActive: boolean; }>`
    width: 50%;
    border-right: 1px solid #fff;
    background: ${(props) => props.isActive ? 'rgb(229, 229, 229)' : 'rgba(40, 40, 40, 0.9)'};
    ${(props) => {
      return !props.isActive && css`
        cursor: pointer;
      `
    }}
  `,
  BottomContainer: styled.div`
    width: 100vw;
    height: 27%;
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 1rem;
  `,
  AutoButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
  AutoButtonContainer: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    bottom: 60px;
  `,
  BottomText: styled.div`
    width: 95%;
    font-size: 1.5rem;
    line-height: initial;
    text-align: center;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    user-select: none;
    color: #000;
  `,
  MoreTextLink: styled.a`
    text-decoration: none;
  `,
  Progress: styled.div`
    width: 300px;
    margin: 0 auto;
  `,
  ArrowIconsWrapper: styled.div`
    position: absolute;
    bottom: 0;
  `,
  ArrowIconContainer: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
  `
}
