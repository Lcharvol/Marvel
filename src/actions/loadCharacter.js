import { requestJson } from '../utils';
import  md5 from 'md5';
import { apikey, apikeyPrivate } from '../params';

export const CHARACTERLOADED = 'CHARACTERLOADED';
export const characterLoaded = (data) =>
  ({ type: CHARACTERLOADED, data });

export const loadCharacter = (characterId, toggleCharacter )=> (dispatch, getState) => {
  const Hash = (time) => md5(`${time}${apikeyPrivate}${apikey}`);
  const ts = Math.round(new Date() / 1000);
  const body = {
    ts,
    apikey,
    hash: Hash(ts),
  };
  requestJson({ method: 'get', url: `/v1/public/characters/${characterId}`, body })
  .then((data) => {
   dispatch(characterLoaded(data.data));
   toggleCharacter();
  })
}