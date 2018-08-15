import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnhancedTable from '../Table/Table';
import FullScreenDialog from '../FullScreenDialog/FullScreenDialog';
import Autocomplete from '../Autocomplete/Autocomplete';
import { getAllApplications } from '../../redux/actions/adminActions';
import SimpleTabs from '../SimpleTabs/SimpleTabs';
import './Admin.css';


const mapStateToProps = state => ({
  apps: state.admin.adminApplication,
  user: state.user,
  login: state.login,
  editStatus: false,
});

class AdminPage extends Component {

  state = {
    active: null,
    selectedApplicant: [],
    allApplicants: this.props.apps,
  };

  componentDidMount() {
    this.props.dispatch(getAllApplications());
  }

  componentDidUpdate() {
    //on update check for loading and if loading is complete and admin is not present
    //send user to the home page if they do not have admin priv.

    if (!this.props.user.isLoading && !this.props.user.admin) {
      this.props.history.push('home');
    }
  }


  //function to change the active person in the fullscreen dialog box
  setActive = (person) => {
    this.setState({
      active: person
    });
  }

  //changes the table to match search criteria
  handleChange = (prevState) => (value) => {
    if (prevState !== this.state) {
      this.setState({
        selectedApplicant: [...this.state.selectedApplicant, value.value]
      });
    }
  };

  //resets the table
  reset = (event) => {
    this.setState({
      selectedApplicant: []
    })
  }


  render() {
    //render the table conditionally if at least 1 application is present.
    let content = null;

    if(this.props.apps){content = (
      <div>
        <br />
        <br />
        <br />
        <Autocomplete
          apps = {this.props.apps}
          handleChange = {this.handleChange}
          selectedApplicant = {this.state.selectedApplicant}
        />
      {this.state.selectedApplicant.length ? (
        <div>
          <div></div>
          <EnhancedTable
                setActive = {this.setActive}
                apps = {this.state.selectedApplicant}
                reset = {this.reset}
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
        <SimpleTabs/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>ADMIN PAGE</h1>
        {/* display content if active is null and open fullscreen if active is true */}
        {this.state.active === null ? (
            content
        ) : (
          <FullScreenDialog
            person = {this.state.active}
            setActive = {this.setActive}
            reset = {this.reset}
 
          />
        )
      }

      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminPage);
