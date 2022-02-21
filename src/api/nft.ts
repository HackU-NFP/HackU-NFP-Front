import axios, { AxiosResponse } from 'axios';

import { createHeader } from 'libs/create-header';

export const IndexNFT = async (params: queryParameter) => {
  const headers = createHeader(
    `/v1/item-tokens/${process.env.NEXT_PUBLIC_CONTRACTID}/non-fungibles`,
    params
  );
  const response: AxiosResponse<IndexNFTResponse> = await axios.get(
    `/api/proxy/v1/item-tokens/${process.env.NEXT_PUBLIC_CONTRACTID}/non-fungibles`,
    {
      baseURL: 'https://smart-mint.vercel.app/',
      params,
      headers
    }
  );
  return response
}

export const ShowNFT = async (tokenType: string) => {
  const headers = createHeader(
    `/v1/item-tokens/${process.env.NEXT_PUBLIC_CONTRACTID}/non-fungibles/${tokenType}`
  );
  const response: AxiosResponse<ShowNFTResponse> = await axios.get(
    `/api/proxy/v1/item-tokens/${process.env.NEXT_PUBLIC_CONTRACTID}/non-fungibles/${tokenType}`,
    {
      headers
    }
  );
  return response
}
