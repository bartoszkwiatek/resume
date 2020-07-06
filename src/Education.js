import React, { useContext } from 'react';
import { Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, makeStyles, List, ListItem } from '@material-ui/core';
import { StoreContext } from './Store';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { formatDate } from './formatDate'

const useStyles = makeStyles({
  summary: {
    flexDirection: 'column',
    alignItems: 'flex-start',

  },
});

const Education = (props) => {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  const context = useContext(StoreContext);
  return (
    <div style={{ padding: 20 }}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      {...other}>
      <Grid container spacing={10}>
        {value === index && (

          context.data[context.language].education.map((school, index) => {
            return (
              <Grid item xs={12} align="center" key={index}>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    classes={{ content: classes.summary }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      className={''}
                      variant={'overline'}
                    >{formatDate(school.startDate) + ' - ' + formatDate(school.endDate)}
                    </Typography>
                    <Typography
                      className={''}
                      variant={'h5'}
                    >{school.area}
                    </Typography>
                    <Typography
                      className={''}
                      variant={'subtitle1'}
                    >
                      {school.studyType}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails
                    className={classes.summary}
                  >
                    <Typography variant="overline">
                      {school.institution}
                    </Typography>
                    <Typography
                      variant="body1"
                      align="justify"
                    >
                      {school.desc}
                    </Typography>
                    <List>
                      {school.courses.map((point, index) => {
                        return (<ListItem key={index}>
                          {point}
                        </ListItem>)
                      })}
                    </List>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            )
          })
        )}
      </Grid>

    </div >
  )
}
export { Education }