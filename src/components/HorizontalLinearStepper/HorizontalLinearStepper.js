import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';


const styles = theme => ({
    root: {
        width: '90%',
        justifyContent: 'center',
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
    leftIcon: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        fontSize: 16,
      },
      rightIcon: {
        marginLeft: theme.spacing.unit,
        
      },
      iconSmall: {
        fontSize: 20,
        marginRight: theme.spacing.unit,        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        textAlign: 'center',
      },
})


class HorizontalLinearStepper extends Component {

    componentDidMount() {
        console.log(this.props);

    }

    componentDidUpdate = (prevProps, currentProps) => {
    }




    render() {
        const { classes } = this.props;
        const steps = this.props.getSteps();
        let content;
        if (this.props.completed) {
            content =
            <div>
                {this.props.allStepsCompleted() ? (
                    <div>
                        <Typography
                        className={classes.instructions}
                        >
                        All steps completed - you&quot;re finished
                        </Typography>
                        <Button
                            onClick={this.props.handleReset}
                        >
                        Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Typography
                        className={classes.instructions}
                        >
                        {this.props.getStepContent(this.props.activeStep)}
                        </Typography>
                        <div>
                            <Button
                                disabled = {this.props.activeStep === 0}
                                onClick = {this.props.pageHandler}
                                color="primary"
                                value = {-1}
                                className = {classes.button}
                            >
                                Previous Page
                            </Button>

                            <Button
                                className={classes.button}
                                variant = "contained"
                                color = "secondary"
                                value={1}
                                onClick = {this.props.handleComplete}
                            >
                            {this.props.activeStep === 3 
                                ? ('Finish') 
                                : 
                                (this.props.activeStep===0 ? ('Start Application') 
                                : 
                                (
                                <span className={classes.leftIcon}>   
                                        <SaveIcon 
                                            className={classes.iconSmall}
                                        />
                                    {'Save & Continue'}  
                                </span>
                                ))}
                            </Button>
                        </div>
                    </div>
                )}
                </div>;
        }

        return (
            <div
            className={classes.root}
            >
            <Stepper nonLinear activeStep={this.props.activeStep}>
            {steps.map((label, index) => {
                return (
                    <Step key={label}>
                        <StepButton
                            onClick = {this.props.handleStep(index)}
                            completed={this.props.completed[index]}
                            // color="secondary"
                            id="stepperButton"
                        >
                            {label}
                        </StepButton>
                    </Step>
                )
            })}
            </Stepper>
                {content}
        </div>
        );
    }
}

HorizontalLinearStepper.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(HorizontalLinearStepper);
