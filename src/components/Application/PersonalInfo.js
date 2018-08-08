import React, { Component } from 'react';
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

class PersonalInfo extends Component {
    state = {
      contact: 
        {
          id: '',
          form_id: '',
          first_name: '',
          last_name: '',
          middle_initial: '',
          address_line_1: '',
          address_line_2: '',
          city: '',
          state: '',
          zip_code: '',
          phone_number: '',
          email: '',
          accepted_at_prime: null,
          applied_at_prime: null,
          msp_tech_scholar: null,
          applied_for_msp: null
        },
      
      demographics:
        {
          id: '',
          form_id: '',
          gender: 'DNWTS',
          race: '',
          age: '',
          level_of_ed: '',
          lgbtq_status: ''
        },

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

  handleChangeContact = (key) => event => {
    this.setState({
      ...this.state,
      contact: {...this.state.contact, [key]: event.target.value}
    });
  };

  handleChangeDemo = (key) => event => {
    this.setState({
      ...this.state,
      demographics: {...this.state.demographics, [key]: event.target.value}
    });
  };

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
      product += 'American Indian or Alaskan Native '
    }
    if(race.asian){
      product += 'Asian '
    }
    if(race.AfricanAm){
      product += 'Black or African American '
    }
    if(race.hispLat){
      product += 'Hispanic or Latino '
    }
    if(race.midEastNorthAf){
      product += 'Middle Eastern or North African '
    }
    if(race.white){
      product += 'White '
    }

    if(race.DNWTS){
      product += 'DNWTS '
    }
    console.log(product);
    
    this.setState({
      ...this.state,
      demographics: {...this.state.demographics, race: product}
    });
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
                        
                          value={this.state.first_name}
                          placeholder="required"
                          onChange={this.handleChangeContact('first_name')}
                         
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="Last Name"
                      secondary={
                        <TextField
                        
                          value={this.state.last_name}
                          placeholder="required"
                          onChange={this.handleChangeContact('last_name')}
                         
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="Middle Initial"
                      secondary={
                        <TextField
                          value={this.state.middle_initial}
                          placeholder=""
                          onChange={this.handleChangeContact('middle_initial')}
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="Address:"
                      secondary={
                        <TextField
                          value={this.state.address_line_1}
                          placeholder="Line 1"
                          onChange={this.handleChangeContact('address_line_1')}
                        />
                      }
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemText
                      secondary={
                        <TextField
                          value={this.state.address_line_2}
                          placeholder="Line 2"
                          onChange={this.handleChangeContact('address_line_2')}
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="City"
                      secondary={
                        <TextField
                          value={this.state.city}
                          placeholder="City"
                          onChange={this.handleChangeContact('city')}
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="State"
                      secondary={
                        <TextField
                          value={this.state.state}
                          placeholder="State"
                          onChange={this.handleChangeContact('state')}
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="Zip Code"
                      secondary={
                        <TextField
                          value={this.state.zip_code}
                          placeholder="Zip Code"
                          onChange={this.handleChangeContact('zip_code')}
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="Phone Number"
                      secondary={
                        <TextField
                          value={this.state.phone_number}
                          placeholder="Phone Number"
                          onChange={this.handleChangeContact('phone_number')}
                        />
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="Email"
                      secondary={
                        <TextField
                          value={this.state.email}
                          placeholder="Email"
                          onChange={this.handleChangeContact('email')}
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
                              value={this.state.contact.accepted_at_prime}
                              onChange={this.handleChangeContact('accepted_at_prime')}
                            >
                              <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
                              <FormControlLabel value={'false'} control={<Radio />} label="No" />
                            </RadioGroup>
                            {JSON.parse(this.state.contact.accepted_at_prime) === false ? (
                             <div className="sub">
                              <p>If not, have you applied?</p>
                              <RadioGroup
                              value={this.state.contact.applied_at_prime}
                              onChange={this.handleChangeContact('applied_at_prime')}
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
                              value={this.state.contact.msp_tech_scholar}
                              onChange={this.handleChangeContact('msp_tech_scholar')}
                            >
                              <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
                              <FormControlLabel value={'false'} control={<Radio />} label="No" />
                            </RadioGroup>
                            {JSON.parse(this.state.contact.msp_tech_scholar) === false ? (
                             <div className="sub">
                              <p>If not, have you applied?</p>
                              <RadioGroup
                              value={this.state.contact.applied_for_msp}
                              onChange={this.handleChangeContact('applied_for_msp')}
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
                              value={this.state.demographics.gender}
                              onChange={this.handleChangeDemo('gender')}
                            >
                              <FormControlLabel value={'Male'} control={<Radio />} label="Male" />
                              <FormControlLabel value={'Female'} control={<Radio />} label="Female" />
                              <FormControlLabel value={'Other'} control={<Radio />} label="Other" />
                              <FormControlLabel value={'DNWTS'} control={<Radio />} label="Do not wish to specify" />
                            </RadioGroup>
                            {this.state.demographics.gender == "Male" || this.state.demographics.gender == "Female" || this.state.demographics.gender == "DNWTS" ? (
                              null
                             ) : (
                              <div className="sub">
                                <TextField
                            
                                placeholder="Specify"
                                onChange={this.handleChangeDemo('gender')}
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
                              value={this.state.demographics.lgbtq_status}
                              onChange={this.handleChangeDemo('lgbtq_status')}
                            >
                              <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
                              <FormControlLabel value={'No'} control={<Radio />} label="No" />
                              <FormControlLabel value={'DNWTS'} control={<Radio />} label="Do not wish to specify" />
                            </RadioGroup>
                            {this.state.demographics.gender == "Male" || this.state.demographics.gender == "Female" || this.state.demographics.gender == "DNWTS" ? (
                              null
                             ) : (
                              <div className="sub">
                                <TextField
                            
                                placeholder="Specify"
                                onChange={this.handleChangeDemo('gender')}
                              />
                              </div>
                             )}
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
                              value={this.state.demographics.age}
                              onChange={this.handleChangeDemo('age')}
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
                              value={this.state.demographics.level_of_ed}
                              onChange={this.handleChangeDemo('level_of_ed')}
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

export default withStyles(styles)(PersonalInfo);
