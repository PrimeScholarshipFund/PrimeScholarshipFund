import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnhancedTable from '../Table/Table';

import './Admin.css';

const mapStateToProps = state => ({
  apps: state.admin.adminApplication,
});

class AdminPage extends Component {

  state = {
    testComment: 'Pineapple Time!',
  }

  // componentDidMount(){
  //   this.props.dispatch({type: 'GET_ALL_APPLICATION'});
  // }

  render() {
    return (
      <div>
        <h1>ADMIN PAGE</h1>
        <EnhancedTable />

      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminPage);
