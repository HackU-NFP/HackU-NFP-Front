import styled from 'styled-components'

import { LayoutFlexProps } from "./LayoutFlex";

export const _LayoutFlex = styled.div<LayoutFlexProps>`
  display: flex;
  justify-content: ${(props) => {
    return props.justify
  }};
  align-items: ${(props) => {
    return props.align
  }};
  flex-direction: ${(props) => {
    return props.direction
  }};
  flex-wrap: ${(props) => {
    return props.wrap ? 'wrap' : 'nowrap'
  }};
  gap: ${(props) => {
    const p = props.gap

    if (p === 'small') return '0.8rem'
    if (p === 'medium') return '2rem'
    if (p === 'large') return '4rem'
  }};
`
