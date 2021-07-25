import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter} from "react-router-dom";
import { Paper, Button, List, Divider, ListItem, ListItemText, Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    additionalFeaturesList: {
        paddingLeft: 10,
        width: '100%',
        maxWidth: 470,
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
        backgroundColor: "rgba(150,255,211, 0.15)",
        width: "1000px",
        height: "420px",
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
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 100,
        display: 'flex',
        fontSize: 17,
        paddingLeft: 20,
        paddingRight: 20,
        color: "#96ffd3",
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "#62D2A2",
            color: "#000000",
            opacity: "90%",
        },
    },
    cancleSubscriptionButton: {
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 100,
        display: 'flex',
        fontSize: 17,
        paddingLeft: 20,
        paddingRight: 20,
        color: "#96ffd3",
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "#62D2A2",
            color: "#000000",
            opacity: "90%",
        },
    },
    flexRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    flexColumn: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        textAlign: "center",
    }
}));

/**
 * For presenting and changing the subscription model
 * @param {props} props
 */
function PremiumFunctionalitiesList(props) {

    const classes = useStyles();
    return (
        <div className={classes.additionalFeaturesList}>
            <List component="nav">
                <ListItem>
                    <ListItemText primary="All TeamTune Free functionalities." />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Top up your unfinished playlist to your preferred length based on smart recommendations." />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Make TeamTune playlists public - let other´s enjoy your music!" />
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
    const [isPremium, setIsPremium] = React.useState(true);
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
                    <h2>Do you want to upgrade to Premium (coming soon) and experience the full TeamTune functionalities?</h2>,
                    <div className={classes.upgradeSubscriptionPaper}>
                        <Paper className={classes.upgradeSubscriptionPaper} component="form">
                            <div className={classes.flexRow}>
                                <div className={classes.flexColumn}>
                                    <h2 >What you get:</h2>
                                </div>
                                <div className={classes.flexColumn}>
                                    <h2>What you pay: 7,99€ / month</h2>
                                </div>
                            </div>
                            <div className={classes.Column}>
                                <PremiumFunctionalitiesList />
                                <Divider orientation="vertical" />
                            </div>
                            <div className={classes.flexRow}>

                            </div>
                            <div className={classes.upgradeSubscriptionButtons}>
                                <Button
                                    className={classes.upgradeSubscriptionButton}
                                    isPremium={isPremium}
                                    onClick={() => { props.history.push('/bookpremium'); onUpgradeSubscription() }}
                                >
                                    Upgrade to Premium
                                </Button>
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