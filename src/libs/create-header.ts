import SignatureGenerator from './signature-generator';

export const createHeader = (path: string, p?: any) => {
  const serviceApiKey = process.env.NEXT_PUBLIC_SERVICE_API_KEY as string;
  const timestamp = createTimestamp();
  const nonce = createRandomStr();
  const signature = SignatureGenerator.signature(
    process.env.NEXT_PUBLIC_SECRET_KEY,
    'GET',
    path,
    timestamp,
    nonce,
    p
    // body = {})
  );

  return {
    'service-api-key': serviceApiKey,
    nonce,
    timestamp,
    signature,
  };
};

const createRandomStr = () => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let str = '';
  for (let i = 0; i < 8; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return str;
};

const createTimestamp = () => {
  const d = new Date();
  const dt = d.getTime();

  return dt;
};
