import crypto from 'crypto';

export const generateGravatar = (string: string) => {
  const lowerCaseString = string.trim().toLowerCase();
  const md5 = crypto.createHash('md5');
  const digest = md5.update(lowerCaseString).digest('hex');
  console.log(digest, 'generate')
  return `https://www.gravatar.com/avatar/${digest}/?d=robohash`;
}