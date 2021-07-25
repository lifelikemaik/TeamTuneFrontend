import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";
import MyTeamTuneAccountComponent from './MyTeamTuneAccountComponent';
import MyTeamTuneSubscriptionComponent from './MyTeamTuneSubscriptionComponent';
import MyTeamTuneDeleteAccountComponent from './MyTeamTuneDeleteAccountComponent';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width: 280,
    },
}));

function VerticalTabs(props) {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                className={classes.tabs}
            >
                <Tab label="Account" {...a11yProps(0)} />
                <Tab label="Subscription" {...a11yProps(1)} />
                <Tab label="Delete TeamTune Account" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <MyTeamTuneAccountComponent user={props.user} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MyTeamTuneSubscriptionComponent user={props.user} />
            </TabPanel>
            <TabPanel value={value} index={2}>

                <MyTeamTuneDeleteAccountComponent
                    user={props.user}
                    onDeleteAccount={props.onDeleteAccount}
                    onUpdateUsername={props.onUpdateUsername}
                    onUpdatePassword={props.onUpdatePassword}
                />
            </TabPanel>
        </div>
    );
}

/**
 * For passing the props to the sub-components that handle different functionalities
 * @param {props} props
 */
function MyTeamTuneComponent(props) {
    return (
        <VerticalTabs
            user={props.user}
            onDeleteAccount={props.onDeleteAccount}
            onUpdateUsername={props.onUpdateUsername}
            onUpdatePassword={props.onUpdatePassword}
        />
    );
}

export default MyTeamTuneComponent;