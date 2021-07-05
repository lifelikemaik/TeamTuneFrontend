import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import { AppBar, Button, IconButton, Toolbar, Divider, Typography } from "@material-ui/core";
import TeamTuneIcon from "./TeamTuneIcon";
import LandingPageImage from "./LandingPageImage";

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
        bgcolor: 'background.paper',
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
}));


/**
 * Landing page and "home" screen of the web app
 * @param {props} props
 */


function LandingPageComponent(props) {

    const classes = useStyles();

    return (
        <div>
            <h1 className={classes.welcomeText}>
                Welcome to the TeamTune App!
            </h1>
            <Typography variant="h5" align="center" flexWrap="wrap" className={classes.welcomeText}>
                TeamTune is a platform that allows people, companies and music enthusiasts to collaboratively create a Spotify playlist for every occasion by merging the different tastes with an intelligent recommender system.
            </Typography>



            <LandingPageImage className={classes.landingPageImage} />
        </div>

    );
}

export default withRouter(LandingPageComponent);