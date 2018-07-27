import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApplicationButtons from '../ApplicationButtons/ApplicationButtons';
import Landing from './Landing';
import Contact from './Contact';
import HorizontalLinearStepper from '../HorizontalLinearStepper/HorizontalLinearStepper';







function getSteps() {
  return ['Contact','Demographics','Income','Expenses']
}
class ApplicationPage extends Component {
  state = {
    appPage: 0,
    completed: {},

  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps();
  }
  
  completedSteps() {
    return Object.keys(this.state.completed).length;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    
  }

  componentDidMount() {
    console.log(this.state);
    
  }


  handleComplete = () => {
    const { completed } = this.state;
    completed[this.state.activeStep] = true; 
    this.setState({ 
      completed,
    });
    this.handleNext()
  }

  handleReset = () => {
    this.setState({
      appPage: 0,
      activeStep: 0,
      completed: {},
    });
  }

  handleStep = step => () => {
    this.setState({ 
      activeStep: step,
    });
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() -1;
  }

  pageHandler = (event) => {
    console.log(event.currentTarget.value);
    let activeStep; 

    if (this.isLastStep() && !this.allStepsCompleted()) {
        //If it is the last step but all steps haven't been completed
        // find the first uncompleted step
        const steps = getSteps();
        activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    
    //TODO: make it so you can't go outside of the bounds of pages
    this.setState({ 
      activeStep,
      appPage: this.state.appPage + parseInt(event.currentTarget.value),
    });
  }


render() {
  //check whether the return statement works
  let content = ''
  switch (this.state.appPage) {
    case 0:
    return content = <Landing /> 
    case 1:
    return content = <Contact /> 
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
          </div>
          <ApplicationButtons 
          pageHandler = {this.pageHandler}
          appPage = {this.state.appPage} />
          <HorizontalLinearStepper 
          //TODO: make it so the stepper is grayed out on start(landing) page.
          activeStep={this.state.appPage}
          completed= {this.state.completed}
          /> 
      </div>
    );
  }
}

export default connect()(ApplicationPage);