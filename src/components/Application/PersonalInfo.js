import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import { editApplication } from '../../redux/actions/applicantActions';





const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  secondary: {
    position: 'fixed',
    right: 400,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

const mapStateToProps = state => ({
  applicant: state.applicant,
});

class PersonalInfo extends Component {
  state = {

    raceBuilder:
    {
      AmInAlNat: false,
      asian: false,
      AfricanAm: false,
      hispLat: false,
      midEastNorthAf: false,
      white: false,
      DNWTS: false
    }
  }

  handleChange = (key) => event => {
    this.props.dispatch(editApplication({ key: key, value: event.target.value }))
  }

  handleChangeRace = (key) => event => {
    this.changeRaceState(key);
    const promise = new Promise(function (resolve) {
      resolve(1);
    }
    ).then(this.raceString);
  }

  changeRaceState = (key) => {
    this.setState({
      ...this.state,
      raceBuilder: { ...this.state.raceBuilder, [key]: !this.state.raceBuilder[key] }
    });
  }

  raceString = () => {
    let product = '';
    let race = this.state.raceBuilder;

    if (race.AmInAlNat) {
      product += 'American Indian or Alaskan Native -'
    }
    if (race.asian) {
      product += 'Asian -'
    }
    if (race.AfricanAm) {
      product += 'Black or African American -'
    }
    if (race.hispLat) {
      product += 'Hispanic or Latino -'
    }
    if (race.midEastNorthAf) {
      product += 'Middle Eastern or North African -'
    }
    if (race.white) {
      product += 'White -'
    }

    if (race.DNWTS) {
      product += 'DNWTS -'
    }
    this.props.dispatch(editApplication({ key: 'race', value: product }))

  }

  render() {


    return (
      <div>
        <div className="top">
          <div className="wrapper">
            <h2>Personal Information</h2>
            <h3>Contact Information</h3>
            <div className="grid-2">
              <p className="label">First Name</p>
              <TextField
                value={this.props.applicant.first_name}
                placeholder=""
                onChange={this.handleChange('first_name')}
              />
            </div>
            <div className="grid-2">
              <p className="label">Last Name</p>
              <TextField
                value={this.props.applicant.last_name}
                placeholder=""
                onChange={this.handleChange('last_name')}
              />
            </div>
            <div className="grid-2">
              <p className="label">Middle Initial (optional)</p>
              <TextField
                inputProps={{ maxLength: 1 }}
                value={this.props.applicant.middle_initial}
                placeholder=""
                onChange={this.handleChange('middle_initial')}
              />
            </div>
            <div className="grid-2">
              <p className="label">Address Line 1</p>
              <TextField
                value={this.props.applicant.address_line_1}
                placeholder=""
                onChange={this.handleChange('address_line_1')}
              />
            </div>
            <div className="grid-2">
              <p className="label">Address Line 2 (optional)</p>
              <TextField
                value={this.props.applicant.address_line_2}
                placeholder=""
                onChange={this.handleChange('address_line_2')}
              />
            </div>
            <div className="grid-2">
              <p className="label">City</p>
              <TextField
                value={this.props.applicant.city}
                placeholder=""
                onChange={this.handleChange('city')}
              />
            </div>
            <div className="grid-2">
              <p className="label">State</p>
              <TextField
                value={this.props.applicant.state}
                placeholder=""
                onChange={this.handleChange('state')}
              />
            </div>
            <div className="grid-2">
              <p className="label">Zip Code</p>
              <TextField
                inputProps={{ maxLength: 5 }}
                value={this.props.applicant.zip_code}
                placeholder=""
                onChange={this.handleChange('zip_code')}
              />
            </div>
            <div className="grid-2">
              <p className="label">Phone Number</p>
              <TextField
                value={this.props.applicant.phone_number}
                placeholder=""
                onChange={this.handleChange('phone_number')}
              />
            </div>
            <div className="grid-2">
              <p className="label">Email</p>
              <TextField
                value={this.props.applicant.email}
                placeholder=""
                onChange={this.handleChange('email')}
              />
            </div>
            <div className="grid-2">
              <p className="label">Have you been accepted to Prime Digital Academy?</p>
              <RadioGroup
                value={this.props.applicant.accepted_at_prime}
                onChange={this.handleChange('accepted_at_prime')}
              >
                <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
                <FormControlLabel value={'false'} control={<Radio />} label="No" />
              </RadioGroup>
            </div>
            {this.props.applicant.accepted_at_prime === "false" ? (
              <div className="grid-2">
                <p className="label">Have you applied to Prime Digital Academy?</p>
                <RadioGroup
                  value={this.props.applicant.applied_at_prime}
                  onChange={this.handleChange('applied_at_prime')}
                >
                  <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
                  <FormControlLabel value={'false'} control={<Radio />} label="No" />
                </RadioGroup>
              </div>
            ) : (
                null
              )}
            <div className="grid-2">
              <p className="label">Have you received the MSP TechHire/JFCS scholarship?</p>
              <RadioGroup
                value={this.props.applicant.msp_tech_scholar}
                onChange={this.handleChange('msp_tech_scholar')}
              >
                <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
                <FormControlLabel value={'false'} control={<Radio />} label="No" />
              </RadioGroup>
            </div>
            {this.props.applicant.msp_tech_scholar === "false" ? (
              <div className="grid-2">
                <p className="label">Have you applied for the MSP TechHire/JFCS scholarship?</p>
                <RadioGroup
                  value={this.props.applicant.applied_for_msp}
                  onChange={this.handleChange('applied_for_msp')}
                >
                  <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
                  <FormControlLabel value={'false'} control={<Radio />} label="No" />
                </RadioGroup>
              </div>
            ) : (
                null
              )}
          </div>
        </div>
      </div>
    );
  }
}

PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), connect(mapStateToProps))(PersonalInfo);
