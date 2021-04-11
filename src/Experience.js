import React, { useContext } from 'react'
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { StoreContext } from './Store'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { formatDate } from './formatDate'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

const useStyles = makeStyles((theme) => ({
  summary: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  expanded: {
    marginBottom: 0,
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

const Experience = (props) => {
  const { children, value, index, ...other } = props
  const classes = useStyles()
  const context = useContext(StoreContext)
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      {...other}
    >
      <Grid container>
        {value === index &&
          context.data[context.language].work.map((job, index) => {
            return (
              <Grid
                item
                xs={12}
                align="center"
                className={classes.root}
                key={index}
              >
                <ExpansionPanel elevation={5}>
                  <ExpansionPanelSummary
                    classes={{ content: classes.summary }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={''} variant={'overline'}>
                      {formatDate(job.startDate, context.language) +
                        ' - ' +
                        formatDate(job.endDate, context.language)}
                    </Typography>
                    <Typography className={''} variant={'h5'}>
                      {job.position}
                    </Typography>
                    <Typography className={''} variant={'subtitle1'}>
                      {job.company}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.summary}>
                    <Typography variant="body1" align="justify">
                      {job.summary}
                    </Typography>
                    <List>
                      {job.highlights.map((point, index) => {
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
export { Experience }
