import React from 'react';
import Head from 'next/head';

type HeadProps = {
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
};

const _Head: React.FC<HeadProps> = ({ title, description, url, imageUrl }) => {
  const displayTitle = title ? title : 'Hoge Title';

  return (
    <div>
      <Head>
        <title>{displayTitle}</title>
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
        <meta name='description' content={description} />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:site_name' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={imageUrl} />
        <meta property='og:image:width' content={String(300)} />
        <meta property='og:image:height' content={String(300)} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={url} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:image' content={imageUrl} />
      </Head>
    </div>
  );
};

export default _Head;
