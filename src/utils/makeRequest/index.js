import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndPoints';

const makeRequest = async (apiEndPoint, dynamicConfig = {}, ) => {
  const requestDetails = {
    baseURL: BACKEND_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    headers: {
      authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJkYWxlQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJDVwYVpjaGNMbEZla0lTdm9pcThkNi5FdGxjSlJuZk9INjhaQ1k1YVdqMGRUa2xXMVI0MFFtIiwiY3JlYXRlZEF0IjoiMjAyMy0wMy0wOVQxNjozMjo0OS4xNDJaIiwidXBkYXRlZEF0IjoiMjAyMy0wMy0wOVQxNjozMjo0OS4xNDJaIiwiaWF0IjoxNjc4NDExODAxfQ.pA_9kgtFaO68J1bNOml0nyLAuWFQge5N-hpV5moLVe0'
    },
    ...dynamicConfig
  };
  const { data } = await axios(requestDetails);
  return data;
};

export default makeRequest;