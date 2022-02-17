import styled from "styled-components";

export const _NFTIndex_Main = styled.div`
  max-width: 95%;
  margin: 0 auto;
  padding: 1.875rem;
`;

export const _NFTIndex_Loading = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.25rem
`;

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

export const _NFTIndex_Figure = styled.figure`
  cursor: pointer;
  overflow: hidden;
  position: relative;
  width: 100%;
`

export const _NFTIndex_Image = styled.img`
  width: 100%;
  display: block;
`;
