import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleTabs from '../SimpleTabs/SimpleTabs';
import Landing from './Landing';
import PersonalInfo from './PersonalInfo';
import Demographics from './Demographics';
import Income from './Income';
import Expenses from './Expenses';
import Review from './Review';
import HorizontalLinearStepper from '../HorizontalLinearStepper/HorizontalLinearStepper';
import './ApplicationPage.css';
import { getApplicant } from '../../redux/actions/applicantActions';
import { saveApplication } from '../../redux/actions/applicantActions';
import ThankYou from './ThankYou';
import swal from 'sweetalert';



const getSteps = () => {
  return ['Start', 'Contact Information','Demographics', 'Income & Expenses','Submit']
}

//switch function to display the message on the progress bar based on current step
const getStepContent = (step) => {
  switch (step) {
      case 1:

          return 'Step 1: Please enter your contact and demographic information...';
      case 2:

          return 'Step 2: Please enter your income and expenses information...';
      case 3:

          return 'Review Your Application and Submit';

          default:
          return '';
        }
      }

//returns the total number of steps. can be expanded for further development.
const totalSteps = () => {
  return getSteps().length;
}

const mapStateToProps = state => ({
  user: state.user,
  applicant: state.applicant,
});

class ApplicationPage extends Component {
  state = {
    appPage: 0,
    completed: {},
    activeStep: 0,
    canSubmit: true,
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('login');
    }
  }

  //determines if all steps have been completed.
  allStepsCompleted = () => {
    return this.completedSteps() === totalSteps();
  }

  //function to take in an attribute key and check if the attribute is filled in on the store.
  //if the attribute is filled return true. and if it is not return false and change canSubmit
  //to false to disable the final submit button
  //reset option can be passed in in place of key to reset the submit state to true.
  checkSubmit = (key) => {
    if (key === 'reset'){
      this.setState({
        ...this.state,
        canSubmit: true
      });
    }
    else {
      if(this.props.applicant[key]){
        return true;
      }
      else {
        this.setState({
          ...this.state,
          canSubmit: false
        });
        return false;
      }
    }
  }
  //function to check if the app can be submitted

  completedSteps = () => {
    return Object.keys(this.state.completed).length;
  }

  componentDidMount() {
    this.props.dispatch(getApplicant());
  }

  //will call the save function and if the step is allowed it will then move to the next page
  //and scroll to the top of the screen.
  handleComplete = (event) => {
    if (this.saveApplication()){
      this.handleNext();
      this.pageHandler(event);
      window.scroll(0,0);
    }
  }

  //will dispatch to different routes depending on current step in application. Will return true if
  //the step is allowed so that it can also be used a truthy test for other functions.
  saveApplication = () => {
    if (this.props.applicant.government_assistance === '') {
      this.props.applicant.government_assistance = false;
    }
    if (this.props.applicant.employed_during_prime === '') {
      this.props.applicant.employed_during_prime = false;
    }
    switch (this.state.activeStep) {
      case 1:
      case 2:
        this.props.dispatch(saveApplication({url: 'personal', data: this.props.applicant}));
        return true;
      case 3:
        this.props.dispatch(saveApplication({url: 'income', data: this.props.applicant}));
        return true;
        //the last page will include an alert that indicates the application has been completed.
      case 4:
        if(this.state.canSubmit){
          this.props.dispatch(saveApplication({url: 'all', data: this.props.applicant}));
          swal({
            title: "Thank you for your submission!",
            text: "We will review and get back to you promptly",
            icon: "success",
          });
          return true;
        }
        break;
      default: return true;
    }
  }
//move the application to the next step.
  handleNext = () => {
    let _activeStep;
    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = getSteps();
      _activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      _activeStep = this.state.activeStep + 1;

      this.setState({
        activeStep: _activeStep,
      });
    }
  }

  //reset the application back to the original page
  handleReset = () => {
    this.setState({
      appPage: 0,
      activeStep: 0,
      completed: {},
    });
  }

  //gets step that is clicked or received from navigation buttons
  //and sets active step to the value desired
  handleStep = step => () => {
    this.setState({
      activeStep: step,
      appPage: step,
    });
    window.scroll(0,0);
  }

  //check if current step is the last step available
  isLastStep = () => {
    return this.state.activeStep === totalSteps() -1;
  }

  //set the active page in application to the page user clicked on
  //gets a Number from the value of the step button
  pageHandler = (event) => {
    let _activeStep;
      _activeStep = this.state.activeStep + Number(event.currentTarget.value);
      this.setState({
        activeStep: _activeStep,
      });
    
    this.setState({
      appPage: this.state.appPage + parseInt(event.currentTarget.value, 10),
    });
  };



render() {
  //conditionally render the application page based on current step
  let content = ''
  switch (this.state.appPage) {
    case 0:
      content = <Landing />
      break;
    case 1:
      content = <PersonalInfo />
      break;
    case 2:
      content = <Demographics />
      break;
    case 3:
      content = <Income />
      break;
    case 4:
      content = <Expenses />
      break;
    case 5:
      content = <Review checkSubmit={this.checkSubmit}/>
      break;
    case 6:
      content = <ThankYou/>
      break;

    default:
      break;
  }

  return (
      <div className="application">
        <SimpleTabs 
          value = {2}
        />
        
        <div>
          <div>
          {content}
          </div>
          < br />
          <HorizontalLinearStepper
          activeStep={this.state.appPage}
          allStepsCompleted = {this.allStepsCompleted}
          completed= {this.state.completed}
          completedSteps = {this.completedSteps}
          getSteps = {getSteps}
          getStepContent = {getStepContent}
          pageHandler = {this.pageHandler}
          handleReset = {this.handleReset}
          handleStep = {this.handleStep}
          handleComplete = {this.handleComplete}
          totalSteps = {totalSteps}
          />
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ApplicationPage);
