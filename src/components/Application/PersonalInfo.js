import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

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
          accepted_at_prime: '',
          applied_at_prime: null,
          msp_tech_scholar: false,
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

    render() {
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
        </div>
      </div>
      );
    }
}

export default PersonalInfo;
