import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';

// 'https://unsplash.it/700/345?random=1'

const images = [
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/400/300?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/400/300?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/400/300?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/400/300?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/600/400?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
];

const Main = styled.div`
  max-width: 95%;
  margin: 0 auto;
  //height: 100%;
  padding: 30px;
`;
const _IMG = styled.img`
  width: 300px;
`;

const Home: NextPage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<string[]>([...images]);

  function loadFunc() {
    setTimeout(() => {
      setItems(items.concat(...images));
    }, 1000);
    console.log('OK');
  }

  return (
    <Main>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={
          <div className='loader' key={0}>
            Loading ...
          </div>
        }
      >
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 550: 2, 750: 3, 800: 3, 1200: 6 }}
        >
          <Masonry gutter='10px'>
            {items.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: '100%', display: 'block' }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>
    </Main>
  );
};

export default Home;
