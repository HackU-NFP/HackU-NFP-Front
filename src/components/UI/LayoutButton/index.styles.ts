import styled, { css } from "styled-components";

type _LayoutButton_Button_Props = {
  isActive?: boolean;
  isLeft?: boolean;
}

export const _LayoutButton_Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  /* position: sticky;
  top: 10px;
  z-index: 2; */
`

export const _LayoutButton_Button = styled.div<_LayoutButton_Button_Props>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #9e9e9e;

  ${(props) => {
    return props.isActive
      ? css`
        background: #000;
      `
      : css`
        cursor: pointer;
        background: #fff;
      `
  }}
  ${(props) => {
    return props.isLeft && css`margin-left: -1px;`
  }}
`