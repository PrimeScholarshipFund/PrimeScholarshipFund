import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Input } from '../../../node_modules/@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class DonateRadioButtons extends Component {
  state = {
    value: 'female',
  };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="Donation Amount"
            name="DonationPicker"
            className={classes.group}
            value={this.props.value}
            onChange={this.props.handleChange}
          >
            <FormControlLabel
              value='25'
              control={<Radio color="primary" />}
              label="$25.00"
              labelPlacement="finish"
            />
            <FormControlLabel
              value="50"
              control={<Radio color="primary" />}
              label="$50.00"
              labelPlacement="finish"
            />
            <FormControlLabel
              value="75"
              control={<Radio color="primary" />}
              label="$75.00"
              labelPlacement="finish"
            />
            <FormControlLabel
              value="100"
              control={<Radio color="primary" />}
              label="$100.00"
              labelPlacement="finish"
            />
            <FormControlLabel
              value="other"
              control={<Radio color="primary" />}
              label={this.props.value === "other" ? <Input type="number" onChange={this.props.handleOther}>Other poop</Input> : "Other"}
              labelPlacement="finish"
            />
          </RadioGroup>
          <FormHelperText>Please enter whole Dollar amount</FormHelperText>
        </FormControl>
      </div>
    );
  }
}
    
    DonateRadioButtons.propTypes = {
      classes: PropTypes.object.isRequired,
    };

export default withStyles(styles)(DonateRadioButtons);