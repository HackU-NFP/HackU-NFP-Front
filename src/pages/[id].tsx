import Head from 'components/UI/Head';
import styled from 'styled-components';

const _NFTShow_Main = styled.div`
  max-width: 95%;
  margin: 0 auto;
  padding-bottom: 3%;
`;
const _NFTShow_Figure = styled.figure`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;
const _NFTShow_Image = styled.img`
  max-width: 100%;
  max-height: 500px;
`;
const _NFTShow_TextsWrapper = styled.div`
  max-width: 70%;
  margin: 0 auto;
  padding: 1rem;
`;
const _NFTShow_Title = styled.div`
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.5;
  overflow-wrap: break-word;
`;
const _NFTShow_Describe = styled.div`
  border-top: 1px solid #000;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  line-height: 1.5;
  overflow-wrap: break-word;
  color: rgba(43, 43, 43, 0.8);
`;

const NFTShow = () => {
  return (
    <>
      <Head title='Smart Mint - 1' />
      <_NFTShow_Main>
        <_NFTShow_Figure>
          <_NFTShow_Image src='https://picsum.photos/990/990?image=10' />
        </_NFTShow_Figure>
        <_NFTShow_TextsWrapper>
          <_NFTShow_Title>HogeHogeHogeHogeHogeHogeHoge</_NFTShow_Title>
          <_NFTShow_Describe>
            HogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHogeHoge
          </_NFTShow_Describe>
        </_NFTShow_TextsWrapper>
      </_NFTShow_Main>
    </>
  );
};

export default NFTShow;
