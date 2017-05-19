/**
 * Created by KyleRuan on 2017/4/21.
 */
import React from 'react';
import './style.scss';
import Header from '../Header';

export default class ImageCollection extends React.Component {
  componentDidMount() {
    this.props.actions.fetchImages();
  }

  render() {
    const { state } = this.props;
    const { imgURLs } = state.ImageReducer;
    let i = 0;
    let imageCollection;
    if (imgURLs.length > 0) {
      imageCollection = imgURLs.map(img => (
        <img alt="tangerine love" key={i++} src={img} className="image" />
      ));
    }
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

