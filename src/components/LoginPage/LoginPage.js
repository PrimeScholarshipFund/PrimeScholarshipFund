import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import SimpleTabs from '../SimpleTabs/SimpleTabs'
import { Input, Button, IconButton, InputAdornment, FormControl, InputLabel } from '../../../node_modules/@material-ui/core';
import { VisibilityOffIcon, VisibilityIcon } from 'mdi-react';


const inputStyle = {
  width: '200px'
}

const styles = theme => ({
  root: {
    height: '50vh',
    justifyContent: 'center',
  }
})

const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      showPassword: false,
    };
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch(clearError());
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.admin) {
      this.props.history.push('admin');
    }
    else if (!this.props.user.isLoading && this.props.user.userName !== null) {
      this.props.history.push('application');
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
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


  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          { this.props.login.message }
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <SimpleTabs />
      <div className="loginRegister">
        { this.renderAlert() }
        <form onSubmit={this.login}>
          <h1>Login</h1>
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
              value="Log In"
              label="submit"
              variant="contained"
              color="secondary"
            >
            Log In
            </Button>
            <Link to="/register"><Button>Register</Button></Link>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default compose(withStyles(styles),connect(mapStateToProps))(LoginPage);