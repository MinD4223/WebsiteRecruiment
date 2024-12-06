import { get, patch, post } from '../utils/request';

export const login = async (email, password = '') => {
  let pass = '';
  if (password !== '') {
    pass = `&password=${password}`;
  }
  const result = await get(`account?email=${email}${pass}`);
  return result;
};

export const checkExist = async (type, value) => {
  const result = await get(`account?${type}=${value}`);
  return result;
};

export const createAccount = async (options) => {
  const result = await post('account', options);
  return result;
};

export const getDetailAccount = async (token) => {
  const result = await get(`account?token=${token}`);
  return result;
};

export const updateAccount = async (id, options) => {
  const result = await patch(`account/${id}`, options);
  return result;
};
