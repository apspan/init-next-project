import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgb(254,225,76)',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
            lightGrey: '#404645',
            white: '#FFFFFF',
            lightestGrey: "#dedede"
        },
        text: {
            primary: '#333333',
            secondary: '#404645',
            muted: '#646e6d',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)'
        }
    },
});

export default theme;
