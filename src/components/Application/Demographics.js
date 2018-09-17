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
            <h3>Demographic Information</h3>
            <p>This scholarship is designated for people of color. We ask other demographic information for reporting purposes, but do not require you to respond.</p>
            <div className="grid-2">
              <p className="label">Gender</p>
              <RadioGroup
                value={this.props.applicant.gender}
                onChange={this.handleChange('gender')}
              >
                <FormControlLabel value={'Male'} control={<Radio />} label="Male" />
                <FormControlLabel value={'Female'} control={<Radio />} label="Female" />
                <FormControlLabel value={'Other'} control={<Radio />} label="Other" />
                <FormControlLabel value={'DNWTS'} control={<Radio />} label="Do not wish to specify" />
              </RadioGroup>
            </div>
            {this.props.applicant.gender === "Other" ? (
              <div className="grid-2">
                <p className="label">Specify Gender (optional)</p>
                <TextField
                  value={this.props.applicant.specify_gender}
                  placeholder=""
                  onChange={this.handleChange('specify_gender')}
                />
              </div>
            ) : (null)}
            <div className="grid-2">
              <p className="label">Race</p>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={this.state.raceBuilder.AmInAlNat}
                      onChange={this.handleChangeRace('AmInAlNat')}
                      value="AmInAlNat" />
                  }
                  label="American Indian or Alaska Native"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={this.state.raceBuilder.asian}
                      onChange={this.handleChangeRace('asian')}
                      value="asian" />
                  }
                  label="Asian"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={this.state.raceBuilder.AfricanAm}
                      onChange={this.handleChangeRace('AfricanAm')}
                      value="AfricanAm" />
                  }
                  label="Black or African American"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={this.state.raceBuilder.hispLat}
                      onChange={this.handleChangeRace('hispLat')}
                      value="hispLat" />
                  }
                  label="Hispanic or Latino"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={this.state.raceBuilder.midEastNorthAf}
                      onChange={this.handleChangeRace('midEastNorthAf')}
                      value="midEastNorthAf" />
                  }
                  label="Middle Eastern or North African"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={this.state.raceBuilder.white}
                      onChange={this.handleChangeRace('white')}
                      value="white" />
                  }
                  label="White"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={this.state.raceBuilder.DNWTS}
                      onChange={this.handleChangeRace('DNWTS')}
                      value="DNWTS" />
                  }
                  label="Do not wish to specify"
                />
              </FormGroup>
            </div>
            <div className="grid-2">
              <p className="label">LGBTQ Status</p>
              <RadioGroup
                value={this.props.applicant.lgbtq_status}
                onChange={this.handleChange('lgbtq_status')}
              >
                <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
                <FormControlLabel value={'No'} control={<Radio />} label="No" />
                <FormControlLabel value={'DNWTS'} control={<Radio />} label="Do not wish to specify" />
              </RadioGroup>
            </div>
            <div className="grid-2">
              <p className="label">Age</p>
              <RadioGroup
                value={this.props.applicant.age}
                onChange={this.handleChange('age')}
              >
                <FormControlLabel value={'< 20'} control={<Radio />} label="< 20" />
                <FormControlLabel value={'20-29'} control={<Radio />} label="20-29" />
                <FormControlLabel value={'30-39'} control={<Radio />} label="30-39" />
                <FormControlLabel value={'40-49'} control={<Radio />} label="40-49" />
                <FormControlLabel value={'50-59'} control={<Radio />} label="50-59" />
                <FormControlLabel value={'> 60'} control={<Radio />} label="> 60" />
                <FormControlLabel value={'DNWTS'} control={<Radio />} label="Do not wish to specify" />
              </RadioGroup>
            </div>
            <div className="grid-2">
              <p className="label">Highest Level of Education</p>
              <RadioGroup
                value={this.props.applicant.level_of_ed}
                onChange={this.handleChange('level_of_ed')}
              >
                <FormControlLabel value={'No High School'} control={<Radio />} label="No High School" />
                <FormControlLabel value={'High School'} control={<Radio />} label="High School" />
                <FormControlLabel value={'Some College'} control={<Radio />} label="Some College" />
                <FormControlLabel value={'Bachelors'} control={<Radio />} label="Bachelors" />
                <FormControlLabel value={'Post Graduate'} control={<Radio />} label="Post Graduate" />
                <FormControlLabel value={'DNWTS'} control={<Radio />} label="Do not wish to specify" />
              </RadioGroup>
            </div>
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
