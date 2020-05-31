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
        }
    }));

// const Languages = (props) => {
//     const profiles = props.array.map((profile, index) =>
//         <ListItem key={index} dense>
//             <Link color='primary' href={profile.url}>{profile.network}</Link>
//         </ListItem>
//     );
//     return (
//         <React.Fragment>
//             {profiles}
//         </React.Fragment>
//     )
// }

const Languages = (props) => {
    const classes = useStyles();
    const context = useContext(StoreContext)

    const languages = context.data[context.language].languages.map((item, index) =>
        <React.Fragment key={index}>
            <ListItem >
                <Typography>
                    {item.language}
                </Typography>
            </ListItem>
            <ListItem className={classes.padBot}>
                <Grid container spacing={1}>
                    <Grid>
                        <Divider orientation='vertical'></Divider>
                    </Grid>
                    {item.scale.map((level, index) => {
                        let gridItem
                        if (index <= item.fluency) {
                            gridItem = (
                                <Grid item >
                                    <Typography color='primary'>{level}</Typography>
                                </Grid>
                            )
                        } else {
                            gridItem = (
                                <Grid item >
                                    <Typography className={classes.weight}>{level}</Typography>
                                </Grid>
                            )
                        }

                        return (
                            <React.Fragment key={index}>
                                <Grid>
                                    <Divider orientation='vertical'></Divider>
                                </Grid>
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
        </React.Fragment>

    );
    return (
        <List className={classes.root}>
            {languages}
        </List >

    );
}

export { Languages }