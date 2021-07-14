import React, { useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import { AppBar, Button, IconButton, Toolbar, Divider, Typography } from "@material-ui/core";
import TeamTuneIcon from "./TeamTuneIcon";
import LandingPageImage from "./LandingPageImage";
import TeamTuneOverviewImage from "./TeamTuneOverviewImage";

import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {

        justifyContent: "center",
        alignItems: "center",
    },
    landingPageImage: {
        width: '60%',
        marginLeft: 340,
        marginTop: -140,
        padding: theme.spacing(5),

    },
    welcomeText: {
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Libre Franklin, sans-serif",
    },
    subscriptionModelHeader: {
        marginTop: 20,
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
        height: 1000,
        fontSize: 20,
        alignItems: "center",
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
}));


/**
 * Landing page and "home" screen of the web app
 * @param {props} props
 */

function LandingPageComponent(props) {

    const classes = useStyles();

    return (
        <div>
            <section className={classes.section1}>
                <h1 className={classes.welcomeText}>
                    Welcome to the TeamTune App!
                </h1>
                <Typography variant="h5" align="center" flexWrap="wrap" className={classes.welcomeText}>
                    TeamTune is a platform that allows people, companies and music enthusiasts to collaboratively create a Spotify playlist for every occasion by merging the different tastes with an intelligent recommender system.
                </Typography>
                <LandingPageImage className={classes.landingPageImage} />
            </section>
            <Divider variant="middle" />
            <section className={classes.section2}>
                <h1 className={classes.welcomeText}>
                    How does it work?
                </h1>
                <TeamTuneOverviewImage className={classes.teamTuneOverviewImage} />
                <h2 className={classes.welcomeText}>
                    Interested? {'\n'} Waste no time and get started!
                </h2>
                
                <div className={classes.tryItButtons}>
                    <Button
                        className={classes.tryItButton}
                        onClick={() => props.history.push('/register')}>
                        LET´S GET STARTED
                    </Button>
                </div>
            </section>
            <Divider variant="middle" />
            <section className={classes.section3}>
                <h1 className={classes.welcomeText}>
                    What you get
                </h1>
                <h3 className={classes.subscriptionModelHeader}>
                    You can choose between the Free and the TeamTune Premium model:
                </h3>
            </section>
        </div>

    );
}

export default withRouter(LandingPageComponent);