import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, CardActions } from '@material-ui/core';

const ProjectCard = (props) => {
    return (
        <Card className={'card'}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Screenshot of project"
                    height="100"
                    image={props.imgUrl}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={props.demoUrl}>
                    Demo
                </Button>
                <Button size="small" color="primary" href={props.codeUrl}>
                    Code
                </Button>
            </CardActions>
        </Card>
    )
}
export { ProjectCard }