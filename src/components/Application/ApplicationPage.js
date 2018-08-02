import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ApplicationButtons from '../ApplicationButtons/ApplicationButtons';
import Landing from './Landing';
import PersonalInfo from './PersonalInfo';
import IncomeExpenses from './IncomeExpenses';
import Review from './Review';
import HorizontalLinearStepper from '../HorizontalLinearStepper/HorizontalLinearStepper';

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
          return 'Get Started!';
        }
      }

const totalSteps = () => {
        return getSteps().length;
      }
class ApplicationPage extends Component {
  state = {
    appPage: 0,
    completed: {},
    activeStep: 0,

  }

  allStepsCompleted = () => {
    return this.completedSteps() === totalSteps();
  }

  completedSteps = () => {
    console.log(this.state);

    return Object.keys(this.state.completed).length;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);

  }

  componentDidMount() {
    console.log(this.state.completed);
  }


  handleComplete = (event) => {
    const { completed } = this.state;
    completed[this.state.activeStep] = true;
    this.setState({
      completed,
    });
    this.handleNext();
    this.pageHandler(event);
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
      content = <Review />
      break;

    default:
      break;
  }

  return (
      <div>
          {this.state.activeStep}
          <div>
          {content}
          <ApplicationButtons
          pageHandler = {this.pageHandler}
          appPage = {this.state.appPage}
          />
          </div>
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
    );
  }
}

export default ApplicationPage;
