import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#dad7cd'
        },
        secondary: {
            main: '#a3b18a'
        },
        error: {
            main: red.A400
        },
        background: {
            default: '#f0f2f5'
        }
    }
});

export default theme;