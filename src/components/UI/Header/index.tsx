import React from 'react';
import Link from 'next/link';

import { _Header } from './index.styles';

const Header = () => {
  const _ = _Header;

  return (
    <_.Header>
      <Link href={'/'} passHref>
        <_.Logo>すまーとみんと</_.Logo>
      </Link>
    </_.Header>
  );
};

export default React.memo(Header);
