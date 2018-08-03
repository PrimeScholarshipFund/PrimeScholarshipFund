import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: 'Applied',
    label: 'Applied',
  },
  {
    value: 'Waiting for Interview',
    label: 'Waiting for Interview',
  },
  {
    value: 'Interviewed',
    label: 'Interviewed',
  },
  {
    value: 'Accepted',
    label: 'Accepted',
  },
  {
    value: 'Will Not Interview',
    label: 'Will Not Interview',
  },
  {
    value: 'Did Not Attend Interview',
    label: 'Did Not Attend Interview',
  },
  {
    value: 'Denied After Interview',
    label: 'Denied After Interview',
  },
];

class InputAdornments extends React.Component {
  state = this.props.person;

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <p>{this.state.status}</p>

        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          value={this.state.status}
          onChange={this.handleChange('status')}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.amount}
            onChange={this.handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <TextField
          id="multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="20"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          fullWidth
          margin="normal"
        />
        </FormControl>
      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);
