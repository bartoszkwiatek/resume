import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { StoreContext } from './Store';
import { ProjectCard } from './ProjectCard';

const Projects = (props) => {
  const context = useContext(StoreContext);
  return (
    <div style={{ padding: 10 }}>
      <Grid container spacing={5}>
        {context.data[context.language].projects.map((project, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} align="center" key={index}>
              <ProjectCard
                title={project.title}
                description={project.summary}
                imgUrl={project.img}
                demoUrl={project.demo}
                codeUrl={project.code}
                keywords={project.keywords} />
            </Grid>
          )
        })}
      </Grid>
    </div >
  )
}
export { Projects }