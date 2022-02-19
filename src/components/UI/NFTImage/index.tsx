import Link from 'next/link';
import React from 'react';
import {
  _NFTIndex_Figure,
  _NFTIndex_Image,
  _NFTIndex_ImageTextWrapper,
  _NFTIndex_ImageText,
} from './index.styles';

type NFTIndexProps = {
  image: string;
  layout: LayoutType;
  key: number;
};

const NFTIndex: React.FC<NFTIndexProps> = ({ image, layout, key }) => {
  return (
    <_NFTIndex_Figure layout={layout} key={key}>
      <Link href={`/12878`} passHref>
        <a target='_blank'>
          <_NFTIndex_Image
            alt='NFT'
            src={image}
            layout={layout}
            loading='lazy'
          />
          <_NFTIndex_ImageTextWrapper>
            <_NFTIndex_ImageText>
              {'HogeImageHogeImageHogeImageHogeImage'}
            </_NFTIndex_ImageText>
          </_NFTIndex_ImageTextWrapper>
        </a>
      </Link>
    </_NFTIndex_Figure>
  );
};

export default React.memo(NFTIndex);
