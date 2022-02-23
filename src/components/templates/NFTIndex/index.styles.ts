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
  `,
  UserButton: styled.img<{ isUserMode: boolean }>`
    cursor: pointer;
    width: 50px;
    height: 50px;

    ${(props) => {
      if (props.isUserMode) {
        return css`
          box-sizing: border-box;
          border: 3px solid #000;
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
  `
}
