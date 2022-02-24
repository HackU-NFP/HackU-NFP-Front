import { ShowNFT } from 'api/nft';
import Head from 'components/UI/Head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsClockFill } from 'react-icons/bs';

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
const _NFTShow_CreatedText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  margin-top: 1rem;
  color: rgb(142, 142, 142);
`;

const NFTShow = () => {
  const router = useRouter();
  const query = router.query;

  const [token, setToken] = useState<Token | null>(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    getToken();
  }, [query, router]);

  return (
    <>
      {!loading && token && (
        <>
          <Head
            title={`すまーとみんと - ${token.name}`}
            description={token.meta}
            url={`https://smart-mint.vercel.app${router.asPath}`}
            imageUrl={`${process.env.NEXT_PUBLIC_GCP_STORAGE}${token.tokenType}`}
          />
          <_NFTShow_Main>
            <_NFTShow_Figure>
              <_NFTShow_Image
                src={`${process.env.NEXT_PUBLIC_GCP_STORAGE}${token.tokenType}`}
              />
            </_NFTShow_Figure>
            <_NFTShow_TextsWrapper>
              <_NFTShow_Title>{token.name}</_NFTShow_Title>
              <_NFTShow_Describe>{token.meta}</_NFTShow_Describe>
              <_NFTShow_CreatedText>
                <BsClockFill />
                {createdAt(token.createdAt)}
              </_NFTShow_CreatedText>
            </_NFTShow_TextsWrapper>
          </_NFTShow_Main>
        </>
      )}
    </>
  );
};

export default NFTShow;
