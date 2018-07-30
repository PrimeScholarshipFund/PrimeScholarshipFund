import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  apps: state.admin.adminApplication,
});

class AdminPage extends Component {

  componentDidMount(){
    this.props.dispatch({type: 'GET_ALL_APPLICATION'});
  }

  render() {
    return (
      <div>
        <h1>ADMIN PAGE</h1>
        {JSON.stringify(this.props.apps)}
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>ID</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {/* {
                    this.props.apps.map( thing =>    
                      <tr>
                      <td>{thing.first_name}</td>
                      <td>{thing.first_name}</td>
                      <td>{thing.first_name}</td>
                      </tr>
                    )
                } */}
          </tbody>
        </table>

      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminPage);