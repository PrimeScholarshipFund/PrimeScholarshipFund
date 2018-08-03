import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

class Review extends Component {
    state = {
      Fax: '',
      doughnuts: '',
      dinosaurs: '',
      hamster: '',
     }

  handleChange = name => event => {
    console.log(this.state.Fax);
    this.setState({
      [name]: event.target.value
    });
  };

    render() {
      return (
        <div>
        <Paper className="grid-3">
        <div className="top">
        <h1>Review</h1>
        <h3>Personal Information</h3>
        <ul className="sub">
            <li>Add questions and current inputs</li>
        </ul>

        <h3>Income & Expenses</h3>
        <ul className="sub">
            <li>Add questions and current inputs</li>
        </ul>
        
        </div>
        </Paper>
      </div>
      );
    }
}

export default Review;
