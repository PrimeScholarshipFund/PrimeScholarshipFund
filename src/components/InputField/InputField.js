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

  componentDidMount() {
    console.log(this.props.person);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <TextField
            select
            className={classNames(classes.margin, classes.textField)}
            value={this.props.status}
            onChange={this.props.handleChange('status')}
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
              value={this.props.person.phone_number}
              onChange={this.props.handleChange('phone_number')}
            >
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Email'
              value={this.props.person.email}
              onChange={this.props.handleChange('email')}
            >
            </TextField>
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Address Line 1'
              value={this.props.person.address_line_1}
              onChange={this.props.handleChange('address_line_1')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Address Line 2'
              value={this.props.person.address_line_2}
              onChange={this.props.handleChange('address_line_2')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='City'
              value={this.props.person.city}
              onChange={this.props.handleChange('city')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Zip Code'
              value={this.props.person.zip_code}
              onChange={this.props.handleChange('zip_code')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='State'
              value={this.props.person.state}
              onChange={this.props.handleChange('state')}
            >
            </TextField>
          </Paper>
          <Paper className="item">
            <h3>Demographics</h3>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Age'
              value={this.props.person.age}
              onChange={this.props.handleChange('age')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Gender'
              value={this.props.person.gender}
              onChange={this.props.handleChange('gender')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Level of Education'
              value={this.props.person.level_of_ed}
              onChange={this.props.handleChange('level_of_ed')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='LGBTQ Status'
              value={this.props.person.lgbtq_status}
              onChange={this.props.handleChange('lgbtq_status')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Race'
              value={this.props.person.race}
              onChange={this.props.handleChange('race')}
            >
            </TextField>
          </Paper>
          <Paper className="item">
            <h3>Income</h3>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Adjusted Gross Income'
              value={this.props.person.adjusted_gross_income}
              onChange={this.props.handleChange('adjusted_gross_income')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Filing Status'
              value={this.props.person.filing_status}
              onChange={this.props.handleChange('filing_status')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Government. Assistance'
              value={this.props.person.government_assistance}
              onChange={this.props.handleChange('government_assistance')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Government Assistance Notes'
              value={this.props.person.government_assistance_notes}
              onChange={this.props.handleChange('government_assistance_notes')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Income During Prime'
              value={this.props.person.income_during_prime}
              onChange={this.props.handleChange('income_during_prime')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Need Tuition'
              value={this.props.person.need_tuition}
              onChange={this.props.handleChange('need_tuition')}
            >
            </TextField>
          </Paper>
          <Paper className="item">
            <h3>Expenses</h3>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Applied For MSP'
              value={this.props.person.applied_for_msp}
              onChange={this.props.handleChange('applied_for_msp')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Childcare'
              value={this.props.person.childcare}
              onChange={this.props.handleChange('childcare')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Dependents'
              value={this.props.person.dependents}
              onChange={this.props.handleChange('dependents')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Healthcare'
              value={this.props.person.healthcare}
              onChange={this.props.handleChange('healthcare')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Housing'
              value={this.props.person.housing}
              onChange={this.props.handleChange('housing')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='MSP Tech Scholar'
              value={this.props.person.msp_tech_scholar}
              onChange={this.props.handleChange('msp_tech_scholar')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Other Expenses'
              value={this.props.person.other_expenses}
              onChange={this.props.handleChange('other_expenses')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Other Expenses Notes'
              value={this.props.person.other_expenses_notes}
              onChange={this.props.handleChange('other_expenses_notes')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Transportation'
              value={this.props.person.transportation}
              onChange={this.props.handleChange('transportation')}
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
            value={this.props.comments}
            onChange={this.props.handleChange('comments')}
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
