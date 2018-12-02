import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  logo: {
    flexGrow: 1,
    marginLeft: '60px',
  },
  menu: {
    marginRight: '70px',
    marginTop: '35px',
  },
  donateButton: {
    backgroundColor: '#f58424',
    marginLeft: '50px',
  },
};

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  componentDidMount() {
    this.setState({ value: this.props.value });

  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
   
    return (
        <Tabs>
          <div className={classes.logo}>
            <img src='images/diversitech-final.png' width='350px' alt="Logo" />
          </div>
          <div className={classes.menu}>
            <Tab label="Home" href="#/home"></Tab>
            <Tab label="About" href="#/about"></Tab>
            <Tab label="Apply" href="#/application"></Tab>
            <Tab label="Login" href="#/login"></Tab>
            <Button className={classes.donateButton} label="Donate" href="#/donate">Donate</Button>
          </div>
        </Tabs>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
