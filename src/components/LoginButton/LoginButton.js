import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab } from '../../../node_modules/@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import './LoginButton.css';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
});

class LoginButton extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
  }

  render() {
    return (
      <div>
        {this.props.user.userName ?
          (<Tab label={<div><LockIcon></LockIcon>Log Out</div>} onClick={this.logout}></Tab>) :
        (<Tab label={<div><LockOpenIcon></LockOpenIcon>Log In</div>} href="#/login"></Tab>)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginButton);

