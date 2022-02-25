import Link from 'next/link';
import React from 'react';
import {
  _NFTImage_Figure,
  _NFTImage_Image,
  _NFTImage_ImageTextWrapper,
  _NFTImage_ImageText,
} from './index.styles';

type NFTImageProps = {
  token: Token;
  layout: LayoutType;
};

const NFTImage: React.FC<NFTImageProps> = ({ token, layout }) => {
  return (
    <_NFTImage_Figure layout={layout}>
      <Link href={`/${token.tokenType}`} passHref>
        <a>
          <_NFTImage_Image
            alt='NFT'
            src={`${process.env.NEXT_PUBLIC_GCP_STORAGE}${token.tokenType}`}
            layout={layout}
            loading='lazy'
          />
          <_NFTImage_ImageTextWrapper>
            <_NFTImage_ImageText>{token.name}</_NFTImage_ImageText>
          </_NFTImage_ImageTextWrapper>
        </a>
      </Link>
    </_NFTImage_Figure>
  );
};

export default React.memo(NFTImage);
