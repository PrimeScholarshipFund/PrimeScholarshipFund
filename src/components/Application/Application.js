import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApplicationButtons from '../ApplicationButtons/ApplicationButtons';
import Landing from './Landing';
import Contact from './Contact';
import HorizontalLinearStepper from '../HorizontalLinearStepper/HorizontalLinearStepper';







class ApplicationPage extends Component {
  state = {
    appPage: 0,
    completed: {},

  }
  
  pageHandler = (event) => {
    console.log(event.currentTarget.value);
    let activeStep; 

    if (this.isLastStep() && !this.allStepsCompleted()) {
        //If it is the last step but all steps haven't been completed
        // find the first uncompleted step
        const steps = getSteps()
    }
    
    //TODO: make it so you can't go outside of the bounds of pages
    this.setState({ 
      appPage: this.state.appPage + parseInt(event.currentTarget.value) });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    
  }

render() {
  let content = ''
  switch (this.state.appPage) {
    case 0:
    content = <Landing /> 
      break;
    case 1:
    content = <Contact /> 
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