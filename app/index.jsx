import React from 'react';
// import ReactDom from 'react-dom';
import { render } from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import 'babel-polyfill';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
// import ImageCollection from './components/ImageCollection';
import ImageCollection from './components/ImageCollection';
import * as actionCreators from './actions/ImageAction';

const store = applyMiddleware(thunkMiddleware)(createStore)(rootReducer);
const App = connect(state => ({ state }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch)
  })
)(ImageCollection);

// create DOM container
const container = document.body.appendChild(
  document.createElement('div')
);

// render root conponent with store to DOM container
render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
