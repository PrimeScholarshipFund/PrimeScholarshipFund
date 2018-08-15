import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import LoginButton from '../LoginButton/LoginButton';

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
    align: 'right',
    width: '100vw',
  },
  tabs: {
    marginLeft: 'auto',
  },
  tabsRoot: {
    borderBottom: '1px solid #7986cb'
  },
  tabsIndicator: {
    backgroundColor: '#FF8A65',
    height: '2px',
  },
  donateButton: {
    backgroundColor: '#FF7043',
  },
});

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
      <div className={classes.root}>
          <AppBar position="fixed">
            {/* login button here- left justify */}
            <LoginButton />
            <Tabs
            classes= {{
              indicator: classes.tabsIndicator
            }} 
            className = {classNames(classes.tabs)} value={value} onChange={this.handleChange}>
              <Tab label="Home" href="#/home"></Tab>
              <Tab label="About" href="#/about"></Tab>
              <Tab label="Apply" href="#/application"></Tab>
              <Tab disableRipple classes={{root: classes.donateButton}} label="Donate" href="#/donate">Donate</Tab>
            </Tabs>
          </AppBar>
        {value === 0}
        {value === 1}
        {value === 2}
        {value === 3}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
