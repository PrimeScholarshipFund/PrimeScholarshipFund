import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Admin.css';

const mapStateToProps = state => ({
  apps: state.admin.adminApplication,
});

class AdminPage extends Component {

  componentDidMount(){
    this.props.dispatch({type: 'GET_ALL_APPLICATION'});
  }

  render() {
    let adTable = null;

    if(this.props.apps){
      adTable = 
      <table className="center_80">
          <thead>
            <tr>
              <th>Status</th>
              <th>ID</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.apps.map( applicant =>    
                <tr key={applicant.id}>
                  <td>{applicant.status}</td>
                  <td>{applicant.id}</td>
                  <td><button>View</button></td>
                </tr>
              )
            }
          </tbody>
        </table>;
    }
    
    
    return (
      <div>
        <h1>ADMIN PAGE</h1>
        {adTable}

      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminPage);