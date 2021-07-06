import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, TextField, Typography, List, Divider, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    additionalFeaturesList: {
        width: '100%',
        maxWidth: 360,
        fontFamily: "Libre Franklin, sans-serif",
        backgroundColor: theme.palette.background.paper,
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
        width: "900px",
        height: "380px",
        padding: theme.spacing(5),
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
    upgradeSubscriptionButton: {
        marginTop: 50,
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
    upgradeSubscriptionButtons: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    },
    whatYouPay: {
        marginLeft: 500,
        marginTop: -245,

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
                    <ListItemText primary="Additional Feature 1" />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Additional Feature 2" />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Additional Feature 3" />
                </ListItem>
            </List>
        </div>
    );
}



function MyTeamTuneSubscriptionComponent(props) {

    const classes = useStyles();


    const [isPremium, setIsPremium] = React.useState(false);
    const toggle = React.useCallback(() => setIsPremium(!isPremium));
    /*var isPremium = false;*/
    
  
    
    const onUpgradeSubscription = () => {
        setIsPremium(isPremium => !isPremium);
        console.log(isPremium);
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
                            <div>
                                <h2>What you get:</h2>
                                <PremiumFunctionalitiesList />
                                <Divider orientation="vertical" />
                            </div>
                            <div className={classes.whatYouPay}>
                                <h2>What you pay:</h2>
                                <h2>XX,XX€</h2>
                            </div>
                        </Paper>
                    </div>,
                    <div className={classes.upgradeSubscriptionButtons}>
                        <Button
                            className={classes.upgradeSubscriptionButton}
                            isPremium={isPremium}
                            onClick={onUpgradeSubscription}
                        /*onClick={onUpgradeSubscription}*/
                        >
                            Upgrade to Premium
                        </Button>
                    </div>

                ]
                : [
                    <h1>Your current subscription model: Premium</h1>,
                    <Divider orientation="horizontal" />,
                    <h2>You are enjoing the full TeamTune functionalities!</h2>,
                    <div className={classes.upgradeSubscriptionButtons}>
                        <Button
                            className={classes.upgradeSubscriptionButton}
                            onClick={toggle}
                        /*onClick={onUpgradeSubscription}*/
                        >
                            Cancle Premium
                        </Button>
                    </div>
                ]}
        </div>
    );
}


export default MyTeamTuneSubscriptionComponent;