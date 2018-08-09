import { createMuiTheme } from "@material-ui/core/styles";
// import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';
import deepPurple from '@material-ui/core/colors/deepPurple';
import deepOrange from '@material-ui/core/colors/deepOrange';

export default createMuiTheme({
    palette: {
        // primary: {
        //     light: '#89a6e1',
        //     main: '#5877af',
        //     dark: '#264c7f',
        //     contrastText: '#000000',
        // },
        // secondary: {
        //     light: '#a4ff90',
        //     main: '#70d760',
        //     dark: '#3aa531',
        //     contrastText: '#000000',
        // },
        // //TODO: better error color
        // error: red,
        primary: indigo,
        secondary: deepPurple,
        error: deepOrange,
    },
});

