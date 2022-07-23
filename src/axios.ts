import axios from 'axios';
import {camelCaseMiddleware} from './shared/utils/casing';

const axiosInstance = axios.create({
  baseURL: 'https://dev.to/api/',
});

axiosInstance.interceptors.response.use(res => {
  const transformedData = camelCaseMiddleware(res.data);
  return {
    ...res,
    data: transformedData,
  };
});

export default axiosInstance;
