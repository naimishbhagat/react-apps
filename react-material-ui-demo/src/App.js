import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import  ButtonGroup  from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel, Typography,Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {makeStyles, ThemeProvider,createMuiTheme} from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root:{
    background: 'linear-gradient(45deg, #333, #999)',
    border:0,
    borderRadius:15,
    marginBottom:15,
    color:'white',
    padding: '5px 30px'
  }
})

const theme=createMuiTheme({
  typography:{
    h2:{
      fontSize:"30px"
    }
  },
  palette:{
    primary:{
      main: orange[500],
    }
  }
})

function ButtonStyled(){
  const classes =useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample(){
  const [checked,setChecked] = useState(true)
  return (
    <FormControlLabel 
      control={
        <Checkbox 
        checked={checked}
        onChange={(e)=>setChecked(e.target.checked)}
        color="primary"
        inputProps={{
          'aria-label':'secondary checkbox'
        }}
      />
      }
      label="Testing Checkbox"
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <header className="App-header">
        <Typography variant="h2">
          Welcome to MUI
        </Typography>
        <Typography variant="subtitle">
          Learn how to use material UI
        </Typography>
        <ButtonStyled />
        <TextField 
        inputProps={{
          style:{color:'#fff'}
        }}
        type="date"
          variant="outlined"
        />
        <CheckboxExample />
        <ButtonGroup  variant="contained"  size="large" >
          <Button 
            startIcon={<SaveIcon />} 
            color="primary" 
            onClick={()=> alert('hello')}>
            Save
          </Button>
          <Button 
            startIcon={<DeleteIcon />} 
            color="secondary" 
            onClick={()=> alert('hello')}>
            Discard
          </Button>
        </ButtonGroup>
        
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
      </ThemeProvider>
  );
}

export default App;
