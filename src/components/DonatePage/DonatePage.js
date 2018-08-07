import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {Elements} from 'react-stripe-elements';
import InjectedDonateForm from '../DonateForm/DonateForm';
import Checkout from '../Checkout/Checkout';
import SimpleTabs from '../SimpleTabs/SimpleTabs';

import TopImage from '../TopImage/TopImage';
import TopPhoto from '../../photos/scholarshipFund4.jpeg';





class DonatePage extends Component {

  constructor(props){
    super(props);

    this.state = {
      address_city: '',
      address_country: '',
      address_line1: '',
      address_line1_check: '',
      address_line2: '',
      address_state: null,
      address_zip: '',
      address_zip_check: '',
      country: '',
      exp_month: '',
      exp_year: '',
      id: '',
      last4: '',
    }
  }

  handleChange = (key) => (event) =>
    this.setState({...this.state, [key]: event.target.value});




  render() {
    return (
      <div>
        <div>
          <SimpleTabs
            value = {3}
          />
        </div>
        <TopImage image={TopPhoto}/>
        <div className="wrapper">

          <div className="fill">
          <h1>Donate</h1>
       


          <div className="item">
            {/* grid area 1 */}
            <div>
              <h3>Why is important to increase the participation of minorities in STEM?</h3>

              <div className="sub">
                <p>STEM careers provide upward mobility and greater job opportunities. Professionals in STEM
                careers earn significantly more than non-STEM counterparts. <b>Through those job
                opportunities, underrepresented students can help shape the well-being of their
                communities.</b></p>

                <p>Making a contribution to the scholarship fund today, you are helping underrepresented students
                to cover tuition and supplemental living costs. You are helping them achieve academic success,
                resulting in positive changes in their lives and communities.</p>
              </div>
            </div>


          {/* grid area 3 */}
          <Elements>
          <InjectedDonateForm 
              name={this.state.name}
              org={this.state.org}
              address_line1={this.state.address_line1}
              address_line2={this.state.address_line2}
              address_city={this.state.address_city}
              address_state={this.state.address_state}
              address_zip={this.props.address_zip}
              amount={this.state.amount}
              handleChange={this.handleChange}
              setNewValue={this.setNewValue}

            /> 
            
          </Elements>
 
            {/* <Checkout
            /> */}


          </div>
          </div>
        </div>
      </div>

    );
  }
}

export default DonatePage;
