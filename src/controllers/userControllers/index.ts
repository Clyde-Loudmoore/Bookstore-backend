import { getUser } from '../authControllers/getUser';
import { postAvatar } from './postUserAvatar';
import { patchUser } from './patchUser';
import { patchUserPass } from './patchUserPass';
import { deleteUser } from './deleteUser';

export default {
  getUser,
  postAvatar,
  patchUser,
  patchUserPass,
  deleteUser,
};
