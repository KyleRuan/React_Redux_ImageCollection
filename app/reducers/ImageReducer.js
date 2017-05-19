/**
 * Created by KyleRuan on 2017/5/19.
 */

import * as ActionTypes from '../actions/ImageAction';

const initialState = {
  imgURLs: []
};

export default function ImageReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_IMAGE_LIST:
      return Object.assign({}, state, { imgURLs: action.imgURLs });
    default:
      return state;
  }
}
