import React, { useContext } from 'react';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link, Typography, Grid, GridListTile, Divider } from '@material-ui/core';
import { StoreContext } from './Store';


const useStyles = makeStyles((theme) => (
    {
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: '',
        },
        primaryBackground: {
            backgroundColor: theme.palette.primary.main,
        },
        padBot: {
            paddingBottom: '1rem',
        },
        weight: {
            fontWeight: 100,
        },
        header: {
            paddingTop: '1.5rem',
            fontSize: '1.2rem'
        }
    }));

const Languages = () => {
    const classes = useStyles();
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
            <Typography className={classes.header} variantMapping={{ h3: "h3" }}>Languages</Typography>

            <List className={classes.root}>
                {languages}
            </List >
        </React.Fragment>

    );
}

export { Languages }