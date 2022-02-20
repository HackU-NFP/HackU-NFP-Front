type LayoutType = 'gallery' | 'flex' | 'slideShow';

type queryParameter = {
  limit: number;
  orderBy: string;
  page: number;
}

type Token = {
  createdAt: number;
  meta: string;
  name: string;
  tokenType: string;
  totalBurn: string;
  totalMint: string;
  totalSupply: string;
};

interface IndexNFTResponse {
  responseData: Token[];
  responseTime: number;
  statusCode: number;
  statusMessage: string;
}

interface ShowNFTResponse {
  responseData: Token;
  responseTime: number;
  statusCode: number;
  statusMessage: string;
}
