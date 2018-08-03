import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ApplicationButtons from '../ApplicationButtons/ApplicationButtons';
import Landing from './Landing';
import Contact from './Contact';
import Demographics from './Demographics';
import Income from './Income';
import Expenses from './Expenses';
import HorizontalLinearStepper from '../HorizontalLinearStepper/HorizontalLinearStepper';

const getSteps = () => {
  return ['Landing', 'Contact','Demographics','Income','Expenses']
}

const getStepContent = (step) => {
  switch (step) {
      case 1:

          return 'Step 1: Please enter your contact information...';
      case 2:

          return 'Step 2: Please enter your demographic information...';
      case 3:

          return 'Step 3: Income information will be used to determine eligibility...';
      case 4:

          return 'Step 4: Expenses will be used to determine amount awarded...';

          default:
          return 'Not a step';
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


  handleComplete = () => {
    const { completed } = this.state;
    completed[this.state.activeStep] = true;
    this.setState({
      completed,
    });
    this.handleNext()
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
      content = <Contact />
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
    // case 2:
    // content = <Page1 />
    //   break;
    // case 3:
    // content = <Page1 />
    //   break;
    // case 4:
    // content = <Page1 />
    //   break;

    default:
      break;
  }

  return (
      <div>
        <h1>APPLICATION PAGE</h1>
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
