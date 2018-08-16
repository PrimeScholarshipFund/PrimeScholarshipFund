import { createMuiTheme } from "@material-ui/core/styles";
// import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';
import deepPurple from '@material-ui/core/colors/deepPurple';
import deepOrange from '@material-ui/core/colors/deepOrange';

export default createMuiTheme({
    palette: {
        primary: indigo,
        secondary: deepPurple,
        error: deepOrange,
    },
});

