import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { StoreContext } from './Store';

const Projects = () => {
    const context = useContext(StoreContext);
    return (
        <Grid container spacing={10}>
            <Grid item>

            </Grid>
        </Grid>
    )
}
export { Projects }