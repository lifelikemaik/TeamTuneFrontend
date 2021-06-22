import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

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

/**
 * For presenting and changing the user settings and more
 * @param {props} props
 */

function MyTeamTuneSubscriptionComponent(props) {

    const classes = useStyles();

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}
        >
            <h1>The subscription page.</h1>
        </div>
    );
}


export default MyTeamTuneSubscriptionComponent;