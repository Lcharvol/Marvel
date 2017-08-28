import { requestJson } from '../utils';
import  md5 from 'md5';
import { apikey, apikeyPrivate } from '../params';

export const CHARACTERSLOADED = 'CHARACTERSLOADED';
export const charactersLoaded = (data) =>
  ({ type: CHARACTERSLOADED, data });

const Hash = (time) => md5(`${time}${apikeyPrivate}${apikey}`);
const ts = Math.round(new Date() / 1000);
export const loadCharacters = () => (dispatch, getState) => {
  const body = {
    ts,
    apikey,
    hash: Hash(ts),
  };
  requestJson({ method: 'get', url: '/v1/public/characters', body })
  .then((data) => {
   dispatch(charactersLoaded(data.data));
  })
}