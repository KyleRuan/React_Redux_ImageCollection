/**
 * Created by KyleRuan on 2017/4/21.
 */
import React from 'react';
import './style.scss';
import Header from '../Header';

export default class ImageCollection extends React.Component {
  componentDidMount() {
  }

  render() {
    const { state, actions } = this.props;
    const { isEditing, selectedId } = state.editor;
    const imgurl = 'https://drscdn.500px.org/photo/210646819/q%3D80_h%3D450/972f2288d5428003f41de6b90cfb3a76';
    const imgs = [imgurl, imgurl, imgurl, imgurl];
    const imgss = [...imgs, ...imgs, ...imgs, ...imgs];
    let i = 0;
    const imageCollection = imgss.map(img => (
      <img alt="tangerine love" key={i++} src={img} className="image" />
    ));
    return (
      <div className="image-collection">
        <Header />
        <div className="image-content">
          {imageCollection}
        </div>
      </div>
    );
  }

}

