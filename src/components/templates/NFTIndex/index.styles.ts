import styled, { css } from "styled-components";

export const _NFTIndex = {
  Main: styled.div`
    max-width: 95%;
    margin: 0 auto;
    padding: 1.875rem;
  `,
  Container: styled.div`
    margin-top: 1rem;
  `,
  Loading: styled.div`
    display: flex;
    justify-content: center;
    padding: 1.25rem;
  `,
  ButtonContainer: styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
  `,
  FilterContainer: styled.div`
    cursor: pointer;
    min-width: 200px;
    box-shadow: 0 0 9px gray;
    position: absolute;
    top: 52px;
    left: 0;
    background: #fff;
    z-index: 3;
  `,
  FilterTextWrapper: styled.div<{ border?: boolean }>`
    padding: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${(props) => {
      return props.border && css`
        border-top: 1px solid #000;
      `
    }}
  `,
  FilterText: styled.div`
    padding: 0.8rem;
  `,
  FilterButton: styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #9e9e9e;
  `,
  UserButton: styled.img<{ isUserMode: boolean }>`
    cursor: pointer;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;

    ${(props) => {
      if (props.isUserMode) {
        return css`
          box-sizing: border-box;
          padding: 1%;
        `
      }
    }}
  `,
  BottomTextContainer: styled.div`
    max-width: 100%;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
  `,
  NoMoerText: styled.div`
    color: #000;
    font-size: 1rem;
    padding: 0.6rem;
  `,
  ReadMoreText: styled.div`
    padding: 0.6rem;
    max-width: 180px;
    color: #000;
    cursor: pointer;
    font-size: 1rem;
    border: 1px solid #000;

    &:hover {
      background: #000;
      color: #fff;
    }
  `,
  NotNFTText: styled.div`
    display: flex;
    justify-content: center;
    padding-top: 5rem;
  `
}
