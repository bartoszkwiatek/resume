import { CssBaseline, Grid, useMediaQuery } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { LanguageSelect } from './LanguageSelect'
import { MainInfo } from './MainInfo'
// import { styles } from './styles';
import { ModeSwitch } from './ModeSwitch'
import { Sidebar } from './Sidebar'
import { StoreContext } from './Store'
import { TabsInfo } from './TabsInfo'
import { Theme } from './Theme'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
      // backgroundColor: pink[100],
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2),
    },
  },
}))

function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useState({})
  const [language, setLanguage] = useState('en')
  const [darkMode, setDarkMode] = useState(false)
  const [availableLanguages, setAvailableLanguages] = useState([])
  const [primaryColor, setPrimaryColor] = useState('#e91e63')
  const classes = useStyles()

  // const classes = styles;
  const theme = Theme(darkMode, primaryColor)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // check prefered user mode
  useEffect(() => {
    setDarkMode(prefersDarkMode)

    fetch('/resume/db.json')
      // fetch("http://localhost:3333/data")
      .then((response) => response.json())
      .then(
        (result) => {
          setData(result)
          setIsLoaded(true)
          setAvailableLanguages(Object.keys(result))
        },
        (error) => {
          setError(error)
          setIsLoaded(true)
        },
      )
  }, [prefersDarkMode])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LinearProgress color="primary" />
        </ThemeProvider>
      </React.Fragment>
    )
  } else {
    return (
      <StoreContext.Provider
        value={{
          data,
          language,
          darkMode,
          availableLanguages,
          setDarkMode,
          setLanguage,
          setPrimaryColor,
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                  Resume
                </Typography>
                <LanguageSelect />
                <ModeSwitch />
              </Toolbar>
            </AppBar>
            <Container
              className={classes.root}
              // style={{ paddingTop: '2.5rem' }}
              fixed
            >
              <Grid container>
                <Grid item style={{ width: '100%', paddingBottom: '2rem' }}>
                  <MainInfo />
                </Grid>
                <Grid item style={{ width: '100%' }}>
                  <Route path="/:tab" component={TabsInfo} />
                </Grid>
              </Grid>
            </Container>
          </Router>
        </ThemeProvider>
      </StoreContext.Provider>
    )
  }
}

export default App
