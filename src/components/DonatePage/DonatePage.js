import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Checkout from '../Checkout/Checkout';
import SimpleTabs from '../SimpleTabs/SimpleTabs';




class DonatePage extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      org: '',
      address: '',
      amount: null,
    }
  }

  handleChange = (key) => (event) =>
    this.setState({...this.state, [key]: event.target.value});




  render() {
    return (
      <div>
        <div>
          <SimpleTabs />
        </div>
        <div className="grid-3">
          <Paper className="top">
          <h1>Donate</h1>
          <div className="fakePic">

          </div>

          <div className="grid-2">
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

            {/* grid area 2 */}
            <div className="fakePic"></div>

            {/* grid area 3 */}
            {/* <Elements>
              <DonateForm
                name={this.state.name}
                org={this.state.org}
                address={this.state.address}
                amount={this.state.amount}
                handleChange={this.handleChange}

              />
            </Elements> */}
            <Checkout
            />

          </div>
          </Paper>
        </div>
      </div>

    );
  }
}

export default DonatePage;
