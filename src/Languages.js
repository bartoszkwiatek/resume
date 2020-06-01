import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Typography, Grid, Divider } from '@material-ui/core';
import { StoreContext } from './Store';
import { styles } from './styles';

const Languages = () => {
    const classes = styles();
    const context = useContext(StoreContext)

    const languages = context.data[context.language].languages.map((item, index) =>
        <List key={index}>

            <ListItem >
                <Typography >
                    {item.language}
                </Typography>
            </ListItem>
            <ListItem className={classes.padBot}>
                <Grid
                    container
                    justify='space-between'
                    spacing={1}
                    wrap='nowrap'
                >
                    <Grid>
                        <Divider orientation='vertical'></Divider>
                    </Grid>
                    {item.scale.map((level, index) => {
                        let gridItem
                        if (index <= item.fluency) {
                            gridItem = (
                                <Grid item className={classes.borderColor}>
                                    <Typography color='primary'>{level}</Typography>
                                </Grid>
                            )
                        } else {
                            gridItem = (
                                <Grid item className={classes.borderColor}>
                                    <Typography className={classes.weight}>{level}</Typography>
                                </Grid>
                            )
                        }
                        return (
                            <React.Fragment key={index}>
                                {gridItem}
                                <Grid>
                                    <Divider orientation='vertical'></Divider>
                                </Grid>
                            </React.Fragment>
                        )
                    }
                    )}
                </Grid>
            </ListItem>
        </List >

    );
    return (
        <React.Fragment>
            <List className={classes.root}>
                {languages}
            </List >
        </React.Fragment>

    );
}

export { Languages }