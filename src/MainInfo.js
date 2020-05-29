import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { PersonalInfo } from './PersonalInfo';
import { Languages } from './Languages';


const MainInfo = (props) => {
    return (
        <React.Fragment>
            <Paper >
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4} align="center">
                        <PersonalInfo data={props.data.basics} />
                    </Grid>
                    <Grid item xs={12} md={4} align="center">
                        <Languages data={props.data.languages} />
                    </Grid>
                    <Grid item xs={12} md={4} align="center"></Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}

export { MainInfo }
