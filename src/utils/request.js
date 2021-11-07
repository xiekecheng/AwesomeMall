/**
 * 封装axios发送请求
 */
const axios = require('axios');

const baseURL = 'http://localhost:3000/';

const service = axios.create({
  baseURL,
  timeout: 5000,
});

// 拦截请求
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 拦截响应
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default service;
