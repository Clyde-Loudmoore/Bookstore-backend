import * as yup from 'yup';

const fullName = yup.string().max(25);

const requiredEmail = yup.string().email('Invalid email address').required('Enter email');
const password = yup.string().min(4, 'The minimum password length is 4 characters').max(16, 'The maximum password length is 16 characters');
const requiredPassword = password.required('Enter password');
const requiredPasswordLog = yup.string().required('Enter your password');
const requiredParamsId = yup.number().integer().min(1).required();

const sharedValidation = {
  requiredParamsId,
  fullName,
  requiredEmail,
  requiredPassword,
  requiredPasswordLog,
};

const singUp = {
  body: {
    email: sharedValidation.requiredEmail,
    password: sharedValidation.requiredPassword,
  },
};

const singIn = {
  body: {
    email: sharedValidation.requiredEmail,
    password: sharedValidation.requiredPasswordLog,
  },
};

const patchUser = {
  body: {
    fullName: sharedValidation.fullName,
    email: sharedValidation.requiredEmail,
  },
  params: {
    userId: sharedValidation.requiredParamsId,
  },
};

const patchUserPass = {
  body: {
    password: sharedValidation.requiredPassword,
    newPassword: sharedValidation.requiredPassword,
    confPassword: sharedValidation.requiredPassword
  },
  params: {
    userId: sharedValidation.requiredParamsId,
  },
};

const deleteUser = {
  params: {
    userId: sharedValidation.requiredParamsId,
  },
};

export default {
  singUp,
  singIn,
  patchUser,
  patchUserPass,
  deleteUser,
};
