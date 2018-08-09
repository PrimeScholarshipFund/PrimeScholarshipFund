import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  secondary: {
    position: 'fixed',
    right: 400,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

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

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  applicant: state.applicant,
});

class IncomeExpenses extends Component {
    state = {
      adjustedGrossIncome: '',
      taxFilingStatus: '',
      dependents: '',
      governmentAssistance: null,
      governmentAssistanceText: '',
      employed: null,
      employedText: '',
      rent: '',
      transportation: '',
      childCare: '',
      healthCare: '',
      otherExpenses: '',
     }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  componentDidUpdate() {

  }

  componentDidMount() {
    console.log(this.props.applicant);
  }

    render() {
      const { classes } = this.props;

      return (
          <div>
              <Typography variant="title" className={classes.title}>
                Income & Expenses
              </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="What is your adjusted gross income?"
                      secondary={
                        <TextField
                          className={classes.formControl}
                          value={this.state.adjustedGrossIncome}
                          placeholder="$"
                          onChange={this.handleChange('adjustedGrossIncome')}
                          id="formatted-numberformat-input"
                          InputProps={{
                            inputComponent: NumberFormatCustom,
                          }}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="What is your tax filing status?"
                      secondary={
                        <TextField
                          className={classes.formControl}
                          value={this.state.taxFilingStatus}
                          placeholder="$"
                          onChange={this.handleChange('taxFilingStatus')}
                          id="formatted-numberformat-input"
                          InputProps={{
                            inputComponent: NumberFormatCustom,
                          }}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="How many dependents, if any, do you have?* (number, DNWTS)"
                      secondary={
                        <TextField
                          className={classes.formControl}
                          value={this.state.dependents}
                          onChange={this.handleChange('dependents')}
                          type="number"
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Are you getting government assistance?"
                      secondary={
                          <div>
                            <RadioGroup
                              value={this.state.governmentAssistance}
                              onChange={this.handleChange('governmentAssistance')}
                            >
                              <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
                              <FormControlLabel value={'false'} control={<Radio />} label="No" />
                            </RadioGroup>
                            {JSON.parse(this.state.governmentAssistance) ? (
                              <TextField
                                fullWidth
                                placeholder="If so, please specify."
                                className={classes.formControl}
                                value={this.state.governmentAssistanceText}
                                onChange={this.handleChange('governmentAssistanceText')}
                              />
                            ) : (
                              null
                            )}
                          </div>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Do you plan to continue being employed while in Prime?"
                      secondary={
                          <div>
                            <RadioGroup
                              value={this.state.employed}
                              onChange={this.handleChange('employed')}
                            >
                              <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
                              <FormControlLabel value={'false'} control={<Radio />} label="No" />
                            </RadioGroup>
                            {JSON.parse(this.state.employed) ? (
                              <TextField
                                fullWidth
                                placeholder="If so, how much do you estimate you will make per month?"
                                className={classes.formControl}
                                value={this.state.employedText}
                                onChange={this.handleChange('employedText')}
                              />
                            ) : (
                              null
                            )}
                          </div>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Do you need tuition assistance? If your tuition will be supplied through MSP TechHire/JFCS, select no."
                      secondary={
                          <div>
                            <RadioGroup
                              value={this.state.tuitionAssistance}
                              onChange={this.handleChange('tuitionAssistance')}
                            >
                              <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
                              <FormControlLabel value={'false'} control={<Radio />} label="No" />
                            </RadioGroup>
                          </div>
                      }
                    />
                  </ListItem>
                  <Typography variant="title" className={classes.title}>
                    Expenses Per Month
                  </Typography>
                  <ListItem>
                    <ListItemText
                      primary="Rent/Mortgage"
                      secondary={
                        <TextField
                          className={classes.formControl}
                          value={this.state.rent}
                          placeholder="$"
                          onChange={this.handleChange('rent')}
                          id="formatted-numberformat-input"
                          InputProps={{
                            inputComponent: NumberFormatCustom,
                          }}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Transportation, including vehicle or transit expenses"
                      secondary={
                        <TextField
                          className={classes.formControl}
                          value={this.state.transportation}
                          placeholder="$"
                          onChange={this.handleChange('transportation')}
                          id="formatted-numberformat-input"
                          InputProps={{
                            inputComponent: NumberFormatCustom,
                          }}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Childcare Expenses"
                      secondary={
                        <TextField
                          className={classes.formControl}
                          value={this.state.childCare}
                          placeholder="$"
                          onChange={this.handleChange('childCare')}
                          id="formatted-numberformat-input"
                          InputProps={{
                            inputComponent: NumberFormatCustom,
                          }}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Healthcare Expenses"
                      secondary={
                        <TextField
                          className={classes.formControl}
                          value={this.state.healthCare}
                          placeholder="$"
                          onChange={this.handleChange('healthCare')}
                          id="formatted-numberformat-input"
                          InputProps={{
                            inputComponent: NumberFormatCustom,
                          }}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Other Expenses"
                      secondary={
                        <TextField
                          id="multiline-flexible"
                          label="Please specify major monthly expenses (don’t feel the need to list absolutely everything)"
                          multiline
                          rowsMax="20"
                          value={this.state.otherExpenses}
                          onChange={this.handleChange('otherExpenses')}
                          fullWidth
                          margin="normal"
                        />
                      }
                    />
                  </ListItem>
                </List>
          </div>
      );
    }
}

IncomeExpenses.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IncomeExpenses);
