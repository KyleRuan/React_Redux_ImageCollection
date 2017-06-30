/**
 * Created by KyleRuan on 2017/5/18.
 */
// import * as storage from '../utils/storage';
import fetch from 'isomorphic-fetch';

export const FETCH_IMAGE_LIST = 'FETCH_IMAGE_LIST';
function fetchImagesList() {
  return (dispatch) => {
    fetch('http://localhost:9090/api/images', { 'Content-Type': 'application/json' }).then(
      (res) => {
        const data = res.json();
        return data;
      }
    ).then(
      (data) => {
        const imgURLs = data.imgURL;
        console.log(data);
        dispatch({ type: FETCH_IMAGE_LIST, imgURLs });
      }
    );
  };
}
export function fetchImages() {
  return fetchImagesList();
}
