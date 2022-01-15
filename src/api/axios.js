import axios from 'axios';
import {showMessage} from 'react-native-flash-message';

const requestHandler = request => {
  return request;
};

const responseErrorHandler = error => {
  if (error.response) {
    showMessage({
      message: error.response?.data?.error || error.message || 'Something went wrong',
      type: 'danger',
    });
  } else if (error.request) {
    showMessage({
      message: error.message || 'Unable to make request',
      type: 'danger',
    });
  }
  return Promise.reject(error);
};

const registerRequestInterceptor = () => {
  axios.interceptors.request.use(request => requestHandler(request));
};

const registerResponseInterceptor = () => {
  // eslint-disable-next-line promise/prefer-await-to-callbacks
  axios.interceptors.response.use(null, error => responseErrorHandler(error));
};

export const configureAxios = () => {
  registerRequestInterceptor();
  registerResponseInterceptor();
};
