import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { PersonalInfo } from './PersonalInfo'
import { Languages } from './Languages'
import { SkillChart } from './SkillChart'
import { Box, Tooltip } from '@material-ui/core'
import { styles } from './styles'
import { StoreContext } from './Store'
import { translations } from './translations'

const MainInfo = () => {
  const classes = styles()
  const context = useContext(StoreContext)
  return (
    <Paper style={{ padding: '0.5rem' }}>
      <Grid container>
        <Grid item xs={12} md={4} align="center">
          <PersonalInfo />
        </Grid>
        <Grid item xs={12} md={4} align="center">
          <Typography className={classes.header} variantMapping={{ h3: 'h3' }}>
            {translations[context.language].languages}
          </Typography>

          <Languages />
        </Grid>
        <Grid item xs={12} md={4} align="center">
          <Typography className={classes.header} variantMapping={{ h3: 'h3' }}>
            {translations[context.language].skills}
          </Typography>
          <Tooltip title={translations[context.language].tooltip}>
            <Box style={{ margin: '1rem' }}>
              <SkillChart />
            </Box>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  )
}

export { MainInfo }
