import config from '../config';

export const addUrlAvatar = (avatarName: string) => {
  const avatarUrl = `${config.currentUrl}/public/avatars/${avatarName}`;
  return avatarUrl;
};