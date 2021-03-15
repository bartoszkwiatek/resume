import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React, { useContext } from 'react'
import { formatDate } from './formatDate'
import { StoreContext } from './Store'

const useStyles = makeStyles((theme) => ({
  summary: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  root: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
      paddingBottom: theme.spacing(3),
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

const Education = (props) => {
  const { children, value, index, ...other } = props
  const classes = useStyles()
  const context = useContext(StoreContext)
  return (
    <div
      // style={{ padding: 20 }}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      {...other}
    >
      <Grid container>
        {value === index &&
          context.data[context.language].education.map((school, index) => {
            return (
              <Grid
                item
                xs={12}
                align="center"
                className={classes.root}
                key={index}
              >
                <ExpansionPanel variant="outlined">
                  <ExpansionPanelSummary
                    classes={{ content: classes.summary }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={''} variant={'overline'}>
                      {formatDate(school.startDate) +
                        ' - ' +
                        formatDate(school.endDate)}
                    </Typography>
                    <Typography className={''} variant={'h5'}>
                      {school.area}
                    </Typography>
                    <Typography className={''} variant={'subtitle1'}>
                      {school.studyType}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.summary}>
                    <Typography variant="overline">
                      {school.institution}
                    </Typography>
                    <Typography variant="body1" align="justify">
                      {school.desc}
                    </Typography>
                    <List>
                      {school.courses.map((point, index) => {
                        return (
                          <ListItem key={index}>
                            {point && (
                              <ListItemIcon>
                                <ArrowRightIcon></ArrowRightIcon>
                              </ListItemIcon>
                            )}
                            <ListItemText>{point}</ListItemText>
                          </ListItem>
                        )
                      })}
                    </List>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            )
          })}
      </Grid>
    </div>
  )
}
export { Education }
