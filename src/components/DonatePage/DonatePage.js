import React, { Component } from 'react';
import Checkout from '../Checkout/Checkout';
import SimpleTabs from '../SimpleTabs/SimpleTabs';
import TopImage from '../TopImage/TopImage';
import TopPhoto from '../../photos/scholarshipFund5.jpeg';
import DonateRadioButtons from './DonateRadioButtons';





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
      value: '',
      otherAmount: '',
    }
  }

  //gets the cent value stripe needs and returns a dollar amount so 
  //it is easily human readable
  centToDollar = amount => parseFloat(amount, 10)*100

  handleChange = (key) => (event) => this.setState({...this.state, [key]: event.target.value});

  handleOther = event => this.setState({
    ...this.state, 
    otherAmount: event.target.value });

  handleRadioChange = event => this.setState({...this.state, value: event.target.value });



      


  render() {
    return (
      <div>
        <div className="simpleTabs">
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
              <h3>Why it is important to increase the participation of minorities in STEM?</h3>

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
            <div className="donationBox">
              <h3>Choose gift amount:</h3>
    
                <DonateRadioButtons 
                handleChange={this.handleRadioChange}
                value={this.state.value}
                handleOther = {this.handleOther}
                />
                <div className="donationButton">
                  <Checkout
                    amount={this.state.value === "other" ? this.state.otherAmount : this.state.value}
                    description={'Contribute to Prime Scholarship Fund'}
                    name={'PSF'}
                    value = {this.state.value}
                    otherAmount = {this.state.otherAmount}
                    />
                </div>
            </div>

 


          </div>
          </div>
        </div>
      </div>

    );
  }
}

export default DonatePage;
