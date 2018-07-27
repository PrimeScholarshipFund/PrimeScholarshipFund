import React, { Component } from 'react';
import Stepper, { Typography } from '@material-ui/core';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
})

function getStepContent(step) {
    switch (step) {
        case 0:
            
            return 'Step 1: Please enter your contact information...';
        case 1:
            
            return 'Step 2: Please enter your demographic information...';
        case 2:
            
            return 'Step 3: Income information will be used to determine eligibility...';
        case 3:
            
            return 'Step 4: Expenses will be used to determine amount awarded...';
    
        default:
            return 'Not a step';
    }
}

class HorizontalLinearStepper extends Component {
    handleComplete = () => {
       if (this.props.completed) {

       }
    }


    

    render() { 
        return ( 
        <div>
            stepper
        </div> );
    }
}
 
export default HorizontalLinearStepper;