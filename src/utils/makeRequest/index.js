import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndPoints';

const makeRequest = async (apiEndPoint, dynamicConfig = {}, ) => {
  const requestDetails = {
    baseURL: BACKEND_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    headers: {
      authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJja0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCQza3pRMWF2T0ZNOC5vOTdHeTF4NG0uYjJabmRxZDUvVm1RbE53bjhQWEJtVFZDU1drSE4xMiIsImNyZWF0ZWRBdCI6IjIwMjMtMDMtMTBUMTI6MDE6MTUuMzUzWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDMtMTBUMTI6MDE6MTUuMzUzWiIsImlhdCI6MTY3ODQ0OTgzNX0.brah4r9AjUdUu1udfXKPsq1mJVhwqBl3Mag7lrq8yqI'
    },
    ...dynamicConfig
  };
  const { data } = await axios(requestDetails);
  return data;
};

export default makeRequest;