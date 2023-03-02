import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export  const theme = createTheme({
  palette: {
    primary: {
      // main: "#0EC0F9",
      main:"#3dcbfa",
      contrastText: "#fff"
    },
    secondary: {
      // main: "#c53bee",
      main:"#d06cee",
      contrastText: "#fff"

    },
    error:{
        main:"#e53935",
        contrastText: "#fff"


    },
    success: {
        main: "#00c853",
        contrastText: "#fff"

    },
    warning: {
        main: "#ffea00",
        contrastText: "#fff"

    },
    info: {
        main: "#2962ff",
        contrastText: "#fff"

    }
  },
});