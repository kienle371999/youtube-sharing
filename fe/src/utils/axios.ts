import axios, { AxiosRequestConfig } from 'axios';

const axiosServices = axios.create({ baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3010/' });

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

axiosServices.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('serviceToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.response.status === 401 && !window.location.href.includes('/login')) {
    //   window.location.pathname = '/login';
    // }
    return Promise.reject((error.response && error.response.data) || 'Wrong Services');
  }
);

export default axiosServices;

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosServices.get(url, { ...config });

  return res.data;
};

export const fetcherPost = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosServices.post(url, { ...config });

  return res.data;
};

export const fetcherCopy = async (args: string | [string, AxiosRequestConfig]) => {
  const axiosCopyServices = axios.create({ baseURL: 'http://localhost:3000/' });
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosCopyServices.get(url, { ...config });

  console.log('hello ', res);

  return res.data;
};
