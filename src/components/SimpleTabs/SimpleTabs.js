import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {

  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  routeToView = (viewName) => {
    window.location.href = `#/${viewName}`
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Home" href="#/home"></Tab>
            <Tab label="About" href="#/about"></Tab>
            <Tab label="Donate" href="#/donate"></Tab>
            <Tab label="Application" href="#/application"></Tab>
          </Tabs>
        </AppBar>
        {value === 0}
        {value === 1}
        {value === 2}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
