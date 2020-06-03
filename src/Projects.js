import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { StoreContext } from './Store';
import { ProjectCard } from './ProjectCard';

const Projects = () => {
    const context = useContext(StoreContext);
    return (
        <div style={{ padding: 20 }} >
            <Grid container spacing={10}>
                {context.data[context.language].projects.map((project, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} align="center" key={index}>
                            <ProjectCard
                                title={project.title}
                                description={project.summary}
                                imgUrl={`/${project.title}`}
                                demoUrl={project.demo}
                                codeUrl={project.code}
                                keyword={project.keywords} />
                        </Grid>
                    )
                })}

            </Grid>
        </div >
    )
}
export { Projects }