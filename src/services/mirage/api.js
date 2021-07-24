import axios from 'axios';
import { showAlert } from '../../utils/util';

const http= axios.create({
  baseURL: 'https://saadecommerce.app',
});

http.defaults.headers.post['Content-Type'] = 'application/json';

http.interceptors.response.use(
  async (response)=> {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
     
    }
  },
  (error) => {
    const { response, request }  = error;
    if (response) {
      if (response.status >= 400 && response.status < 500) {
        showAlert(response.data?.data?.message, 'error');
        return null;
      }
    } else if (request) {
      showAlert('Request failed. Please try again.', 'error');
      return null;
    }
    return Promise.reject(error);
  }
);

export default http;
