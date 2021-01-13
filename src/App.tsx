import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { createMuiTheme, createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { LinkedListComponent } from './Components/LinkedListComponent';

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


export const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <AppBar position='static'>
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Data Structure Visualizer
        </Typography>
        </Toolbar>
      </AppBar>

      <LinkedListComponent />
    </div>
    </ThemeProvider>
  );
}

export default App;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      textAlign: "center",
      flexGrow: 1,
    },
  }),
);
