/**
 * Created by KyleRuan on 2017/5/18.
 */
// import * as storage from '../utils/storage';
import fetch from 'isomorphic-fetch';

export const FETCH_IMAGE_LIST = 'FETCH_IMAGE_LIST';

function makeFakeData() {
  return (dispatch) => {
    fetch('/api', { 'Content-Type': 'application/json' }).then(
      (res) => {
        const data = res.json();
        return data;
      }
    ).then(
      (data) => {
        const imgURLs = data.imgURLs;
        dispatch({ type: FETCH_IMAGE_LIST, imgURLs });
      }
    );
  };
}
function ImageList(imgURLs) {
  return (dispatch) => {
     dispatch({ type: FETCH_IMAGE_LIST, imgURLs });
   };
}
export function fetchImages() {
  return makeFakeData([]);
}
