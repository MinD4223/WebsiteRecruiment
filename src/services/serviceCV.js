import { get, patch, post } from '../utils/request';

export const createCV = async (options) => {
  const result = await post('cv', options);
  return result;
};

export const getListCV = async () => {
  const result = await get('cv');
  return result;
};

export const changeStatusCV = async (id, options) => {
  const result = await patch(`cv/${id}`, options);
  return result;
};

export const getDetailCV = async (id) => {
  const result = await get(`cv/${id}`);
  return result;
};

export const getDetailCVForProcess = async (id) => {
  const result = await get(`cv?idUser=${id}`);
  return result;
};
