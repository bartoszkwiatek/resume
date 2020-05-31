import React, { useState, useEffect, createContext, useReducer, useContext, useMemo } from 'react';
import './App.css';
import { MainInfo } from './MainInfo';
import { CssBaseline, Typography, useMediaQuery } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { dark } from '@material-ui/core/styles/createPalette';
import { StoreContext } from './Store';
import { Theme } from './Theme';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({});
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);

  const theme = Theme(darkMode);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');   // check prefered user mode 

  useEffect(() => {
    setDarkMode(prefersDarkMode)

    fetch("http://localhost:3333/data")
      .then(response => response.json())
      .then(
        (result) => {
          setData(result);
          setIsLoaded(true);
          console.log(result)
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
      <div>
        <StoreContext.Provider value={{ data, language, setDarkMode, setLanguage }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container fixed>
              <MainInfo />
            </Container>
          </ThemeProvider>
        </StoreContext.Provider>
      </div>


    )
  }
}



export default App;
