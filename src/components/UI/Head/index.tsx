import React from 'react';
import _Head from 'next/head';

type HeadProps = {
  title?: string;
};

const Head: React.FC<HeadProps> = ({ title }) => {
  const displayTitle = title ? title : 'Hoge Title';

  return (
    <div>
      <_Head>
        <title>{displayTitle}</title>
        <meta property='og:title' content={displayTitle} key='title' />
      </_Head>
    </div>
  );
};

export default Head;
