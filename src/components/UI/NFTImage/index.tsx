import Link from 'next/link';
import React from 'react';
import {
  _NFTImage_Figure,
  _NFTImage_Image,
  _NFTImage_ImageTextWrapper,
  _NFTImage_ImageText,
} from './index.styles';

type NFTImageProps = {
  image: string;
  layout: LayoutType;
  key: number;
};

const NFTImage: React.FC<NFTImageProps> = ({ image, layout, key }) => {
  return (
    <_NFTImage_Figure layout={layout} key={key}>
      <Link href={`/12878`} passHref>
        <a target='_blank'>
          <_NFTImage_Image
            alt='NFT'
            src={image}
            layout={layout}
            loading='lazy'
          />
          <_NFTImage_ImageTextWrapper>
            <_NFTImage_ImageText>
              {'HogeImageHogeImageHogeImageHogeImage'}
            </_NFTImage_ImageText>
          </_NFTImage_ImageTextWrapper>
        </a>
      </Link>
    </_NFTImage_Figure>
  );
};

export default React.memo(NFTImage);
