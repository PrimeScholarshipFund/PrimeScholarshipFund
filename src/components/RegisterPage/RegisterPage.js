import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FormControl, InputLabel, Input, InputAdornment, IconButton, Button } from '@material-ui/core';
import { VisibilityOffIcon, VisibilityIcon } from 'mdi-react';
import SimpleTabs from '../SimpleTabs/SimpleTabs';

const inputStyle = {
  width: '200px'
}

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: '',
      showPassword: false,
    };
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const body = {
        username: this.state.username,
        password: this.state.password,
      };

      // making the request to the server to post the new user's registration
      axios.post('/api/user/register/', body)
        .then((response) => {
          if (response.status === 201) {
            this.props.history.push('/login');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div className="loginRegister" >
        {this.renderAlert()}
        < SimpleTabs />
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <FormControl>
            <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                style={inputStyle}
                id="username"
                type="text"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
                />
                </FormControl>
          </div>
          <div>
          <FormControl >
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
             style={inputStyle}
            id="password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
          </div>
          <div>
            <Button
              type="submit"
              name="submit"
              value="Register"
              variant="contained"
              color="secondary"
            >
            Register
            </Button>
            <Link to="/home"><Button>Cancel</Button></Link>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;

