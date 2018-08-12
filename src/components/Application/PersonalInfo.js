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
    this.props.dispatch(editApplication({key: key, value: event.target.value}))
  }

  handleChangeRace =(key) => event => {
    this.changeRaceState(key);
    const promise = new Promise(function(resolve){
      resolve(1);
    }
    ).then(this.raceString);
  }

  changeRaceState = (key) => {
    this.setState({
      ...this.state,
      raceBuilder: {...this.state.raceBuilder, [key]: !this.state.raceBuilder[key]}
    });
  }

  raceString = () => {
    let product = '';
    let race = this.state.raceBuilder;

    if(race.AmInAlNat){
      product += 'American Indian or Alaskan Native -'
    }
    if(race.asian){
      product += 'Asian -'
    }
    if(race.AfricanAm){
      product += 'Black or African American -'
    }
    if(race.hispLat){
      product += 'Hispanic or Latino -'
    }
    if(race.midEastNorthAf){
      product += 'Middle Eastern or North African -'
    }
    if(race.white){
      product += 'White -'
    }

    if(race.DNWTS){
      product += 'DNWTS -'
    }
    console.log(product);

    this.props.dispatch(editApplication({key: 'race', value: product}))

  }

    render() {


      return (
        <div>


        <div className="top">
        <h2>Personal Information</h2>
        {JSON.stringify(this.state)}
        <h3>Contact Information</h3>

        <List>
                  <ListItem>
                    <ListItemText
                      primary="First Name"
                      secondary={
                        <TextField

                          value={this.props.applicant.first_name}
                          placeholder="required"
                          onChange={this.handleChange('first_name')}

                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="Last Name"
                      secondary={
                        <TextField

                          value={this.props.applicant.last_name}
                          placeholder="required"
                          onChange={this.handleChange('last_name')}

                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="Middle Initial"
                      secondary={
                        <TextField
                          value={this.props.applicant.middle_initial}
                          placeholder=""
                          onChange={this.handleChange('middle_initial')}
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="Address:"
                      secondary={
                        <TextField
                          value={this.props.applicant.address_line_1}
                          placeholder="Line 1"
                          onChange={this.handleChange('address_line_1')}
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      secondary={
                        <TextField
                          value={this.props.applicant.address_line_2}
                          placeholder="Line 2"
                          onChange={this.handleChange('address_line_2')}
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="City"
                      secondary={
                        <TextField
                          value={this.props.applicant.city}
                          placeholder="City"
                          onChange={this.handleChange('city')}
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="State"
                      secondary={
                        <TextField
                          value={this.props.applicant.state}
                          placeholder="State"
                          onChange={this.handleChange('state')}
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="Zip Code"
                      secondary={
                        <TextField
                          value={this.props.applicant.zip_code}
                          placeholder="Zip Code"
                          onChange={this.handleChange('zip_code')}
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="Phone Number"
                      secondary={
                        <TextField
                          value={this.props.applicant.phone_number}
                          placeholder="Phone Number"
                          onChange={this.handleChange('phone_number')}
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="Email"
                      secondary={
                        <TextField
                          value={this.props.applicant.email}
                          placeholder="Email"
                          onChange={this.handleChange('email')}
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="Have you been accepted to Prime Digital Academy?"
                      secondary={
                          <div>
                            <RadioGroup
                              value={this.props.applicant.accepted_at_prime}
                              onChange={this.handleChange('accepted_at_prime')}
                            >
                              <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
                              <FormControlLabel value={'false'} control={<Radio />} label="No" />
                            </RadioGroup>
                            {this.props.applicant.accepted_at_prime === "false" ? (
                             <div className="sub">
                              <p>If not, have you applied?</p>
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
                          </div>
                      }
                    />
                  </ListItem>

                  <ListItem>
                  <ListItemText
                      primary="Have you received the MSP TechHire/JFCS scholarship?"
                      secondary={
                          <div>
                            <RadioGroup
                              value={this.props.applicant.msp_tech_scholar}
                              onChange={this.handleChange('msp_tech_scholar')}
                            >
                              <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
                              <FormControlLabel value={'false'} control={<Radio />} label="No" />
                            </RadioGroup>
                            {this.props.applicant.msp_tech_scholar === "false" ? (
                             <div className="sub">
                              <p>If not, have you applied?</p>
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
                      }
                    />
                  </ListItem>
        </List>

          {/* componantize question fields by section */}
          <h3>Demographic Information</h3>
          <p>This scholarship is designated for people of color. We ask other demographic information for reporting purposes, but do not require you to respond.</p>
          <List>
              <ListItem>
                  <ListItemText
                      primary="Gender"
                      secondary={
                         <div className="sub">
                            <RadioGroup
                              value={this.props.applicant.gender}
                              onChange={this.handleChange('gender')}
                            >
                              <FormControlLabel value={'Male'} control={<Radio />} label="Male" />
                              <FormControlLabel value={'Female'} control={<Radio />} label="Female" />
                              <FormControlLabel value={'Other'} control={<Radio />} label="Other" />
                              <FormControlLabel value={'DNWTS'} control={<Radio />} label="Do not wish to specify" />
                            </RadioGroup>
                            {this.props.applicant.gender == "Male" || this.props.applicant.gender == "Female" || this.props.applicant.gender == "DNWTS" ? (
                              null
                             ) : (
                              <div className="sub">
                                <TextField

                                placeholder="Specify"
                                onChange={this.handleChange('gender')}
                              />
                              </div>
                             )}
                          </div>
                      }
                    />
                </ListItem>

                <ListItem>
                  <ListItemText
                      primary="Race"
                      secondary={
                         <div className="sub">

                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={this.state.raceBuilder.AmInAlNat}
                                    onChange={this.handleChangeRace('AmInAlNat')}
                                    value="AmInAlNat" />
                                  }
                                  label="American Indian or Alaska Native"
                                />
                              </FormGroup>

                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={this.state.raceBuilder.asian}
                                    onChange={this.handleChangeRace('asian')}
                                    value="asian" />
                                  }
                                  label="Asian"
                                />
                              </FormGroup>

                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={this.state.raceBuilder.AfricanAm}
                                    onChange={this.handleChangeRace('AfricanAm')}
                                    value="AfricanAm" />
                                  }
                                  label="Black or African American"
                                />
                              </FormGroup>

                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={this.state.raceBuilder.hispLat}
                                    onChange={this.handleChangeRace('hispLat')}
                                    value="hispLat" />
                                  }
                                  label="Hispanic or Latino"
                                />
                              </FormGroup>

                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={this.state.raceBuilder.midEastNorthAf}
                                    onChange={this.handleChangeRace('midEastNorthAf')}
                                    value="midEastNorthAf" />
                                  }
                                  label="Middle Eastern or North African"
                                />
                              </FormGroup>

                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={this.state.raceBuilder.white}
                                    onChange={this.handleChangeRace('white')}
                                    value="white" />
                                  }
                                  label="White"
                                />
                              </FormGroup>

                              <FormGroup>
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
                      }
                    />
                </ListItem>

                <ListItem>
                  <ListItemText
                      primary="LGBTQ Status"
                      secondary={
                         <div className="sub">
                            <RadioGroup
                              value={this.props.applicant.lgbtq_status}
                              onChange={this.handleChange('lgbtq_status')}
                            >
                              <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
                              <FormControlLabel value={'No'} control={<Radio />} label="No" />
                              <FormControlLabel value={'DNWTS'} control={<Radio />} label="Do not wish to specify" />
                            </RadioGroup>
                          </div>
                      }
                    />
                </ListItem>

                <ListItem>
                  <ListItemText
                      primary="Age"
                      secondary={
                         <div className="sub">
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
                      }
                    />
                </ListItem>

                <ListItem>
                  <ListItemText
                      primary="Highest Level of Education"
                      secondary={
                         <div className="sub">
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
                      }
                    />
                </ListItem>
          </List>
        </div>
      </div>
      );
    }
}

PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles),connect(mapStateToProps),)(PersonalInfo);
