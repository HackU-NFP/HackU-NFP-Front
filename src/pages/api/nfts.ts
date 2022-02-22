import axios, { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { createHeader } from 'libs/create-header';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query);
  const params = req.query;
  try {
    const headers = createHeader(
      `/v1/item-tokens/${process.env.NEXT_PUBLIC_CONTRACTID}/non-fungibles`,
      params
    );
    const response: AxiosResponse<IndexNFTResponse> = await axios.get(
      `${process.env.NEXT_PUBLIC_LINE_BLOCK_CHAIN_API}v1/item-tokens/${process.env.NEXT_PUBLIC_CONTRACTID}/non-fungibles`,
      {
        params,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
          // Host: 'test-api.blockchain.line.me'
        },
      }
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
