import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import InputAdornments from '../InputField/InputField';
import { saveApplication } from '../../redux/actions/adminActions';
import deepOrange from '@material-ui/core/colors/deepOrange';
import swal from 'sweetalert';


const styles = {
  root: {
    backgroundColor: deepOrange
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  paper: {
    backgroundColor: 'black',
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const mapStateToProps = state => ({
  applicant: state.applicant,
});

class FullScreenDialog extends React.Component {
  state = {
    open: true,
    comments: this.props.person.comments,
    status: this.props.person.status,
    form_id: this.props.person.form_id,
  };

  confirmClose = () => {

  };

  componentDidUpdate() {
    console.log(this.state);
  }

  handleChange = prop => event => {
    console.log(prop, event.target.value);
    this.setState({ [prop]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.setActive(null);
  };

  handleSave = () => {
    this.props.dispatch(saveApplication(this.state));
    swal({
      title: "Saved",
      text: "Changes have been saved",
      icon: "success",
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div >
        <Button onClick={this.handleClickOpen}>View</Button>
        <Dialog 
          className = {classes.root}
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                {this.props.person.first_name + ' ' + this.props.person.middle_initial + ' ' + this.props.person.last_name}
              </Typography>
              <Button color="inherit" onClick={this.handleSave}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <InputAdornments
            person={this.props.person}
            comments={this.state.comments}
            status={this.state.status}
            handleChange={this.handleChange}
          />
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles),connect(),)(FullScreenDialog);
