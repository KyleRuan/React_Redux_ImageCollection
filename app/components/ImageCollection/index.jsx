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
    let i = 0; // array
    let imageCollection;
    if (imgURLs.length > 0) {
      imageCollection = imgURLs.map(img => (
        <img alt={img.alt} key={i++} src={img.image_url} className="image" style={img.pic} />
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

