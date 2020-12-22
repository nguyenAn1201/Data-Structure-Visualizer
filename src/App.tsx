import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { createMuiTheme, createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import React, { useState } from 'react';
import ReactFlow, { Background, Controls } from 'react-flow-renderer';
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import { LinkedListNode } from './Components/LinkedListNode';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <AppBar position='static'>
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        </Toolbar>
      </AppBar>

      <LinkedListNode value={1} nextPref={2}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
