import type { NextPage } from 'next';
import LayoutFlex from 'components/UI/LayoutFlex';
import Head from 'components/UI/Head';

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <LayoutFlex>
        <div>Hoge</div>
        <div>Hoge</div>
      </LayoutFlex>
    </>
  );
};

export default Home;
