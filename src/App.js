import React, { useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
function App() {
  const [chequeNo, setChequeNo] = React.useState('2');
  const [accNo, setAccNo] = React.useState('2');
  const [status, setStatus] = React.useState('');
   const [open, setOpen] = React.useState(false);
    const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,

        main: '#2998d0',

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
        const url = 'https://api.ocbc.com:8243/Cheque_Status/1.0?ChequeNumber=';
        const url2 = url + chequeNo;
        const url3 = url2 + '&AccountNo=' + accNo;
        fetch(url3, getRequestOptions)
          .then((res) => res.json())
          .then((data) => {
            setOpen(true)
            console.log(data.ChequeResponse.ChequeStatus);
            setStatus(data.ChequeResponse.ChequeStatus);
          });
}
const classes = useStyles();
  return (
     <ThemeProvider theme={theme}>
    <div className="App">
       <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Cheque Check
          </Typography>
        </Toolbar>
      </AppBar>
     <br/>
     <br/>
       <TextField id="outlined-basic" label="Cheque Number" variant="outlined" 
         onChange={(e) => {
              e.persist();
              setChequeNo(e.target.value);
            
            }}/>
     <br/>
     <br/>
       <TextField id="outlined-basic" label="Account Number" variant="outlined" 
          onChange={(e) => {
              e.persist();
              setAccNo(e.target.value);
            
            }}/>
     <br/>
     <br/>
     <Button variant="contained" color="primary" onClick={submit}>

  Submit
</Button>
 
    </div>
     <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"></DialogTitle>
        <DialogContent>
     
         

       {status}
  

         
        </DialogContent>
        <DialogActions>
          <Button  color="primary" onClick={() => setOpen(false)}>
            Done
          </Button>
       
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default App;
