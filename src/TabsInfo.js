import React, { useState, useContext } from 'react';
import { Paper, Tabs, Tab, useTheme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import PaletteIcon from '@material-ui/icons/Palette';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import { StoreContext } from './Store';
import { styles } from './styles';
import { Projects } from './Projects'
import { TabPanel } from './TabPanel';
import SwipeableViews from 'react-swipeable-views';

const TabsInfo = () => {
    const context = useContext(StoreContext)
    const classes = styles();
    const theme = useTheme();

    const [value, setValue] = useState(0);
    const colors = ['#e91e63', '#0097a7', '#2196f3', '#ffea00']


    const handleChange = (event, newValue) => {
        setValue(newValue);


        context.setPrimaryColor(colors[newValue])
    };

    const handleChangeIndex = (index) => {
        setValue(index);
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
                <Tab icon={<CodeIcon />} label="Projects" />
                <Tab icon={<SchoolIcon />} label="Education" />
                <Tab icon={<WorkIcon />} label="Experience" />
                <Tab icon={<PaletteIcon />} label="Skills" />
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    Item Four
                </TabPanel>
            </SwipeableViews>
        </Paper >
    );
}

export { TabsInfo }