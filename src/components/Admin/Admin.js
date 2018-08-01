import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnhancedTable from '../Table/Table';
import FullScreenDialog from '../FullScreenDialog/FullScreenDialog';

import './Admin.css';

const mapStateToProps = state => ({
  apps: state.admin.adminApplication,
});

class AdminPage extends Component {

  state = {
    active: null,
  };

  // componentDidMount(){
  //   this.props.dispatch({type: 'GET_ALL_APPLICATION'});
  // }

  setActive = (person) => {
    this.setState({
      active: person
    });
  }

  render() {
    return (
      <div>
        <h1>ADMIN PAGE</h1>
        {this.state.active === null? (
          <EnhancedTable
            setActive = {this.setActive}
          />
        ) : (
          <FullScreenDialog
            person = {this.state.active}
            setActive = {this.setActive}
          />
        )
      }

      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminPage);
