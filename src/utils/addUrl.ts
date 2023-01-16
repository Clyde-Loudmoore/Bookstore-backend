import config from '../config';

export const addUrlAvatar = (avatarName: string) => {
  const avatarUrl = `${config.currentUrl}/public/avatars/${avatarName}`;
  return avatarUrl;
};

export const addUrlBookCover = (addUrlBookCoverName: string) => {
  const bookCoverUrl = `${config.currentUrl}/public/books/${addUrlBookCoverName}`;
  return bookCoverUrl;
};