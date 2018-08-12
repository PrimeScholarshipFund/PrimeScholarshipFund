import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';


const mapStateToProps = state => ({
  applicant: state.applicant,
});

class Review extends Component {

    render() {
      this.props.checkSubmit('reset');
      return (
        <div>
        <div className="top">
        <h1>Review</h1>
        <h3>Personal Information</h3>

         <List>
            <ListItem>
              <ListItemText
                primary="First Name"
                secondary={this.props.checkSubmit('first_name') ?  
                  <Typography>{this.props.applicant.first_name}</Typography> :
                  <p className="red">Required</p>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Last Name"
                secondary=
                      {this.props.checkSubmit('last_name') ?  
                      <Typography>{this.props.applicant.last_name}</Typography> :
                      <p className="red">Required</p>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Middle Initial"
                secondary={
                  <Typography>{this.props.applicant.middle_initial}</Typography>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Address:"
                secondary={
                  <div>
                    
                    {this.props.checkSubmit('address_line_1') ?  
                      <Typography>Line 1: {this.props.applicant.address_line_1}</Typography> :
                      <Typography>Line 1: <span className="red"> Required</span></Typography>
                    }
                
                  <Typography>Line 2: {this.props.applicant.address_line_2}</Typography>
                
                  {this.props.checkSubmit('city') ?  
                    <Typography>City: {this.props.applicant.city}</Typography> :
                    <Typography>City: <span className="red"> Required</span></Typography>
                  }
                  
                  {this.props.checkSubmit('state') ?  
                    <Typography>State: {this.props.applicant.state}</Typography> :
                    <Typography>State: <span className="red"> Required</span></Typography>
                  }
                  {this.props.checkSubmit('zip_code') ?  
                    <Typography>Zip: {this.props.applicant.zip_code}</Typography> :
                    <Typography>Zip: <span className="red"> Required</span></Typography>
                  }
                  </div>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Phone Number"
                secondary=
                      {this.props.checkSubmit('phone_number') ?  
                  <Typography>{this.props.applicant.phone_number}</Typography> :
                  <p className="red">Required</p>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Email"
                secondary=
                      {this.props.checkSubmit('email') ?  
                  <Typography>{this.props.applicant.email}</Typography> :
                  <p className="red">Required</p>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Have you been accepted to Prime Digital Academy?"
                secondary={
                        <div>
                            {
                              this.props.applicant.accepted_at_prime == 'false' ?  
                              <Typography>No</Typography> :
                              <Typography>Yes</Typography>
                            }
                            {this.props.applicant.accepted_at_prime == "false" ? (
                                this.props.applicant.applied_at_prime == 'true' ?  
                                <div className="sub">
                                <Typography>If not, have you applied?</Typography>
                                <Typography>Yes</Typography>
                                </div> 
                                :
                                <div className="sub">
                                <Typography>If not, have you applied?</Typography>
                                <Typography>No</Typography>
                                </div> 
                            ) : (
                              null
                            )}
                          </div>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Have you received the MSP TechHire/JFCS scholarship?"
                secondary={
                        <div>
                            {
                              this.props.applicant.msp_tech_scholar == 'true' ?  
                              <Typography>Yes</Typography> :
                              <Typography>No</Typography>
                            }
                            {this.props.applicant.msp_tech_scholar === "false" ? (
                                this.props.applicant.applied_for_msp === 'true' ?  
                                <div className="sub">
                                <Typography>If not, have you applied?</Typography>
                                <Typography>Yes</Typography>
                                </div> 
                                :
                                <div className="sub">
                                <Typography>If not, have you applied?</Typography>
                                <Typography>No</Typography>
                                </div> 
                            ) : (
                              null
                            )}
                          </div>
                      }
                    />
            </ListItem>
          </List>

          <h3>Demographic Information</h3>
          <List>
            <ListItem>
              <ListItemText
                primary="Gender"
                secondary=
                      {this.props.checkSubmit('gender') ?  
                  <Typography>{this.props.applicant.gender}</Typography> :
                  <p className="red">Required</p>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Race"
                secondary=
                      {this.props.checkSubmit('race') ?  
                  <Typography>{this.props.applicant.race}</Typography> :
                  <p className="red">Required</p>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="LGBTQ Status"
                secondary=
                      {this.props.checkSubmit('lgbtq_status') ?  
                  <Typography>{this.props.applicant.lgbtq_status}</Typography> :
                  <p className="red">Required</p>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Age"
                secondary=
                      {this.props.checkSubmit('age') ?  
                  <Typography>{this.props.applicant.age}</Typography> :
                  <p className="red">Required</p>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Highest Level of Education"
                secondary=
                      {this.props.checkSubmit('level_of_ed') ?  
                  <Typography>{this.props.applicant.level_of_ed}</Typography> :
                  <p className="red">Required</p>
                      }
                    />
            </ListItem>
          </List>

          <h3>Income & Expenses</h3>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="What is your adjusted gross income? This can be found on line 37 of your 1040.* (line 37 of 1040)"
                      secondary=
                      {this.props.applicant.adjusted_gross_income ?  
                      <Typography>${this.props.applicant.adjusted_gross_income}</Typography> :
                      <Typography>$0</Typography>
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="What is your tax filing status?"
                      secondary=
                      {this.props.checkSubmit('filing_status') ?  
                      <Typography>{this.props.applicant.filing_status}</Typography> :
                      <p className="red">Required</p>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="How many dependents, if any, do you have?*"
                      secondary=
                      {
                        this.props.applicant.dependents ?  
                      <Typography>{this.props.applicant.dependents}</Typography> :
                      <Typography>0</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Are you getting government assistance?"
                      secondary={
                          <div>
                            {
                              this.props.applicant.government_assistance ?  
                              <Typography>Yes</Typography> :
                              <Typography>No</Typography>
                            }
                            {this.props.applicant.government_assistance === "true" ? (
                                this.props.checkSubmit('government_assistance_notes') ?  
                                <Typography>{this.props.applicant.government_assistance_notes}</Typography> :
                                <p className="red">Required</p> 
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
                            {
                              this.props.applicant.employed_during_prime ?  
                              <Typography>Yes</Typography> :
                              <Typography>No</Typography>
                            }
                            {this.props.applicant.employed_during_prime === "true" ? (
                              this.props.checkSubmit( 'income_during_prime' )?  
                              <div className="sub">
                              <Typography>Income during Prime</Typography>
                              <Typography>{this.props.applicant.income_during_prime}</Typography>
                              </div> :
                              <p className="red">Required</p>
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
                            this.props.applicant.need_tuition ?  
                            <Typography>Yes</Typography> :
                            <Typography>No</Typography>
                      }
                    />
                  </ListItem>

                  <h3>
                    Expenses Per Month
                  </h3>

                  <ListItem>
                    <ListItemText
                      primary="Rent/Mortgage"
                      secondary=
                      {
                        this.props.applicant.housing?  
                        <Typography>${this.props.applicant.housing}</Typography> :
                        <Typography>$0</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Transportation, including vehicle or transit expenses"
                      secondary=
                      {
                        this.props.applicant.transportation ?  
                        <Typography>${this.props.applicant.transportation}</Typography> :
                        <Typography>$0</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Childcare Expenses"
                      secondary=
                      {
                        this.props.applicant.childcare ?  
                        <Typography>${this.props.applicant.childcare}</Typography> :
                        <Typography>$0</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Healthcare Expenses"
                      secondary=
                      {
                        this.props.applicant.healthcare ?  
                        <Typography>${this.props.applicant.healthcare}</Typography> :
                        <Typography>$0</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Other Expenses"
                      secondary={
                        <Typography>
                          {this.props.applicant.other_expenses_notes}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
        
        </div>
      </div>
      );
    }
}

export default connect(mapStateToProps)(Review);
