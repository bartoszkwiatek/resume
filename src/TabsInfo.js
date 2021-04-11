import { Container, Paper, Tab, Tabs, useTheme } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code'
import SchoolIcon from '@material-ui/icons/School'
// import LinkIcon from '@material-ui/icons/Link';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import PaletteIcon from '@material-ui/icons/Palette';
// import HomeIcon from '@material-ui/icons/Home';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WorkIcon from '@material-ui/icons/Work'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import SwipeableViews from 'react-swipeable-views'
import { Education } from './Education'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { StoreContext } from './Store'
import { styles } from './styles'
import { TabPanel } from './TabPanel'
import { translations } from './translations'

const TabsInfo = ({ match }) => {
  const context = useContext(StoreContext)
  const classes = styles()
  const theme = useTheme()
  const [value, setValue] = useState(0)
  const colors = ['#e91e63', '#0097a7', '#2196f3', '#fdd835']

  const history = useHistory()

  useEffect(() => {
    switch (match.params.tab) {
      case 'projects':
        setValue(0)
        context.setPrimaryColor(colors[0])
        break
      case 'education':
        setValue(1)
        context.setPrimaryColor(colors[1])
        break
      case 'experience':
        setValue(2)
        context.setPrimaryColor(colors[2])
        break
      default:
        setValue(0)
        context.setPrimaryColor(colors[0])

        break
    }
  }, [match])

  const handleChange = (event, newValue) => {
    setValue(newValue)
    context.setPrimaryColor(colors[newValue])
    switch (newValue) {
      case 0:
        history.push(`/projects`)
        break
      case 1:
        history.push(`/education`)
        break
      case 2:
        history.push(`/experience`)
        break
      default:
        history.push(`/`)

        break
    }
  }

  const handleChangeIndex = (index) => {
    setValue(index)
    context.setPrimaryColor(colors[index])
  }

  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Paper square className={classes.root}>
        <Tabs
          // className={classes.root}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab
            icon={<CodeIcon />}
            label={translations[context.language].projects}
          />
          <Tab
            icon={<SchoolIcon />}
            label={translations[context.language].education}
          />
          <Tab
            icon={<WorkIcon />}
            label={translations[context.language].experience}
          />
          {/* <Tab icon={<PaletteIcon />} label="Skills" /> */}
        </Tabs>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Projects />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Education />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Experience />
          </TabPanel>
          {/* <TabPanel value={value} index={3} dir={theme.direction}>

                </TabPanel> */}
        </SwipeableViews>
      </Paper>
    </Container>
  )
}

export { TabsInfo }
