import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

request.defaults.withCredentials = true;

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  }
);

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);

  return response.data;
};

export const post = async (path, options = {}) => {
  const response = await request.post(path, options);

  return response;
};

export default request;
