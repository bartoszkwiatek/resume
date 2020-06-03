import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { StoreContext } from './Store';
import { ProjectCard } from './ProjectCard';

const Education = (props) => {
    const { children, value, index, ...other } = props;
    const context = useContext(StoreContext);
    return (
        <div style={{ padding: 20 }}
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            {...other}>
            <Grid container spacing={10}>
                {value === index && (

                    context.data[context.language].projects.map((project, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={3} align="center" key={index}>
                                empty
                            </Grid>
                        )
                    })
                )}
            </Grid>

        </div >
    )
}
export { Education }