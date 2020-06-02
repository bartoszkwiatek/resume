import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { StoreContext } from './Store';
import { ProjectCard } from './ProjectCard';

const Projects = () => {
    const context = useContext(StoreContext);
    return (
        <Grid container spacing={10}>
            <Grid item>
                <ProjectCard />
            </Grid>
        </Grid>
    )
}
export { Projects }