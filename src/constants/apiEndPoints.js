export const BACKEND_URL = 'http://localhost:5050/';

export const GET_ALL_CONTENT_TYPE = {
  url: 'content-type/',
  method: 'get',
};

export const GET_CONTENT_TYPE_BY_ID = (contentTypeId) => ({
  url: `content-type/${contentTypeId}`,
  method: 'get'
});

//   export const GET_ALL_CONTENT_TYPE = {
//     url: 'content-type',
//     method: 'get',
//   };

//   export const GET_ALL_CONTENT_TYPE = {
//     url: 'content-type',
//     method: 'get',
//   };