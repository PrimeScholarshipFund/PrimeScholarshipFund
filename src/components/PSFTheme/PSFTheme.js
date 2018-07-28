import { createMuiTheme } from "@material-ui/core/styles";
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
    palette: {
        primary: {
            light: '#89a6e1',
            main: '#5877af',
            dark: '#264c7f',
            contrastText: '#000000',
        },
        secondary: {
            light: '#a4ff90',
            main: '#70d760',
            dark: '#3aa531',
            contrastText: '#000000',
        },
        //TODO: better error color
        error: red,
    },        
});

