import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  apps: state.admin.adminApplication,
});

class AdminPage extends Component {

  componentDidMount(){
    this.props.dispatch({type: 'GET_ALL_APPLICATION'});
  }

  render() {
    return (
      <div>
        <h1>ADMIN PAGE</h1>
        {JSON.stringify(this.props.apps)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminPage);