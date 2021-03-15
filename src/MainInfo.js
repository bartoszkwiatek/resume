import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { PersonalInfo } from './PersonalInfo'
import { Languages } from './Languages'
import { SkillChart } from './SkillChart'
import { Box, Tooltip } from '@material-ui/core'
import { styles } from './styles'

const MainInfo = () => {
  const classes = styles()
  return (
    <Paper style={{ padding: '0.5rem' }}>
      <Grid container>
        <Grid item xs={12} md={4} align="center">
          <PersonalInfo />
        </Grid>
        <Grid item xs={12} md={4} align="center">
          <Typography className={classes.header} variantMapping={{ h3: 'h3' }}>
            Languages
          </Typography>

          <Languages />
        </Grid>
        <Grid item xs={12} md={4} align="center">
          <Typography className={classes.header} variantMapping={{ h3: 'h3' }}>
            Skills
          </Typography>
          <Tooltip title="I am aware that putting some numerical values to skills is not really making much sense. I think about it as 'Subjective assessment of my own skills in relation to each other'. To be honest that has been added cause radar chart looks really cool. That's just my opinion though.">
            <Box style={{ margin: '1rem' }}>
              <SkillChart />
            </Box>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  )
}
// }

export { MainInfo }
