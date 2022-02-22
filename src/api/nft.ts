import axios, { AxiosResponse } from 'axios';

import { createHeader } from 'libs/create-header';

export const IndexNFT = async (params: queryParameter) => {
  const response: AxiosResponse<IndexNFTResponse> = await axios.get(
    `/api/nfts`,
    {
      params,
    }
  );
  return response;
};

export const ShowNFT = async (tokenType: string) => {
  const response: AxiosResponse<ShowNFTResponse> = await axios.get(
    `/api/nft?tokenType=${tokenType}`
  );

  return response;
};
