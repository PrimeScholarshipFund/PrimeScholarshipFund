import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import SimpleTabs from '../SimpleTabs/SimpleTabs';
import Landing from './Landing';
import PersonalInfo from './PersonalInfo';
import IncomeExpenses from './IncomeExpenses';
import Review from './Review';
import HorizontalLinearStepper from '../HorizontalLinearStepper/HorizontalLinearStepper';
import { Paper } from '../../../node_modules/@material-ui/core';
import './ApplicationPage.css';
import { getApplicant } from '../../redux/actions/applicantActions';
import { saveApplication } from '../../redux/actions/applicantActions';
import ThankYou from './ThankYou';



const getSteps = () => {
  return ['Start', 'Personal Information','Income & Expenses','Submit']
}

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

  allStepsCompleted = () => {
    return this.completedSteps() === totalSteps();
  }

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

  handleChange = (key) => event => {

    this.setState({
      ...this.state,
      personalInfo: {...this.state.personalInfo, [key]: event.target.value}
    })
  }


  handleComplete = (event) => {
    // const { completed } = this.state;
    // completed[this.state.activeStep] = true;
    // this.setState({
    //   completed,
    // });
    if (this.saveApplication()){
      this.handleNext();
      this.pageHandler(event);
      window.scroll(0,0);
    }
  }

  saveApplication = () => {
    if (this.props.applicant.government_assistance === '') {
      this.props.applicant.government_assistance = false;
    }
    if (this.props.applicant.employed_during_prime === '') {
      this.props.applicant.employed_during_prime = false;
    }
    console.log('savehdjkfhdjskhfd');
    switch (this.state.activeStep) {
      case 1:
        this.props.dispatch(saveApplication({url: 'personal', data: this.props.applicant}));
        return true;
      case 2:
        this.props.dispatch(saveApplication({url: 'income', data: this.props.applicant}));
        return true;
      case 3:
        if(this.state.canSubmit){
          this.props.dispatch(saveApplication({url: 'all', data: this.props.applicant}));
          return true;
        }
        break;
      default: return true;
    }
  }

  handleNext = () => {
    let _activeStep;

    //TODO: fix it so you can't go farther than the last step
    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = getSteps();
      _activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      _activeStep = this.state.activeStep + 1;
      console.log('activeStep', _activeStep);

      this.setState({
        activeStep: _activeStep,
      });
    }
  }

  handleReset = () => {
    this.setState({
      appPage: 0,
      activeStep: 0,
      completed: {},
    });
  }

  handleStep = step => () => {
    console.log(step);

    this.setState({
      activeStep: step,
      appPage: step,
    });
    window.scroll(0,0);
  }

  isLastStep = () => {
    return this.state.activeStep === totalSteps() -1;
  }

  pageHandler = (event) => {
    console.log(event.currentTarget.value);
    let _activeStep;
    if (this.state.activeStep === 3) {
      //add sweet alert here
    } else {
      _activeStep = this.state.activeStep + Number(event.currentTarget.value);
      console.log('activeStep', _activeStep);

      this.setState({
        activeStep: _activeStep,
      });
    }



    //TODO: make it so you can't go outside of the bounds of pages
    this.setState({
      appPage: this.state.appPage + parseInt(event.currentTarget.value, 10),
    });
  };



render() {
  //check whether the return statement works
  let content = ''
  switch (this.state.appPage) {
    case 0:
      content = <Landing />
      break;
    case 1:
      content = <PersonalInfo />
      break;
    case 2:
      content = <IncomeExpenses />
      break;
    case 3:
      content = <Review checkSubmit={this.checkSubmit}/>
      break;
    case 4:
      content = <ThankYou/>
      break;

    default:
      break;
  }

  return (
      <div>
        <SimpleTabs 
          value = {2}
        />
        
        <div>
          <div>
          {content}
          </div>
          < br />
          <HorizontalLinearStepper
          //TODO: make it so the stepper is grayed out on start(landing) page.
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
