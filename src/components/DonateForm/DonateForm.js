import React, { Component } from 'react';
import { Paper, TextField, Button } from '../../../node_modules/@material-ui/core';
import {injectStripe} from 'react-stripe-elements';

class DonateForm extends Component {
    state = {  }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        this.props.stripe.createSource(
            {type: 'card',
             name: this.props.name,
            })
            .then(({token}) => {
            console.log('Received Stripe token:', token);
        });
        
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

                    {/* <br/>

                    <TextField
                    id="org"
                    label="Organization"
                    value={this.props.org}
                    onChange={this.props.handleChange('org')}
                    margin="normal"
                    />
                    <br/>

                    <TextField
                    id="address"
                    label="Address"
                    value={this.props.address}
                    onChange={this.props.handleChange('address')}
                    margin="normal"
                    />
                    <br/>

                    <TextField
                    id="amount"
                    label="Amount"
                    type="number"
                    value={this.props.amount}
                    onChange={this.props.handleChange('amount')}
                    margin="normal"
                    /> */}
                    <br/>
                    <Button onClick={this.handleSubmit}> Submit Donation </Button>
                    </form>
                </Paper> 
            </div>
         );
    }
}
 
export default injectStripe(DonateForm);