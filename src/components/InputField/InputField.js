import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '../../../node_modules/@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './InputField.css'


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
    display: 'inline-flex',

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
  state = {
    editStatus: false,
  }  
  componentDidMount() {
    console.log(this.props.person);
  }
  editToggle = (event) => {
    this.setState({ 
      editStatus: !this.state.editStatus
    });

}

componentDidUpdate(prevProps, prevState) {
  console.log(this.state.editStatus);
  
}  
render() {
    const { classes } = this.props;

    return (
      <div className="wrapper">
        <div className = {this.state.editStatus ? ("") : ("inline")}>
          <h1>Status: {this.props.status}</h1> 
          
          {this.state.editStatus ? 

          (
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
                </TextField >
            <Button onClick={this.editToggle} >
            <CheckIcon />
            </Button>
          </div>) : (<div><br /><Button onClick={this.editToggle} ><EditIcon /> </Button></div>)}
        </div>
              <h1>Application:</h1>
        <div >
        </div>

        <div className="grid-2">
          <div >
            <h3>Contact</h3>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Phone Number'
              disabled={true}
              value={this.props.person.phone_number}
              onChange={this.props.handleChange('phone_number')}
            >
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Email'
              disabled={true}
              value={this.props.person.email}
              onChange={this.props.handleChange('email')}
            >
            </TextField>
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Address Line 1'
              disabled={true}
              value={this.props.person.address_line_1}
              onChange={this.props.handleChange('address_line_1')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Address Line 2'
              disabled={true}
              value={this.props.person.address_line_2}
              onChange={this.props.handleChange('address_line_2')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='City'
              disabled={true}
              value={this.props.person.city}
              onChange={this.props.handleChange('city')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Zip Code'
              disabled={true}
              value={this.props.person.zip_code}
              onChange={this.props.handleChange('zip_code')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='State'
              disabled={true}
              value={this.props.person.state}
              onChange={this.props.handleChange('state')}
            >
            </TextField>
          </div>
          <div >
            <h3>Demographics</h3>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Age'
              disabled={true}
              value={this.props.person.age}
              onChange={this.props.handleChange('age')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Gender'
              disabled={true}
              value={this.props.person.gender}
              onChange={this.props.handleChange('gender')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Level of Education'
              disabled={true}
              value={this.props.person.level_of_ed}
              onChange={this.props.handleChange('level_of_ed')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='LGBTQ'
              disabled={true}
              value={this.props.person.lgbtq_status}
              onChange={this.props.handleChange('lgbtq_status')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Race'
              disabled={true}
              value={this.props.person.race}
              onChange={this.props.handleChange('race')}
            >
            </TextField>
          </div>
          <div >
            <h3>Income</h3>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='AGI'
              disabled={true}
              value={this.props.person.adjusted_gross_income}
              onChange={this.props.handleChange('adjusted_gross_income')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Filing Status'
              disabled={true}
              value={this.props.person.filing_status}
              onChange={this.props.handleChange('filing_status')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Gov.Asst'
              disabled={true}
              value={this.props.person.government_assistance}
              onChange={this.props.handleChange('government_assistance')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Gov.Asst.Notes'
              disabled={true}
              value={this.props.person.government_assistance_notes}
              onChange={this.props.handleChange('government_assistance_notes')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Income'
              disabled={true}
              value={this.props.person.income_during_prime}
              onChange={this.props.handleChange('income_during_prime')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Need Tuition'
              disabled={true}
              value={this.props.person.need_tuition}
              onChange={this.props.handleChange('need_tuition')}
            >
            </TextField>
          </div>
          <div >
            <h3>Expenses</h3>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='MSP Apply'
              disabled={true}
              value={this.props.person.applied_for_msp}
              onChange={this.props.handleChange('applied_for_msp')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Childcare'
              disabled={true}
              value={this.props.person.childcare}
              onChange={this.props.handleChange('childcare')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Dependents'
              disabled={true}
              value={this.props.person.dependents}
              onChange={this.props.handleChange('dependents')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Healthcare'
              disabled={true}
              value={this.props.person.healthcare}
              onChange={this.props.handleChange('healthcare')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Housing'
              disabled={true}
              value={this.props.person.housing}
              onChange={this.props.handleChange('housing')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='MSP_Scholar'
              disabled={true}
              value={this.props.person.msp_tech_scholar}
              onChange={this.props.handleChange('msp_tech_scholar')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Other'
              disabled={true}
              value={this.props.person.other_expenses}
              onChange={this.props.handleChange('other_expenses')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Other Notes'
              disabled={true}
              value={this.props.person.other_expenses_notes}
              onChange={this.props.handleChange('other_expenses_notes')}
            >
            </TextField>
            <TextField
              className={classNames(classes.margin, classes.textField)}
              label='Transportation'
              disabled={true}
              value={this.props.person.transportation}
              onChange={this.props.handleChange('transportation')}
            >
            </TextField>
          </div>
        </div>

        <div>
          <TextField
            type="textbox"
            id="multiline-flexible"
            className="comments"
            label="Comments"
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