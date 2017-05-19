/**
 * Created by KyleRuan on 2017/5/18.
 */
// import * as storage from '../utils/storage';

export const FETCH_IMAGE_LIST = 'FETCH_IMAGE_LIST';

function makeFakeData(items) {
  if (items.length < 1) {
    const imgurl = 'https://drscdn.500px.org/photo/210646819/q%3D80_h%3D450/972f2288d5428003f41de6b90cfb3a76';
    const imgs = [imgurl, imgurl, imgurl, imgurl];
    const imgURLs = [...imgs, ...imgs, ...imgs, ...imgs];
    return { type: FETCH_IMAGE_LIST, imgURLs };
  }
  const imgURLs = items;
  return { type: FETCH_IMAGE_LIST, imgURLs };
}
export function fetchImages() {
  // get the image Inform from the internet
  return (dispatch) => {
    dispatch(makeFakeData([]));
  };
}
