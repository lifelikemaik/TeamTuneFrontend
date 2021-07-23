import React, { useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Card, CardActions, CardContent, Grid, List, Divider, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import LandingPageImage from "./LandingPageImage";
import TeamTuneOverviewImage from "./TeamTuneOverviewImage";

import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center",
        alignItems: "center",
    },
    cardRoot: {
        width: 900,
        height: 400,
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: 20,
        backgroundColor: "#cccccc",
    },
    gridRoot: {
        flexGrow: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cardHeader: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Libre Franklin, sans-serif",
    },
    cardText: {
        display: "flex",
        alignItems: "flex-end",
        fontFamily: "Libre Franklin, sans-serif",
    },
    landingPageImage: {
        width: '60%',
        marginLeft: 340,
        marginTop: -140,
        padding: theme.spacing(5),
    },
    headLines: {
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Libre Franklin, sans-serif",
    },
    subscriptionModelHeader: {
        marginTop: 20,
        marginBottom: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Libre Franklin, sans-serif",
    },
    welcomeTextLine: {
        marginTop: 10,
    },
    welcomeTextBox: {
        width: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    additionalFeaturesList: {
        width: '100%',        
        fontFamily: "Libre Franklin, sans-serif",
        backgroundColor: "#cccccc",
    },
    section1: {
        height: 700,
        fontSize: 20,
    },
    section2: {
        height: 930,
        fontSize: 20,
        alignItems: "center",
    },
    section3: {
        height: 800,
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    teamTuneOverviewImage: {
        marginLeft: 270,
        marginTop: -20,
    },
    tryItButtons: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    },
    tryItButton: {
        marginLeft: theme.spacing(1),
        marginTop: -10,
        width: "15%",
        height: "50px",
        fontSize: 17,
        color: "white",
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "#1db954",
            opacity: "90%",
        },
    },
    cardButton: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        width: "30%",
        height: "40px",
        fontSize: 17,
        color: "white",
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "#1db954",
            opacity: "90%",
        },
    },
}));


function FreeFunctionalitiesList(props) {

    const classes = useStyles();
    return (
        <div className={classes.additionalFeaturesList}>
            <List component="nav">
                <ListItem>
                    <ListItemText primary= "Create new Spotify® playlists based on various music parameters" />
                </ListItem>                                
                <Divider />
                <ListItem>
                    <ListItemText primary="Mirroring of all your own playlists in your Spotify® account and those you are following" />
                </ListItem>
                <Divider />                   
                <ListItem>
                    <ListItemText primary="Create copies of Spotify® playlists (your own and those you are following) and of public TeamTune playlits" />
                </ListItem>
            </List>
        </div>
    );
}

function PremiumFunctionalitiesList(props) {

    const classes = useStyles();
    return (
        <div className={classes.additionalFeaturesList}>
            <List component="nav">
                <ListItem>
                    <ListItemText primary="Invite your friends, colleagues and everyone else to collaborate on your playlist via a shareable link" />
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

/**
 * Landing page and "home" screen of the web app
 * @param {props} props
 */

function SubscriptionCardFree(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•&nbsp;</span>;

    return (
        <Card className={classes.cardRoot} variant="outlined">
            <CardContent >
            <h4 className={classes.cardHeader} style={{textDecorationLine: 'underline'}}>
                TeamTune Free
            </h4>
            <FreeFunctionalitiesList />
            </CardContent>
            <CardActions>
                <Button className={classes.cardButton}
                    onClick={() => props.props.history.push('/register')}>
                    Go Free
                </Button>
            </CardActions>
        </Card>
    );
}

function SubscriptionCardPremium(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•&nbsp;</span>;

    return (
        <Card className={classes.cardRoot} variant="outlined">
            <CardContent >
            <h4 className={classes.cardHeader} style={{textDecorationLine: 'underline'}}>
                TeamTune Premium
            </h4>
            <PremiumFunctionalitiesList />
            </CardContent>
            <CardActions>
                <Button
                    className={classes.cardButton}
                    onClick={() => props.props.history.push('/bookpremium')}>
                    {/*console.log(props)*/}
                    Go Premium
                </Button>
            </CardActions>
        </Card>
    );
}



function LandingPageComponent(props) {

    const classes = useStyles();

    return (
        <div>
            <section className={classes.section1}>
                <h1 className={classes.headLines}>
                    Welcome to the TeamTune App!
                </h1>
                <Typography variant="h5" align="center" flexWrap="wrap" className={classes.welcomeText}>
                    TeamTune is a platform that allows people, companies and music enthusiasts to collaboratively create a Spotify playlist for every occasion by merging the different tastes with an intelligent recommender system.
                </Typography>
                <LandingPageImage className={classes.landingPageImage} />
            </section>
            <Divider variant="middle" />
            <section className={classes.section2}>
                <h1 className={classes.headLines}>
                    How does it work?
                </h1>
                <TeamTuneOverviewImage className={classes.teamTuneOverviewImage} />
                <h2 className={classes.headLines}>
                    Interested? {'\n'} Waste no time and get started!
                </h2>

                <div className={classes.tryItButtons}>
                    <Button
                        className={classes.tryItButton}
                        onClick={() => props.history.push('/register')}>
                        {/*console.log(props)*/}
                        LET´S GET STARTED
                    </Button>
                    {/*console.log(props.history.location.pathname)*/}
                </div>
            </section>
            <Divider variant="middle" />
            <section className={classes.section3}>
                <h1 className={classes.headLines}>
                    What you get
                </h1>
                <h3 className={classes.subscriptionModelHeader}>
                    You can choose between a Free and a Premium model:
                </h3>
                <div className={classes.gridRoot}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <SubscriptionCardFree props={props} />
                        </Grid>
                        <Grid item xs={1}>
                            <SubscriptionCardPremium props={props} />
                        </Grid>
                    </Grid>
                </div>
            </section>
        </div>

    );
}

LandingPageComponent.propTypes = {
    FreeFunctionalitiesList: PropTypes.func,
    PremiumFunctionalitiesList: PropTypes.func,
    SubscriptionCardFree: PropTypes.func,
    SubscriptionCardPremium: PropTypes.func,
};

export default withRouter(LandingPageComponent);