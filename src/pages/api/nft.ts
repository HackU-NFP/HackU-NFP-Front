import axios, { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { createHeader } from 'libs/create-header';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tokenType = req.query.tokenType;
  try {
    const headers = createHeader(
      `/v1/item-tokens/${process.env.NEXT_PUBLIC_CONTRACTID}/non-fungibles/${tokenType}`
    );
    const response: AxiosResponse<ShowNFTResponse> = await axios.get(
      `${process.env.NEXT_PUBLIC_LINE_BLOCK_CHAIN_API}v1/item-tokens/${process.env.NEXT_PUBLIC_CONTRACTID}/non-fungibles/${tokenType}`,
      {
        headers: {
          ...headers,
          'Content-Type': 'application/json',
          Host: 'test-api.blockchain.line.me',
        },
      }
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
