import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Demographics extends Component {
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
          <TextField
            label="Fax"
            value={this.state.Fax}
            onChange={this.handleChange('Fax')}
          />
          <TextField
            label="How much do you like doughnuts?"
            value={this.state.doughnuts}
          />
          <TextField
            label="How important are dinosaurs to your personal life?"
            value={this.state.dinosaurs}
          />
          <TextField
            label="When murdering ewoks, how often do you think about your pet hamster?"
            value={this.state.hamster}
          />
        </div>
      );
    }
}

export default Demographics;
