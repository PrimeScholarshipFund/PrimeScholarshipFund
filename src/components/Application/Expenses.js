import React, { Component } from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { editApplication } from '../../redux/actions/applicantActions';

//function to convert numbers to money format
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

//require number format
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

//access to redux store
const mapStateToProps = state => ({
  applicant: state.applicant,
});

class IncomeExpenses extends Component {

  handleChange = (key) => event => {
    this.props.dispatch(editApplication({key: key, value: event.target.value}))
  };

    render() {
      const { classes } = this.props;

      return (
          <div className="top">
              <div className="wrapper">
                <h2>Income & Expenses</h2>
                <h3>Expenses Per Month</h3>
                <div className="grid-2">
                  <p className="label">Rent/Mortgage</p>
                  <TextField
                    value={this.props.applicant.housing}
                    placeholder="$"
                    onChange={this.handleChange('housing')}
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                </div>
                <div className="grid-2">
                  <p className="label">Transportation, including vehicle or transit expenses</p>
                  <TextField
                    value={this.props.applicant.transportation}
                    placeholder="$"
                    onChange={this.handleChange('transportation')}
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                </div>
                <div className="grid-2">
                  <p className="label">Childcare Expenses</p>
                  <TextField
                    value={this.props.applicant.childcare}
                    placeholder="$"
                    onChange={this.handleChange('childcare')}
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                </div>
                <div className="grid-2">
                  <p className="label">Healthcare Expenses</p>
                  <TextField
                    value={this.props.applicant.healthcare}
                    placeholder="$"
                    onChange={this.handleChange('healthcare')}
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                </div>
                <div className="grid-2">
                  <div>
                    <p className="label">Other Expenses</p>
                    <p>Please specify major monthly expenses (don’t feel the need to list absolutely everything)</p>
                  </div>
                  <TextField
                    id="multiline-flexible"
                    multiline
                    rowsMax="20"
                    value={this.props.applicant.other_expenses_notes}
                    onChange={this.handleChange('other_expenses_notes')}
                    fullWidth
                    margin="normal"
                  />
                </div>
            </div>
          </div>
      );
    }
}

IncomeExpenses.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(IncomeExpenses);
