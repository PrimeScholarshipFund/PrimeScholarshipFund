import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

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

  handleChange = (key) => (event) => {
    this.setState({...this.state, [key]: event.target.value})
  }

  render() {
    return (
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
          <Paper className="item">
            <TextField
            id="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            />

            <br/>

            <TextField
            id="org"
            label="Organization"
            value={this.state.org}
            onChange={this.handleChange('org')}
            margin="normal"
            />
            <br/>

            <TextField
            id="address"
            label="Address"
            value={this.state.address}
            onChange={this.handleChange('address')}
            margin="normal"
            />
            <br/>

            <TextField
            id="amount"
            label="Amount"
            type="number"
            value={this.state.amount}
            onChange={this.handleChange('amount')}
            margin="normal"
            />
            <br/>

          </Paper>


        </div>

        </Paper>
      </div>
    );
  }
}

export default DonatePage;