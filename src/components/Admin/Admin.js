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
    selectedApplicant: [],
  };

  componentDidMount(){
    this.props.dispatch({type: 'GET_ALL_APPLICATION'});
    console.log(this.state);
  }

  componentDidUpdate = () => {
    console.log(this.state);
  }

  setActive = (person) => {
    this.setState({
      active: person
    });
  }

  handleChange = (prevState) => (value) => {
    console.log(value);
    if (prevState !== this.state) {
      console.log('hello')
      this.setState({
        selectedApplicant: [...this.state.selectedApplicant, value.value]
      });
    }
  };

  render() {
    let content =null;
    if(this.props.apps){content = (
      <div>
        <Autocomplete
          apps = {this.props.apps}
          handleChange = {this.handleChange}
          selectedApplicant = {this.state.selectedApplicant}
        />
      {this.state.selectedApplicant.length ? (
        <div>
          <EnhancedTable
                setActive = {this.setActive}
                apps = {this.state.selectedApplicant}
          />
        </div>
      ) : (
        <div>
          <EnhancedTable
                setActive = {this.setActive}
                apps = {this.props.apps}
          />
        </div>
      )}


      </div>
    )

    };


    return (
      <div>
        <h1>ADMIN PAGE</h1>
        {this.state.active === null ? (
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
