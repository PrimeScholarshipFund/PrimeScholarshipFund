import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import RadioButtonsGroup from '../RadioButtonsGroup/RadioButtonsGroup';

class IncomeExpenses extends Component {
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
          <div className="top">
            <h3>Income & Expenses</h3>
            <RadioButtonsGroup />
          </div>
      </div>
      );
    }
}

export default IncomeExpenses;
