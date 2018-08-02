import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit * 2,
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
      <div>
        <div>
          <TextField
            select
            className={classNames(classes.margin, classes.textField)}
            value={this.state.status}
            onChange={this.handleChange('status')}
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="grid-2">
          <Paper className="item">
            <h3>Contact</h3>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Phone Number'
              value={this.state.phone_number}
              onChange={this.handleChange('phone_number')}
            >
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Email'
              value={this.state.email}
              onChange={this.handleChange('email')}
            >
            </TextField>
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Address Line 1'
              value={this.state.address_line_1}
              onChange={this.handleChange('address_line_1')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Address Line 2'
              value={this.state.address_line_2}
              onChange={this.handleChange('address_line_2')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='City'
              value={this.state.city}
              onChange={this.handleChange('city')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Zip Code'
              value={this.state.zip_code}
              onChange={this.handleChange('zip_code')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='State'
              value={this.state.state}
              onChange={this.handleChange('state')}
            >
            </TextField>
          </Paper>
          <Paper className="item">
            <h3>Demographics</h3>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Age'
              value={this.state.age}
              onChange={this.handleChange('age')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Gender'
              value={this.state.gender}
              onChange={this.handleChange('gender')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Level of Education'
              value={this.state.level_of_ed}
              onChange={this.handleChange('level_of_ed')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='LGBTQ Status'
              value={this.state.lgbtq_status}
              onChange={this.handleChange('lgbtq_status')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Race'
              value={this.state.race}
              onChange={this.handleChange('race')}
            >
            </TextField>
          </Paper>
          <Paper className="item">
            <h3>Income</h3>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Adjusted Gross Income'
              value={this.state.adjusted_gross_income}
              onChange={this.handleChange('adjusted_gross_income')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Filing Status'
              value={this.state.filing_status}
              onChange={this.handleChange('filing_status')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Government. Assistance'
              value={this.state.government_assistance}
              onChange={this.handleChange('government_assistance')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Government Assistance Notes'
              value={this.state.government_assistance_notes}
              onChange={this.handleChange('government_assistance_notes')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Income During Prime'
              value={this.state.income_during_prime}
              onChange={this.handleChange('income_during_prime')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Need Tuition'
              value={this.state.need_tuition}
              onChange={this.handleChange('need_tuition')}
            >
            </TextField>
          </Paper>
          <Paper className="item">
            <h3>Expenses</h3>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Applied For MSP'
              value={this.state.applied_for_msp}
              onChange={this.handleChange('applied_for_msp')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Childcare'
              value={this.state.childcare}
              onChange={this.handleChange('childcare')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Dependents'
              value={this.state.dependents}
              onChange={this.handleChange('dependents')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Healthcare'
              value={this.state.healthcare}
              onChange={this.handleChange('healthcare')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Housing'
              value={this.state.housing}
              onChange={this.handleChange('housing')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='MSP Tech Scholar'
              value={this.state.msp_tech_scholar}
              onChange={this.handleChange('msp_tech_scholar')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Other Expenses'
              value={this.state.other_expenses}
              onChange={this.handleChange('other_expenses')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Other Expenses Notes'
              value={this.state.other_expenses_notes}
              onChange={this.handleChange('other_expenses_notes')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Transportation'
              value={this.state.transportation}
              onChange={this.handleChange('transportation')}
            >
            </TextField>
          </Paper>
        </div>

        <div className="grid-bottom">
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
        </div>
      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);
