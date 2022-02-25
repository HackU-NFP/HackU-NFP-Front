import styled, { css } from "styled-components";

import { breakpoints } from 'styles'

export const _NFTImage_ImageTextWrapper = styled.div`
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
  font-size: 1rem;
  color: #fff;

  &:hover {
    opacity: 4;
  }
`

export const _NFTImage_ImageText = styled.span`
  max-width: 90%;
  line-height: initial;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const _NFTImage_Figure = styled.figure<{ layout: LayoutType }>`
  ${(props) => {
    const figure = css`
      cursor: pointer;
      overflow: hidden;
      position: relative;
    `

    switch (props.layout) {
      case 'gallery':
        return css`
          ${figure};
          max-height: 400px;
          width: 100%;
        `
      case 'flex':
        return css`
          ${figure};
          max-height: 500px;
          aspect-ratio: 4 / 3.5;
          width: 100%;
  
          @media ${breakpoints.sm} {
            width: calc((100% - 13px * 1) / 2);
          }
          @media ${breakpoints.md} {
            width: calc((100% - 13px * 1) / 2);
          }
          @media ${breakpoints.lg} {
            width: calc((100% - 13px * 2) / 3);
          }
          @media ${breakpoints.xl} {
            width: calc((100% - 13px * 3) / 4);
          }
        `
    }
  }}
`

export const _NFTImage_Image = styled.img<{ layout: LayoutType }>`
  object-fit:cover;

  ${(props) => {
    switch (props.layout) {
      case 'gallery':
        return css`
          width: 100%;
          display: block;
        `
      case 'flex':
        return css`
          width: 100%;
          height: 100%;
        `
    }
  }}
`;
