import React, { Component } from 'react';
import MiniDrawer from '../MiniDrawer/MiniDrawer';
// import { connect } from 'react-redux';

class HomePage extends Component {

  render() {
    return (
      <div>
        <MiniDrawer
        content = {'STATIC HOME PAGE'}
        />   
      </div>
    );
  }
}

export default HomePage;
