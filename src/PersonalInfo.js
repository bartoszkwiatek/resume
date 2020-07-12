import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from '@material-ui/core';
import { StoreContext } from './Store';
import { styles } from './styles';

const Profiles = (props) => {
  const profiles = props.profilesArray.map((profile, index) =>
    <ListItem key={index} dense>
      <Link color='primary' href={profile.url}>{profile.network}</Link>
    </ListItem>
  );
  return (
    <React.Fragment>
      {profiles}
    </React.Fragment>
  )
}

const PersonalInfo = () => {
  const context = useContext(StoreContext)
  const basics = context.data[context.language].basics
  const classes = styles();

  return (
    <List className={classes.root}>
      <ListItem divider>
        <ListItemAvatar style={{ paddingRight: '1rem' }}>
          <Avatar src={``} style={{ height: '6rem', width: '6rem' }}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText classes={{
          primary: classes.name,
          secondary: classes.label
        }} primary={basics.name} secondary={basics.label} />
      </ListItem>
      <ListItem dense >
        <ListItemText primary="About me" secondary={basics.summary} />
      </ListItem>
      <ListItem dense >
        <Link fontWeight="300" href={basics.website} >{basics.website}</Link>
      </ListItem>
      <ListItem dense >
        <ListItemText primary="E-mail:" secondary={basics.email} />
      </ListItem>
      <ListItem dense >
        <ListItemText primary="Phone" secondary={basics.phone} />
      </ListItem>
      <Profiles profilesArray={basics.profiles} />
    </List >
  );
}

export { PersonalInfo }