import styled, { css } from "styled-components";

import { LayoutType } from "components/templates/NFTIndex";
import { breakpoints } from 'styles'

export const _NFTIndex_ImageTextWrapper = styled.div`
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
  padding: 0.3125rem;
  font-size: 1rem;
  color: #fff;

  &:hover {
    opacity: 4;
  }
`

export const _NFTIndex_ImageText = styled.span`
  max-width: 90%;
  line-height: initial;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const _NFTIndex_Figure = styled.figure<{ layout: LayoutType }>`
  ${(props) => {
    const figure = css`
      cursor: pointer;
      overflow: hidden;
      position: relative;
    `

    return props.layout === 'gallery'
      ? css`
        ${figure};
        width: 100%;
      `
      : css`
        ${figure};
        aspect-ratio: 4 / 3.5;
        width: 100%;

        @media ${breakpoints.sm} {
          width: calc((100% - 20px * 1) / 2);
        }
        @media ${breakpoints.md} {
          width: calc((100% - 20px * 1) / 2);
        }
        @media ${breakpoints.lg} {
          width: calc((100% - 20px * 2) / 3);
        }
        @media ${breakpoints.xl} {
          width: calc((100% - 20px * 3) / 4);
        }
      `
  }}
`

export const _NFTIndex_Image = styled.img<{ layout: LayoutType }>`
  object-fit:cover;

  ${(props) => {
    return props.layout === 'gallery'
      ? css`
        width: 100%;
        display: block;
      `
      : css`
        width: 100%;
        height: 100%;
      `
  }}
`;
