import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    name: {
        fontSize: '1.6rem',
    },
    label: {
        fontSize: '1.2rem',
    }
}));

const Profiles = (props) => {
    const profiles = props.array.map((profile, index) =>
        <ListItem key={index} dense>
            <Link href={profile.url}>{profile.network}</Link>
        </ListItem>
    );
    return (
        <React.Fragment>
            {profiles}
        </React.Fragment>
    )
}

const PersonalInfo = (props) => {
    const classes = useStyles();



    return (
        <List className={classes.root}>
            <ListItem divider>
                <ListItemAvatar style={{ paddingRight: '1rem' }}>
                    <Avatar src={`/${props.data.picture}`} style={{ height: '6rem', width: '6rem' }}>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText classes={{
                    primary: classes.name,
                    secondary: classes.label
                }} primary={props.data.name} secondary={props.data.label} />
            </ListItem>
            <ListItem dense >
                <ListItemText primary="About me" secondary={props.data.summary}>

                </ListItemText>

            </ListItem>
            <ListItem dense >
                <Link href={props.data.website} >{props.data.website}</Link>
            </ListItem>
            <ListItem dense >
                <ListItemText primary="E-mail:" secondary={props.data.email} />
            </ListItem>
            <ListItem dense >
                <ListItemText primary="Phone" secondary={props.data.phone} />
            </ListItem>

            <Profiles array={props.data.profiles} />
        </List >
    );
}

export { PersonalInfo }