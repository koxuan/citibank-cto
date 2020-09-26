import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


function App() {
   const [open, setOpen] = React.useState(false);
    const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,

        main: '#2998d1',

        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#77a14f',

        // dark: will be calculated from palette.secondary.main,
        contrastText: '#00000',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  });
    useEffect(() => {
  }, []);
 const submit = () => {
   const getRequestOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: ' Bearer ce0016b874590747bb569c19b9560b21',
          },
        };
        const url = 'https://api.ocbc.com:8243/Cheque_Status/1.0?ChequeNumber=749301&AccountNo=501001424001';
        fetch(url, getRequestOptions)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
}
  return (
     <ThemeProvider theme={theme}>
    <div className="App">
     <br/>
     <br/>
       <TextField id="outlined-basic" label="Cheque Number" variant="outlined" />
     <br/>
     <br/>
       <TextField id="outlined-basic" label="Bank Number" variant="outlined" />
     <br/>
     <br/>
     <Button variant="contained" color="primary" onClick={submit}>
  Submit
</Button>
 
    </div>
    </ThemeProvider>
  );
}

export default App;
