import React, { useEffect, useSelector } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Typography } from "@material-ui/core";
import SpotifyLogoWithText from '../../images/SpotifyLogoWithText';


const useStyles = makeStyles((theme) => ({
    changePWRoot: {
        margin: "auto",
    },
    backgroundPaper: {
        backgroundImage: "linear-gradient(to right, rgba(255,255,255, 0.75), rgba(255,255,255, 1), rgba(255,255,255, 1), rgba(255,255,255, 0.75))",
        backgroundColor: 'transparent',
        minWidth: '850px',
        width: '65%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    section: {
        height: 800,
        fontSize: 20,
    },
    changeCredentialsRow: {
        fontFamily: "Libre Franklin, sans-serif",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        "&:last-child": {
            paddingBottom: theme.spacing(0),
        },
        "&:first-child": {
            paddingTop: theme.spacing(0),
        },
    },
    changeCredentialsButtons: {
        display: "flex",
        justifyContent: "flex-end",
    },
    changeCredentialsButton: {
        marginLeft: theme.spacing(1),
        '&:hover': {
            backgroundColor: "#1db954",
            opacity: "90%",
        },
    },
    spotify: {
        backgroundColor: '#1ED760',
        color: '#ffffff',
        fontWeight: 'bold',
        maxHeight: 60,
        marginTop: 15,
        marginLeft: 10,
        letterSpacing: 1,
        fontFamily: 'Libre Franklin, sans-serif',
        borderRadius: 100,
        '&:hover': {
            backgroundColor: '#1ED760',
        },
    },
}));

/**
 * For changing account settings
 * @param {props} props
 */
function MyTeamTuneAccountComponent(props) {
    const classes = useStyles();

    const spotifyLogoText = (
        <Button
            disableRipple
            variant="contained"
            className={classes.spotify}
            endIcon={<SpotifyLogoWithText color={"#ffffff"} />}
            onClick={() =>
                window.open(
                    'https://www.spotify.com/de/account/overview/'
                )
            }
        >
            Switch to
        </Button>
    );

    return (
        <div className={classes.changePWRoot}>
            <Paper className={classes.backgroundPaper}>
                <section className={classes.section}>
                    <div className={classes.changeCredentialsRow}>
                        <Typography variant="h4" align="center">
                            Your account overview
                        </Typography>
                    </div>
                    <div className={classes.changeCredentialsRow}>
                        <h3>Current username: {(props.user.user.username)}</h3>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <h3>Check out your Spotify® account:</h3>
                        {spotifyLogoText}
                    </div>
                </section>
            </Paper>
        </div>
    );
}

export default MyTeamTuneAccountComponent;