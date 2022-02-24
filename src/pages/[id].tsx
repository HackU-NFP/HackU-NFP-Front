import { ShowNFT } from 'api/nft';
import Head from 'components/UI/Head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsClockFill } from 'react-icons/bs';
import { AiOutlineCopy } from 'react-icons/ai';
import LayoutFlex from 'components/UI/LayoutFlex';

const _NFTShow_Main = styled.div`
  max-width: 95%;
  margin: 0 auto;
  padding-bottom: 3%;
  z-index: 1;
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
  padding: 0.5rem;
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
const _NFTShow_CreatedText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  margin-top: 1rem;
  color: rgb(142, 142, 142);
`;
const _CopySuccessWrapper = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 9px gray;
  position: fixed;
  bottom: 30px;
  background: #fff;
  padding: 1rem;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
`;

const NFTShow = () => {
  const router = useRouter();
  const query = router.query;

  const [token, setToken] = useState<Token | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCopySuccess, setIdCopySuccess] = useState(false);

  const createdAt = useCallback((unixtime: number) => {
    const date = new Date(unixtime);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  }, []);

  const getToken = async () => {
    try {
      const id = query.id as string | undefined;
      const contractId = process.env.NEXT_PUBLIC_CONTRACTID as string;
      if (id === undefined) return;

      const response = await ShowNFT(contractId, id);

      setToken(response.data);
      setLoading(false);
    } catch (e) {
      router.push('/404');
      return;
    }
  };

  const copyUrl = () => {
    const url = location.href;
    navigator.clipboard.writeText(url);
    if (isCopySuccess) return;

    setIdCopySuccess(true);
    setTimeout(() => {
      setIdCopySuccess(false);
    }, 3000);
  };

  useEffect(() => {
    getToken();
  }, [query, router]);

  return (
    <>
      {!loading && token && (
        <>
          <Head title={`すまーとみんと - ${token.name}`} />
          <_NFTShow_Main>
            <_NFTShow_Figure>
              <LayoutFlex direction='column' gap='small' align='flex-end'>
                <_NFTShow_Image
                  src={`${process.env.NEXT_PUBLIC_GCP_STORAGE}${token.tokenType}`}
                />
                <LayoutFlex justify='center' gap='medium'>
                  <AiOutlineCopy
                    onClick={copyUrl}
                    size={'1.7rem'}
                    color={'gray'}
                    style={{ cursor: 'pointer' }}
                  />
                </LayoutFlex>
              </LayoutFlex>
            </_NFTShow_Figure>
            <_NFTShow_TextsWrapper>
              <_NFTShow_Title>{token.name}</_NFTShow_Title>
              <_NFTShow_Describe>{token.meta}</_NFTShow_Describe>
              <_NFTShow_CreatedText>
                <BsClockFill />
                {createdAt(token.createdAt)}
              </_NFTShow_CreatedText>
            </_NFTShow_TextsWrapper>
            {isCopySuccess && (
              <_CopySuccessWrapper>URLをコピーしました</_CopySuccessWrapper>
            )}
          </_NFTShow_Main>
        </>
      )}
    </>
  );
};

export default NFTShow;
