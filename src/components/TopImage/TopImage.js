import React, { Component } from 'react';
import './TopImage.css';
import { Parallax } from '../../../node_modules/react-scroll-parallax';

class TopImage extends Component {
  //pass image into this component as props so you 
  //can use any image as a header
  render() {
    return (
      <Parallax 
      className="parallax"
      offsetYMax={0}
      offsetYMin={-100}
      slowerScrollRate
      tag="figure"
      >
        <img src={this.props.image} alt="" className="parallaxImage"/>
      </Parallax>
    );
  }
}

export default TopImage;
