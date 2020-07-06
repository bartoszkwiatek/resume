import React, { useState, useEffect } from 'react';
import './App.css';
import { MainInfo } from './MainInfo';
import { TabsInfo } from './TabsInfo';
import { CssBaseline, useMediaQuery, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import { StoreContext } from './Store';
import { Theme } from './Theme';
// import { styles } from './styles';
import { ModeSwitch } from './ModeSwitch';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({});
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#e91e63');

  // const classes = styles;
  const theme = Theme(darkMode, primaryColor);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');   // check prefered user mode 

  useEffect(() => {
    setDarkMode(prefersDarkMode)

    fetch("/cv/db.json")
      // fetch("http://localhost:3333/data")
      .then(response => response.json())
      .then(
        (result) => {
          setData(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      )
  }, [prefersDarkMode])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <StoreContext.Provider
          value={{ data, language, darkMode, setDarkMode, setLanguage, setPrimaryColor }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container fixed>
              <Grid container spacing={5}>
                <Grid item>
                  <MainInfo />
                </Grid>
                <Grid item style={{ width: '100%' }}>
                  <TabsInfo />
                </Grid>
              </Grid>
              <ModeSwitch />
            </Container>
          </ThemeProvider>
        </StoreContext.Provider>
      </React.Fragment>


    )
  }
}



export default App;
