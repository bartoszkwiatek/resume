import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { PersonalInfo } from './PersonalInfo';


const MainInfo = (props) => {
    return (
        <React.Fragment>
            <Paper>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                >
                    <PersonalInfo data={props.data.basics} />
                </Grid>
            </Paper>
        </React.Fragment>
    );
}

export { MainInfo }
