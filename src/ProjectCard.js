import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions, Chip, Grid } from '@material-ui/core';

const ProjectCard = (props) => {
  return (
    <Card className={'card'}>
      <CardMedia
        component="img"
        alt="Screenshot of project"
        height="100"
        image={'/cv/' + props.imgUrl}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
        <Grid container
          justify='space-evenly'
          flexwrap='wrap'>
          {props.keywords.map((keyword, index) => {
            return (
              <Grid style={{ margin: '0.2rem' }} key={index} item>
                <Chip label={keyword} />
              </Grid>

            )
          })}
        </Grid>
      </CardContent>
      <CardActions style={{ 'justify-content': 'flex-end' }}>
        <Button
          size="small"
          color="primary"
          href={props.demoUrl}
          target="_blank"
          disabled={props.demoUrl === ''}
        >
          Demo
                </Button>
        <Button
          size="small"
          color="primary"
          href={props.codeUrl}
          target="_blank"
        >
          Code
        </Button>
      </CardActions>
    </Card >
  )
}
export { ProjectCard }