import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { PersonalInfo } from './PersonalInfo';
import { Languages } from './Languages';
import { StoreContext } from './Store';



const MainInfo = () => {
    return (
        <React.Fragment>
            <Paper >
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4} align="center">
                        <PersonalInfo />
                    </Grid>
                    <Grid item xs={12} md={4} align="center">
                        <Languages />
                    </Grid>
                    <Grid item xs={12} md={4} align="center"></Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}
// }

export { MainInfo }
