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
      return (
        <div>
        <div className="top">
        <h1>Review</h1>
        <h3>Personal Information</h3>

         <List>
            <ListItem>
              <ListItemText
                primary="First Name"
                secondary={
                  <Typography>{this.props.applicant.first_name}</Typography>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Last Name"
                secondary={
                  <Typography>{this.props.applicant.last_name}</Typography>
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
                  <Typography>{this.props.applicant.address_line_1}</Typography>
                  <Typography>{this.props.applicant.address_line_2}</Typography>
                  <Typography>{this.props.applicant.city}, {this.props.applicant.state} {this.props.applicant.zip_code}</Typography>
                  </div>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Phone Number"
                secondary={
                  <Typography>{this.props.applicant.phone_number}</Typography>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Email"
                secondary={
                  <Typography>{this.props.applicant.email}</Typography>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Have you been accepted to Prime Digital Academy?"
                secondary={
                  <div>
                    <Typography>{this.props.applicant.accepted_at_prime}</Typography>
                            {this.props.applicant.accepted_at_prime === "false" ? (
                             <div className="sub">
                              <p>If not, have you applied?</p>
                              <Typography>{this.props.applicant.applied_at_prime}</Typography>
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
                    <Typography>{this.props.applicant.msp_tech_scholar}</Typography>
                            {this.props.applicant.msp_tech_scholar === "false" ? (
                             <div className="sub">
                              <p>If not, have you applied?</p>
                              <Typography>{this.props.applicant.applied_for_msp}</Typography>
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
                secondary={
                    <Typography>{this.props.applicant.gender}</Typography>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Race"
                secondary={
                  <Typography>{this.props.applicant.race}</Typography>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="LGBTQ Status"
                secondary={
                  <Typography>{this.props.applicant.lgbtq_status}</Typography>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Age"
                secondary={
                  <Typography>{this.props.applicant.age}</Typography>
                      }
                    />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Highest Level of Education"
                secondary={
                  <Typography>
                    {this.props.applicant.level_of_ed}
                  </Typography>
                      }
                    />
            </ListItem>
          </List>

          <h3>Income & Expenses</h3>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="What is your adjusted gross income?"
                      secondary={
                        <Typography>{this.props.applicant.adjusted_gross_income}</Typography>
                      }
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="What is your tax filing status?"
                      secondary={
                        <Typography>
                         {this.props.applicant.filing_status}
                         </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="How many dependents, if any, do you have?* (number, DNWTS)"
                      secondary={
                        <Typography>{this.props.applicant.dependents}</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Are you getting government assistance?"
                      secondary={
                          <div>
                            <Typography>
                              {this.props.applicant.government_assistance}
                            </Typography>
                            {this.props.applicant.government_assistance === "true" ? (
                              <Typography className="sub">
                              {this.props.applicant.government_assistance_notes}
                              </Typography>
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
                            <Typography>
                              {this.props.applicant.employed_during_prime}
                            </Typography>
                            {this.props.applicant.employed === "true" ? (
                              <Typography>
                                {this.props.applicant.employedText}
                              </Typography>
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
                            <Typography>{this.props.applicant.need_tuition}</Typography>
                          </div>
                      }
                    />
                  </ListItem>
                  <h3>
                    Expenses Per Month
                  </h3>
                  <ListItem>
                    <ListItemText
                      primary="Rent/Mortgage"
                      secondary={
                        <Typography>
                          {this.props.applicant.housing}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Transportation, including vehicle or transit expenses"
                      secondary={
                        <Typography>
                          {this.props.applicant.transportation}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Childcare Expenses"
                      secondary={
                        <Typography>
                          {this.props.applicant.childcare}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Healthcare Expenses"
                      secondary={
                        <Typography>
                         {this.props.applicant.healthcare}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Other Expenses"
                      secondary={
                        <p>
                          {this.props.applicant.other_expenses_notes}
                        </p>
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
