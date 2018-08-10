import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../node_modules/@material-ui/core';
import './LoginButton.css';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
});

class LoginButton extends Component {
    constructor(props){
        super(props);
    }
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {   
     let content = (
        <div id="ButtonDiv">
           
          {
            this.props.user.userName ? 
          (<Button onClick={this.logout}>Logout</Button>) : 
          (<Button href="#/login">Login</Button> )
          }

           {
              this.props.user.userName ? 
              (<p>Hello, {this.props.user.userName}</p>) : 
              (<p></p>)  
          }
          
        </div>
      );
   

    return (
      <div>
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(LoginButton);

