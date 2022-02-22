import axios, { AxiosResponse } from 'axios';

const baseUri = 'https://hacku-nfp-server-j5waslslpa-an.a.run.app';

export const IndexNFT = async (params: queryParameter) => {
  const response: AxiosResponse<IndexNFTResponse> = await axios.get(
    `${baseUri}/api/nfts`,
    {
      params,
    }
  );
  return response;
};

export const ShowNFT = async (constractId: string, tokenType: string) => {
  const response: AxiosResponse<ShowNFTResponse> = await axios.get(
    `${baseUri}/api/nft`,

    {
      params: {
        contractId: constractId,
        tokenType: tokenType,
      },
    }
  );
  return response;
};
