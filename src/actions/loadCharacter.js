import { requestJson } from '../utils';
import  md5 from 'md5';
import { apikey, apikeyPrivate } from '../params';

export const CHARACTERLOADED = 'CHARACTERLOADED';
export const characterLoaded = (data, sucess) =>
  ({ type: CHARACTERLOADED, data, sucess });

export const loadCharacter = path => (dispatch, getState) => {
  if (path === undefined) {
    dispatch(characterLoaded());
  } else {
    const Hash = (time) => md5(`${time}${apikeyPrivate}${apikey}`);
    const ts = Math.round(new Date() / 1000);
    const body = {
      ts,
      apikey,
      hash: Hash(ts),
    };
    requestJson({ method: 'get', url: `/v1/public/${path}`, body })
    .then((data) => {
      dispatch(characterLoaded(data.data, true));
    })
    .catch(() => dispatch(characterLoaded({results: []}, false)));
  }
}