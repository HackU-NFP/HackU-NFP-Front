import { NextApiRequest, NextApiResponse } from 'next';
import httpProxyMiddleware from 'next-http-proxy-middleware';

const target = process.env.NEXT_PUBLIC_LINE_BLOCK_CHAIN_API;

export const config = {
  api: {
    externalResolver: true,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  httpProxyMiddleware(req, res, {
    target: target,
    pathRewrite: [
      {
        patternStr: `^/api/proxy`,
        replaceStr: '',
      },
    ],
  });
}
