import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnhancedTable from '../Table/Table';
import FullScreenDialog from '../FullScreenDialog/FullScreenDialog';
import Autocomplete from '../Autocomplete/Autocomplete';

import './Admin.css';

const mapStateToProps = state => ({
  apps: state.admin.adminApplication,
});

class AdminPage extends Component {

  state = {
    active: null,
  };

  componentDidMount(){
    this.props.dispatch({type: 'GET_ALL_APPLICATION'});
  }

  setActive = (person) => {
    this.setState({
      active: person
    });
  }


  render() {
    let content =null;
    if(this.props.apps){content = (
      <div>
        <Autocomplete
          searched = {this.state.searched}
          apps = {this.props.apps}
          handleChange= {this.handleChange}
        />
        <EnhancedTable
              setActive = {this.setActive}
              apps = {this.props.apps}
            />

      </div>
    )

    };


    return (
      <div>
        <h1>ADMIN PAGE</h1>
        {this.state.active === null? (
            content
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
