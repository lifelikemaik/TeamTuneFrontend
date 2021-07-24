import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, useHistory } from "react-router-dom";
import { Paper, Button, TextField, Typography, List, Divider, ListItem, ListItemIcon, ListItemText, Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    additionalFeaturesList: {
        backgroundColor: "#cccccc",
        width: '100%',
        maxWidth: 600,
        fontFamily: "Libre Franklin, sans-serif",

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width: 280,
    },
    subscriptionInfo: {
        fontSize: 18,
        fontFamily: "Libre Franklin, sans-serif",
        marginLeft: "auto",
        marginRight: "auto",
    },
    upgradeSubscriptionPaper: {
        backgroundColor: "#cccccc",
        width: "1000px",
        height: "380px",
        fontFamily: "Libre Franklin, sans-serif",
    },
    upgradeSubscriptionPaperHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        fontFamily: "Libre Franklin, sans-serif",
    },
    upgradeSubscriptionRow: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        "&:last-child": {
            paddingBottom: theme.spacing(0),
        },
        "&:first-child": {
            paddingTop: theme.spacing(0),
        },
    },
    upgradeSubscriptionButtons: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    upgradeSubscriptionButton: {
        bottom: -160,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        color: "white",
        backgroundColor: "black",
        width: "40%",
        height: "40px",
        fontSize: 17,
        '&:hover': {
            backgroundColor: "#1db954",
            opacity: "90%",
        },
    },
    cancleSubscriptionButton: {
        bottom: 20,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        color: "white",
        backgroundColor: "black",
        width: "40%",
        height: "40px",
        fontSize: 17,
        '&:hover': {
            backgroundColor: "#1db954",
            opacity: "90%",
        },
    },
    whatYouGet: {
        marginLeft: 20,
        paddingTop: 5,
    },
    whatYouPay: {
        marginLeft: 650,
        marginTop: -262,

    }
}));

/**
 * For presenting and changing the user settings and more
 * @param {props} props
 */
function PremiumFunctionalitiesList(props) {

    const classes = useStyles();
    return (
        <div className={classes.additionalFeaturesList}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem>
                    <ListItemText primary="Invite your friends, colleagues and everyone else to collaborate on your playlist via a shareable link." />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Possibility to make playlists public." />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Control your Spotify® playback directly from TeamTune." />
                </ListItem>
            </List>
        </div>
    );
}

function MyTeamTuneSubscriptionComponent(props) {

    const classes = useStyles();
    const [isPremium, setIsPremium] = React.useState(false);
    const toggle = React.useCallback(() => setIsPremium(!isPremium));

    useEffect(() => {
        setIsPremium(JSON.parse(window.localStorage.getItem('isPremium')));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('isPremium', isPremium);
    }, [isPremium]);

    const onUpgradeSubscription = () => {
        setIsPremium(isPremium => !isPremium);
    };

    return (
        <div className={classes.subscriptionInfo}>
            {!isPremium
                ? [
                    <h1>Your current subscription model: Free</h1>,
                    <Divider orientation="horizontal" />,
                    <h2>Do you want to upgrade to Premium and experience the full TeamTune functionalities?</h2>,
                    <div className={classes.upgradeSubscriptionPaper}>
                        <Paper className={classes.upgradeSubscriptionPaper} component="form">
                            <div className={classes.whatYouGet}>
                                <h2 >What you get:</h2>
                            </div>
                            <div>
                                <PremiumFunctionalitiesList />
                                <Divider orientation="vertical" />
                            </div>
                            <div className={classes.whatYouPay}>
                                <h2>What you pay: 7,99€ / month</h2>
                            </div>
                            <div className={classes.upgradeSubscriptionButtons}>
                                <Grid container justify="flex-end" alignItems="flex-end">
                                    <Button
                                        className={classes.upgradeSubscriptionButton}
                                        isPremium={isPremium}
                                        onClick={() => { props.history.push('/bookpremium'); onUpgradeSubscription() }}
                                    >

                                        Upgrade to Premium
                                    </Button>
                                </Grid>
                                {console.log(isPremium)}
                            </div>
                        </Paper>
                    </div>,
                ]
                : [
                    <h1>Your current subscription model: Premium</h1>,
                    <Divider orientation="horizontal" />,
                    <h2>You are enjoing the full TeamTune functionalities!</h2>,
                    <div className={classes.upgradeSubscriptionButtons}>
                        <Grid container justify="flex-end" alignItems="flex-end">
                            <Button
                                className={classes.cancleSubscriptionButton}
                                onClick={toggle}
                            /*onClick={onUpgradeSubscription}*/
                            >
                                Cancle Premium
                            </Button>
                        </Grid>
                    </div>
                ]}
        </div>
    );
}


export default withRouter(MyTeamTuneSubscriptionComponent);