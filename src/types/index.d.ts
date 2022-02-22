type LayoutType = 'gallery' | 'flex' | 'slideShow';

type queryParameter = {
  contractId: string;
  limit: number;
  orderBy: string;
  page: number;
};

type Token = {
  createdAt: number;
  meta: string;
  name: string;
  tokenType: string;
  totalBurn: string;
  totalMint: string;
  totalSupply: string;
};

type IndexNFTResponse = Token[];

type ShowNFTResponse = Token;
