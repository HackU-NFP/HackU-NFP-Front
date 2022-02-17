import React from 'react';
import Head from 'next/head';

type HeadProps = {
  title?: string;
};

const _Head: React.FC<HeadProps> = ({ title }) => {
  const displayTitle = title ? title : 'Hoge Title';

  return (
    <div>
      <Head>
        <title>{displayTitle}</title>
        <meta property='og:title' content={displayTitle} key='title' />
      </Head>
    </div>
  );
};

export default _Head;
