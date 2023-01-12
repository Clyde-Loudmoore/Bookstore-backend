import { getUser } from '../authControllers/getUser';
import { patchUser } from './patchUser';
import { patchUserPass } from './patchUserPass';
import { deleteUser } from './deleteUser';

export default {
  getUser,
  patchUser,
  patchUserPass,
  deleteUser,
};
