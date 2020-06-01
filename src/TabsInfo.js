import React, { useState, useContext } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import { StoreContext } from './Store';
import { styles } from './styles';
const TabsInfo = () => {
    const context = useContext(StoreContext)
    const classes = styles;

    const [value, setValue] = useState(0);
    const colors = ['#e91e63', '#0097a7'
        , '#2196f3'
    ]

    const handleChange = (event, newValue) => {
        setValue(newValue);
        context.setPrimaryColor(colors[newValue])

    };

    return (
        <Paper square className={classes.root}>
            <Tabs
                className={classes.root}
                value={value}
                onChange={handleChange}
                centered
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab icon={<CodeIcon />} label="Projects">

                </Tab>
                <Tab icon={<SchoolIcon />} label="Education" />
                <Tab icon={<WorkIcon />} label="Experience" />
            </Tabs>
        </Paper>
    );
}

export { TabsInfo }