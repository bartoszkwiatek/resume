import React, { useContext } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { StoreContext } from './Store'
import { ProjectCard } from './ProjectCard'
import { pink } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
      paddingBottom: theme.spacing(3),
      // backgroundColor: pink[100],
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(3),
    },
  },
}))

const Projects = (props) => {
  const context = useContext(StoreContext)
  const classes = useStyles()
  return (
    <div>
      <Grid container>
        {context.data[context.language].projects.map((project, index) => {
          return (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              align="center"
              className={classes.root}
              key={index}
            >
              <ProjectCard
                title={project.title}
                description={project.summary}
                imgUrl={project.img}
                demoUrl={project.demo}
                codeUrl={project.code}
                keywords={project.keywords}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
export { Projects }
