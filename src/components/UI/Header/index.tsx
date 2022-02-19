import Link from 'next/link';
import React from 'react';
import { _Header, _Header_Logo } from './index.styles';

const Header = () => {
  return (
    <_Header>
      <Link href={'/'} passHref>
        <_Header_Logo>Smart Mint</_Header_Logo>
      </Link>
    </_Header>
  );
};

export default React.memo(Header);
