import React, { Component } from 'react';

import './TopImage.css';

class TopImage extends Component {

  render() {
    return (
          <img src={this.props.image} alt="" className="topImage"/>
    );
  }
}

export default TopImage;
