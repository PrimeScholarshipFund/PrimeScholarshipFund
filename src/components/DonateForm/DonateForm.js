import React, { Component } from 'react';
import { Paper, TextField, Button, Select, MenuItem, InputLabel } from '../../../node_modules/@material-ui/core';
import {injectStripe} from 'react-stripe-elements';
import Checkout from '../Checkout/Checkout';
import CardSection from './CardSection';
import './DonateForm.css'
import Axios from '../../../node_modules/axios';
import config from '../../config/config';

class InjectedDonateForm extends Component {
    state = { 
        statesArray: ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

     }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
      // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({
        name: this.props.name,
        address_line1: this.props.address_line1,
        address_line2: this.props.address_line2,
        address_state: this.props.address_state,
        address_city: this.props.address_city,
        address_zip: this.props.address_zip,
        address_country: 'US',
        currency: 'USD',
        })
        .then(({token}) => {
        console.log('Received Stripe token:', token);
        Axios.post(config.PAYMENT_SERVER_URL, 
            {
                
                source: token.id,
                currency: token.card.currency,
                amount: 100000,
            }
        )
        .then(response => console.log(response))
        .catch(error => console.log(error))
      });
  
      // However, this line of code will do the same thing:
      //
      // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  
      // You can also use createSource to create Sources. See our Sources
      // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
      //
      // this.props.stripe.createSource({type: 'card', name: 'Jenny Rosen'});
        
    }


    render() { 
        return ( 
            <div>
                <Paper>
                    <form onSubmit = {this.handleSubmit}>
                    <TextField
                    id="name"
                    label="Name"
                    value={this.props.name}
                    onChange={this.props.handleChange('name')}
                    margin="normal"
                    />

                    <br/>

                    <TextField
                    id="org"
                    label="Organization"
                    value={this.props.org}
                    onChange={this.props.handleChange('org')}
                    margin="normal"
                    />
                    <br/>

                    <TextField
                    id="address_line1"
                    label="Address Line 1"
                    value={this.props.address_line1}
                    onChange={this.props.handleChange('address_line1')}
                    margin="normal"
                    />
                    <br />
                    <TextField
                    id="address_line2"
                    label="Address Line 2"
                    value={this.props.address_line2}
                    onChange={this.props.handleChange('address_line2')}
                    margin="normal"
                    />
                    <br />
                    <TextField
                    id="postal_code"
                    label="Postal Code"
                    value={this.props.address_zip}
                    onChange={this.props.handleChange('address_zip')}
                    margin="normal"
                    />
                    <TextField
                    id="address_city"
                    label="City"
                    value={this.props.address_city}
                    onChange={this.props.handleChange('address_city')}
                    margin="normal"
                    />
                    <br />
                    <InputLabel htmlFor="selectUsStte">
                    Select State:
                    </InputLabel>
                    <br />
                    <Select
                    id="selectUsState"
                    label="Select State"
                    value={this.props.address_state}
                    onChange={this.props.handleChange('address_state')}
                    margin="normal"
                    >
                        {this.state.statesArray.map((USState) => 
                            <MenuItem
                                key={USState}
                                value={USState}

                            >
                                {USState}
                            </MenuItem>
                        )}
                    </Select>


                    <br />
                    {/* <TextField
                    id="amount"
                    label="Amount"
                    type="number"
                    value={this.props.amount}
                    onChange={this.props.handleChange('amount')}
                    margin="normal"
                    /> */}
                    <br />
                    <CardSection />
                    <br/>
                    <Button 
                    variant="contained"
                    color="secondary"
                    onClick={this.handleSubmit}> Submit Donation </Button>
                    </form>
                    </Paper> 
                    <Checkout />
            </div>
         );
    }
}
 
export default injectStripe(InjectedDonateForm);