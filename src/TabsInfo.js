import React, { useState, useContext, useMemo, forwardRef } from 'react';
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
import { BrowserRouter } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';


// const RoutingLink(props) {
//     const { icon, label, to } = props;

//     const renderLink = useMemo(
//         () => forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
//         [to],
//     );

//     return (
//         <React.Fragment>
//             <Tab button component={renderLink} />

//         </React.Fragment>
//     );
// }


const TabsInfo = () => {
    const context = useContext(StoreContext)
    const classes = styles();
    const theme = useTheme();

    const [value, setValue] = useState(0);
    const colors = ['#e91e63', '#0097a7', '#2196f3', '#fdd835']




    const handleChange = (event, newValue) => {
        setValue(newValue);
        context.setPrimaryColor(colors[newValue])
    };

    const handleChangeIndex = (index) => {
        setValue(index);
        context.setPrimaryColor(colors[index])

    };

    return (
        <Paper square className={classes.root}>
            <BrowserRouter>
                <Tabs
                    className={classes.root}
                    value={value}
                    onChange={handleChange}
                    centered
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab icon={<CodeIcon />} label="Projects" component={RouterLink} to="/" />
                    <Tab icon={<SchoolIcon />} label="Education" component={RouterLink} to="/education" />
                    <Tab icon={<WorkIcon />} label="Experience" component={RouterLink} to="/experience" />
                    <Tab icon={<PaletteIcon />} label="Skills" component={RouterLink} to="/skills" />
                </Tabs>
            </BrowserRouter>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Projects />
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