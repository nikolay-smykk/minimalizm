import { request } from './request';

const get = (url: string, query?: any, headers?: any) => {
  return request(url, 'GET', null, query, headers);
};

const post = (url: string, data?: any, query?: any, headers?: any) => {
	return request(url, 'POST', data, query, headers);
  };
  
  const put = (url: string, data?: any, query?: any, headers?: any) => {
	return request(url, 'PUT', data, query, headers);
  };
  
  const del = (url: string, data?: any, query?: any, headers?: any) => {
	return request(url, 'DELETE', data, query, headers);
  };
  
  const patch = (url: string, data?: any, query?: any, headers?: any) => {
	return request(url, 'PATCH', data, query, headers);
  };
  

  export const RESTActions = { get, patch, del, post, put };