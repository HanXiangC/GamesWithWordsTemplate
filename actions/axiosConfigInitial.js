import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: process.env.NODE_ENV === "production" ? '/api/whichenglish' : '//localhost/api/whichenglish',
});

module.exports = axiosInstance;
