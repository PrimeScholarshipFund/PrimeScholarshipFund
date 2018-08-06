import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Paper } from '../../../node_modules/@material-ui/core';

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
          gender: '',
          race: '',
          age: null,
          level_of_ed: '',
          lgbtq_status: ''
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
      contact: {...this.state.contact, [key]: event.target.value}
    });
  };

  handleContactBoolean = (key) => event => {
    
    let input = null;
    if(event.target.value == 1){
      input = true;
    } else {
      input = false;
    }

    this.setState({
      ...this.state,
      contact: {...this.state.contact, [key]: input}
    });

  }

    render() {

      let conditionalPrime = null;
      if(this.state.contact.accepted_at_prime === false){
        conditionalPrime = (
          <div className="sub">
             <p>If not, have you applied?</p>
            <form onChange={this.handleContactBoolean('applied_at_prime')} className="sub appForm">
              <div className="radios">
                <input type="radio" name="applied" value={1} />Yes<br/>
              </div>
              <div className="radios">
                <input type="radio" name="applied" value={0}/> No<br/>
              </div>
            </form>
          </div>
        );
      } else {
        conditionalPrime = null;
      }

      let conditionalMSP = null;
      if(this.state.contact.msp_tech_scholar === false){
        conditionalMSP = (
          <div className="sub">
             <p>If not, have you applied?</p>
            <form onChange={this.handleContactBoolean('applied_for_msp')} className="sub appForm">
              <div className="radios">
                <input type="radio" name="applied" value={1} />Yes<br/>
              </div>
              <div className="radios">
                <input type="radio" name="applied" value={0}/> No<br/>
              </div>
            </form>
          </div>
        );
      } else {
        conditionalMSP = null;
      }

      let demoBox = null;
      if(this.state.demographics.gender != "Male" || this.state.demographics.gender != "Female" || this.state.demographics.gender != "do not wish to specify"){
        demoBox = (
          <div className="sub">
            <input type="text" value={this.state.demographics.gender}/>
          </div>
        );
      } else {
        demoBox = null;
      }

      return (
        <div>
          
        
        <div className="top">
        <h2>Personal Information</h2>
        {JSON.stringify(this.state)}
        <h3>Contact Information</h3>
        <TextField
            label="First Name*"
            value={this.state.contact.first_name}
            onChange={this.handleChangeContact('first_name')}
          />
          <TextField
            label="Middle Initial"
            value={this.state.contact.middle_initial}
            onChange={this.handleChangeContact('middle_initial')}
            maxlength="5"
          />
          <TextField
            label="Last Name"
            value={this.state.contact.last_name}
            onChange={this.handleChangeContact('last_name')}
          />
          <TextField
            label="Address Line 1"
            value={this.state.contact.address_line_1}
            onChange={this.handleChangeContact('address_line_1')}
          />
          <TextField
            label="Address Line 2"
            value={this.state.contact.address_line_2}
            onChange={this.handleChangeContact('address_line_2')}
          />
          <TextField
            label="City"
            value={this.state.contact.city}
            onChange={this.handleChangeContact('city')}
          />
          <TextField
            label="State"
            value={this.state.contact.state}
            onChange={this.handleChangeContact('state')}
          />
          <TextField
            label="Zip Code"
            value={this.state.contact.zip_code}
            onChange={this.handleChangeContact('zip_code')}
          />
          <TextField
            label="Phone Number"
            value={this.state.contact.phone_number}
            onChange={this.handleChangeContact('phone_number')}
          />
          <TextField
            label="Email"
            value={this.state.contact.email}
            onChange={this.handleChangeContact('email')}
          />

          <Paper className="appContainer">
          <p>Have you been accepted to Prime Digital Academy?</p>
          {/* Prime */}
          
            <form onChange={this.handleContactBoolean('accepted_at_prime')} className="sub appForm">
              <div className="radios">
                <input type="radio" name="accepted" value={1} />Yes<br/>
              </div>
              <div className="radios">
                <input type="radio" name="accepted" value={0}/> No<br/>
              </div>
            </form>
            {conditionalPrime}
          </Paper>

          {/* MSP Tech */}
          <Paper className="appContainer">
            <p>Have you received the MSP TechHire/JFCS scholarship?</p>
            <form onChange={this.handleContactBoolean('msp_tech_scholar')} className="sub appForm">
              <div className="radios">
                <input type="radio" name="tech-scholar" value={1} />Yes<br/>
              </div>
              <div className="radios">
                <input type="radio" name="tech-scholar" value={0}/> No<br/>
              </div>
            </form>
            {conditionalMSP}
          </Paper>

          {/* componantize question fields by section */}
          <h3>Demographic Information</h3>
          <p>This scholarship is designated for people of color. We ask other demographic information for reporting purposes, but do not require you to respond.</p>

          <p>Gender</p>
          <form onChange={this.handleChangeDemo('gender')} className="sub appForm">
              <div className="radios">
                <input type="radio" name="gender" value="Male" />Male<br/>
              </div>
              <div className="radios">
                <input type="radio" name="gender" value="Female"/>Female<br/>
              </div>
              <div className="radios">
                <input type="radio" name="gender" value="Other"/>Other {demoBox}<br/>
              </div>
              <div className="radios">
                <input type="radio" name="gender" value="do not wish to specify"/>do not wish to specify<br/>
              </div>
            </form>

        </div>
      </div>
      );
    }
}

export default PersonalInfo;
