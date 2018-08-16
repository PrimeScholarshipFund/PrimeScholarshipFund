import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    background: '#FF7043',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
};

//Make a button for donate page and style it here
class DonateButton extends Component {
  render() { 
    return ( 
      <Button
      classes={{
        root: this.props.classes.root, // class name, e.g. `classes-nesting-root-x`
        label: this.props.classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
    >
      {this.props.buttonLabel}
    </Button>
     );
  }
}

DonateButton.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
 
export default withStyles(styles)(DonateButton);