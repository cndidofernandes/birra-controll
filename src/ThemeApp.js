import {createTheme} from '@material-ui/core/styles';

const themeApp = createTheme({
    palette:{
        type: "light",
        primary: {
            main: '#444444',
        },
        secondary: {
            main: '#DA0037',
        },
        background:{
            paper: '#fff',
            default: '#fff'
        }
    },
});

export default themeApp;