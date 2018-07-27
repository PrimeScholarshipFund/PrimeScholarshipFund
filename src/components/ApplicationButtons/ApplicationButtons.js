import React, { Component } from 'react';
import {Button} from '@material-ui/core'

class ApplicationButtons extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            {this.props.appPage !== 0 ? (
                <div>
                    <Button
                    onClick={this.props.pageHandler}
                    value={-1}
                    >
                        Previous Page
                    </Button>
                    <Button
                    onClick={this.props.pageHandler}
                    value={1}
                    >
                        Next Page
                    </Button>
                </div>
            ) : (
                <div>
                    <Button
                    onClick={this.props.pageHandler}
                    value={1}
                    >
                        Start Application
                    </Button>
                </div>
            )}
            </div>
         );
    }
}
 
export default ApplicationButtons;