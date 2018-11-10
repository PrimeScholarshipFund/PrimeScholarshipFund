import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import { editApplication } from '../../redux/actions/applicantActions';

//access to redux store
const mapStateToProps = state => ({
  applicant: state.applicant,
});

class Income extends Component {

  handleChange = (key) => event => {
    this.props.dispatch(editApplication({ key: key, value: event.target.value }))
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="top">
        <div className="wrapper">
          <h2>Income & Expenses</h2>
          <h3>Income</h3>
          <div className="grid-2">
            <p className="label">What is your adjusted gross income? This can be found on line 37 of your 1040.</p>
            <TextField
              value={this.props.applicant.adjusted_gross_income}
              placeholder="$"
              onChange={this.handleChange('adjusted_gross_income')}
            />
          </div>
          <div className="grid-2">
            <p className="label">What is your tax filing status?</p>
            <RadioGroup
              value={this.props.applicant.filing_status}
              onChange={this.handleChange('filing_status')}
            >
              <FormControlLabel value={'Single'} control={<Radio />} label="Single" />
              <FormControlLabel value={'Married filing jointly'} control={<Radio />} label="Married filing jointly" />
              <FormControlLabel value={'Married filing separately'} control={<Radio />} label="Married filing separately" />
              <FormControlLabel value={'Head of household'} control={<Radio />} label="Head of household" />
              <FormControlLabel value={'Qualifying widow(er) with dependent child'} control={<Radio />} label="Qualifying widow(er) with dependent child" />
              <FormControlLabel value={'NA'} control={<Radio />} label="Not Applicable" />
            </RadioGroup>
          </div>
          <div className="grid-2">
            <p className="label">How many dependents, if any, do you have?</p>
            <TextField
              value={this.props.applicant.dependents}
              onChange={this.handleChange('dependents')}
              type="number"
            />
          </div>
          <div className="grid-2">
            <p className="label">Do you receive government assistance?</p>
            <RadioGroup
              value={this.props.applicant.government_assistance}
              onChange={this.handleChange('government_assistance')}
            >
              <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
              <FormControlLabel value={'false'} control={<Radio />} label="No" />
            </RadioGroup>
          </div>
          {this.props.applicant.government_assistance === "true" ? (
            <div className="grid-2">
              <p className="label">Please specify government assistance details.</p>
              <TextField
                fullWidth
                value={this.props.applicant.government_assistance_notes}
                onChange={this.handleChange('government_assistance_notes')}
              />
            </div>
          ) : (
              null
            )}
          <div className="grid-2">
            <p className="label">Do you plan to continue being employed while in class?</p>
            <RadioGroup
              value={this.props.applicant.employed_during_prime}
              onChange={this.handleChange('employed_during_prime')}
            >
              <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
              <FormControlLabel value={'false'} control={<Radio />} label="No" />
            </RadioGroup>
          </div>
          {this.props.applicant.employed_during_prime === "true" ? (
            <div>
              <p>If your program does not recommend students stay employed during the program, we also recommend you don't. If we are able to fund your living expenses, we want to work with you to make sure you are able to devote at much time as possible to learning.</p>
              <div className="grid-2">
                <p className="label">How much do you estimate you will make per month?</p>
                <TextField
                  value={this.props.applicant.income_during_prime}
                  onChange={this.handleChange('income_during_prime')}
                />
              </div>
            </div>
          ) : (
              null
            )}
          <div className="grid-2">
            <p className="label">Do you need tuition assistance? If your tuition will be supplied through MSP TechHire/JFCS, select no.</p>
            <RadioGroup
              value={this.props.applicant.need_tuition}
              onChange={this.handleChange('need_tuition')}
            >
              <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
              <FormControlLabel value={'false'} control={<Radio />} label="No" />
            </RadioGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Income);
