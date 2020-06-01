import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { PersonalInfo } from './PersonalInfo';
import { Languages } from './Languages';
import { StoreContext } from './Store';
import { SkillChart } from './SkillChart';
import { makeStyles, Box } from '@material-ui/core';
import { styles } from './styles';



const MainInfo = () => {
    const classes = styles()
    return (
        <React.Fragment>
            <Paper >
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4} align="center">
                        <PersonalInfo />
                    </Grid>
                    <Grid item xs={12} md={4} align="center">
                        <Typography className={classes.header} variantMapping={{ h3: "h3" }}>Languages</Typography>

                        <Languages />
                    </Grid>
                    <Grid item xs={12} md={4} align="center">
                        <Typography className={classes.header} variantMapping={{ h3: "h3" }}>Skills</Typography>
                        <Box style={{ margin: '1rem' }}>
                            <SkillChart />

                        </Box>
                    </Grid>

                </Grid>
            </Paper>
        </React.Fragment>
    );
}
// }

export { MainInfo }
