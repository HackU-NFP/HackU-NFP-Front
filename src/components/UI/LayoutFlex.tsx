import React from 'react';
import { _LayoutFlex } from './index.styles';

export type LayoutFlexProps = {
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center';
  direction?: 'row' | 'column';
  wrap?: 'wrap' | 'nowrap';
  gap?: 'none' | 'small' | 'medium' | 'large';
  children: React.ReactNode;
};

const LayoutFlex: React.FC<LayoutFlexProps> = ({
  justify = 'flex-start',
  align = 'flex-start',
  direction = 'row',
  wrap = 'wrap',
  gap = 'none',
  children = LayoutFlex,
}) => {
  return (
    <_LayoutFlex
      {...{
        justify,
        align,
        direction,
        wrap,
        gap,
      }}
    >
      {children}
    </_LayoutFlex>
  );
};

export default React.memo(LayoutFlex);
