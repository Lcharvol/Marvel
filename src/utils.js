import axios from 'axios';
import params from './params';

const { server: { host, port } } = params;

export const requestJson = ({ method, url, body}) => {
  const path = `http://${host}:${port}${url}`;
  return axios({
    method: 'get',
    url: path,
    params: body,
  }).then(({ data }) => data);
};
