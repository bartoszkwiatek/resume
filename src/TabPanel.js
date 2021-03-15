import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
      // backgroundColor: pink[100],
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(3),
    },
  },
}))

const TabPanel = (props) => {
  const { children, value, index, ...other } = props
  const classes = useStyles()

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  }

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box className={classes.root}>{children}</Box>}
    </div>
  )
}

export { TabPanel }
