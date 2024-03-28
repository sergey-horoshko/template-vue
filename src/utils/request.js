import axios from 'axios';
import { getToken, removeToken } from '@/utils/auth';
import { toastError } from '@/utils/toast';

const BASE_API = import.meta.env.VITE_BASE_API;

const service = axios.create({
  baseURL: BASE_API,
});

service.interceptors.request.use((config) => {
  const conf = config;

  conf.headers['Content-Type'] = 'application/x-www-form-urlencoded';

  const token = getToken();

  if (token) {
    conf.headers.Authorization = `Bearer ${token}`;
  }

  return conf;
}, (error) => {
  toastError();

  Promise.reject(error);
});

service.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;

    if (response) {
      // client received an error response (5xx, 4xx)
      if (response?.status === 401) {
        const r = response?.data;

        toastError();

        if (getToken()) {
          removeToken();

          document.location.reload();
        }

        return Promise.reject(r);
      }

      if (response?.status < 500) {
        const r = response?.data;

        toastError();

        return Promise.reject(new Error(r));
      }
    }

    return Promise.reject(new Error(response));
  },
);

export { BASE_API };

export default service;
