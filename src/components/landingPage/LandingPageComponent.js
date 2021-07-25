import React, { useEffect, useRef, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
    Button,
    Typography,
    Card,
    CardActions,
    CardContent,
    List,
    Divider,
    ListItem,
    ListItemText,
    Paper,
    Grid, Fab
} from "@material-ui/core";
import LandingPageTopImage from "../../images/LandingPageTopImage.png";
import { motion } from "framer-motion";

import SpotifyLogoWithText from "../../images/SpotifyLogoWithText";
import FriendsIcon from "../../images/FriendsIcon";
import TuneIcon from '@material-ui/icons/Tune';
import ShareIcon from '@material-ui/icons/Share';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import FreeIcon from "../../images/FreeIcon";
import PremiumIcon from "../../images/PremiumIcon";
import TeamTuneDescription from "../../images/TeamTuneDescription";

const useStyles = makeStyles((theme) => ({
    cardRoot: {
        height: 600,
        maxWidth: 450,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "rgba(150,255,211, 0.15)",
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
        width: '80%',
        padding: theme.spacing(5),
    },
    headLines: {
        marginTop: 30,
        fontSize: 70,
        fontWeight: 500,
        display: "flex",
        justifyContent: "center",
        fontFamily: "Libre Franklin, sans-serif",
    },
    welcomeText: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',
        display: "flex",
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 30,
        justifyContent: "center",
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
    },
    section: {
        height: (window.screen.height),
        fontSize: 20,
    },
    tryItButtons: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    },
    standardButton: {
        height: "50px",
        fontSize: 17,
        width: 200,
        variant: "outlined",
        borderRadius: 100,
        color: "#96ffd3",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "#62D2A2",
            color: "#000000",
            opacity: "90%",
        },
    },
    startButton: {
        width: 300,
    },
    cardButtonsFree: {
        justifyContent: "center",
        alignItems: "center",
    },
    cardButtonsPremium: {
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundPaper: {
        backgroundImage: "linear-gradient(to right, rgba(255,255,255, 0.75), rgba(255,255,255, 1), rgba(255,255,255, 1), rgba(255,255,255, 0.75))",
        backgroundColor: 'transparent',
        minWidth: '850px',
        width: '65%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    flexRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    flexColumn: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        textAlign: "center",
    },
    spacing: {
        margin: 20,
    },
    icon: {
        height: 100,
    },
    features: {
        height: 510,
    },
    fab: {
        margin: 0,
        top: 'auto',
        right: 40,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    },
}));

/**
 * Landing page and "home" screen of the web app
 * @param {props} props
 */
function FreeFunctionalitiesList(props) {
    const classes = useStyles();
    return (
        <div className={classes.additionalFeaturesList}>
            <List component="nav">
                <ListItem>
                    <ListItemText primary="Create new Spotify® playlists based on various music parameters." />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Mirroring of all your own playlists in your Spotify® account and those you are following." />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Create copies of Spotify® playlists (your own and those you are following) and of public TeamTune playlits." />
                </ListItem>
            </List>
        </div>
    );
}

function PremiumFunctionalitiesList() {
    const classes = useStyles();
    return (
        <div className={classes.additionalFeaturesList}>
            <List component="nav">
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
            <div className={classes.flexRow}>
                <h3>7,99€ / Month</h3>
            </div>

        </div>
    );
}

/**
 * Landing page and "home" screen of the web app
 * @param {props} props
 */
function LandingPageComponent(props) {
    const classes = useStyles();

    const startRef = useRef(null);
    const featuresRef = useRef(null);
    const pricingRef = useRef(null);
    const instructionsRef = useRef(null);
    const endSectionRef = useRef(null);

    const executeScrollStart = () => startRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const executeScrollFeatures = () => featuresRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const executeScrollPricing = () => pricingRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const executeScrollInstructions = () => instructionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const executeScrollEndSection = () => endSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    const user = useSelector((state) => {
        // return the currently logged in user from redux store
        return state.user;

    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (user.user) {
            setIsLoggedIn(isLoggedIn => !isLoggedIn);
        }
    }, [user, props.history]);


    const SubscriptionCardPremium = () => {
        const bull = <span className={classes.bullet}>•&nbsp;</span>;

        return (
            <Card className={classes.cardRoot} variant="outlined">
                <CardContent className={classes.features}>
                    <h4 className={classes.cardHeader} style={{ textDecorationLine: 'underline' }}>
                        TeamTune Premium
                    </h4>
                    <div className={classes.flexRow}>
                        <PremiumIcon className={classes.icon}/>
                    </div>
                    <PremiumFunctionalitiesList />
                </CardContent>
                <CardActions className={classes.cardButtonsPremium} >
                    <Button
                        className={classes.standardButton}
                        onClick={() => props.history.push('/bookpremium')}>
                        Go Premium
                    </Button>
                </CardActions>
            </Card>
        );
    }

    const SubscriptionCardFree = () => {
        return (
            <Card className={classes.cardRoot} variant="outlined">
                <CardContent className={classes.features}>
                    <h4 className={classes.cardHeader} style={{ textDecorationLine: 'underline' }}>
                        TeamTune Free
                    </h4>
                    <div className={classes.flexRow}>
                        <FreeIcon className={classes.icon}/>
                    </div>
                    <FreeFunctionalitiesList />
                </CardContent>
                <CardActions className={classes.cardButtonsFree}>
                    <Button
                        className={classes.standardButton}
                        onClick={() => props.history.push('/register')}>
                        Go Free
                    </Button>
                </CardActions>
            </Card>
        );
    }

    const features = () => {
        return (
            <section className={classes.section} id="section2">
                <div className={classes.spacing}>
                    <h1 className={classes.headLines}>
                        Features
                    </h1>
                    <Grid container spacing={10}>
                        <Grid container item spacing={-5}>
                            <React.Fragment>
                                <Grid item xs={4}>
                                    <div className={classes.flexRow}>
                                        <SpotifyLogoWithText color={"#191414"}/>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className={classes.flexRow}>
                                        <TuneIcon fontSize={"large"} />
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className={classes.flexRow}>
                                        <FriendsIcon fontSize={"large"} />
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className={classes.flexColumn}>
                                        <h4>Connected to Spotify in real time</h4>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className={classes.flexColumn}>
                                        <h4>Customize the settings of your playlist</h4>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className={classes.flexColumn}>
                                        <h4>Invite your Friends to join your Playlist</h4>
                                    </div>
                                </Grid>
                            </React.Fragment>
                        </Grid>
                        <Grid container item spacing={2}>
                            <React.Fragment>
                                <Grid item xs={4}>
                                    <div className={classes.flexRow}>
                                        <ArtTrackIcon fontSize={"large"} />
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className={classes.flexRow}>
                                        <ShareIcon fontSize={"large"} />
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className={classes.flexRow}>
                                        <PlayArrowIcon fontSize={"large"} />
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className={classes.flexColumn}>
                                        <h4>Explore public playlists of other TeamTune users</h4>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className={classes.flexColumn}>
                                        <h4>Share your TeamTune playlists with the community</h4>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className={classes.flexColumn}>
                                        <h4>Directly start your music from your device</h4>
                                    </div>
                                </Grid>
                            </React.Fragment>
                        </Grid>
                    </Grid>
                </div>
            </section>
        )
    }

    const pricing = () => {
        return (
            <div>
                <div className={classes.spacing}>
                    <h1 className={classes.headLines}>
                        Pricing
                    </h1>
                    <h3 className={classes.subscriptionModelHeader}>
                        Choose between our Free and Premium model (coming soon):
                    </h3>
                    <div className={classes.flexRow}>
                        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                            <SubscriptionCardFree />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                            <SubscriptionCardPremium />
                        </motion.div>
                    </div>
                </div>

            </div>
        )
    }

    const instructions = () => {
        return (
            <div>
                <h1 className={classes.headLines}>
                    How does it work?
                </h1>
                <div className={classes.flexRow}>
                    <TeamTuneDescription className={classes.spacing} />
                </div>
            </div>
        )
    }

    const endSection = () => {
        return (
            <div>
                <h1 className={classes.headLines}>
                    Interested?
                </h1>
                <div className={classes.tryItButtons}>
                    {isLoggedIn
                        ? <Button
                            className={classes.standardButton + " " + classes.startButton}

                            onClick={() => props.history.push('/playlists')}>
                            LET'S GET STARTED
                        </Button>
                        : <Button
                            className={classes.standardButton + " " + classes.startButton}

                            onClick={() => props.history.push('/register')}>
                            LET'S GET STARTED
                        </Button>
                    }

                </div>
            </div>
        )
    }


    return (
        <Paper className={classes.backgroundPaper}>
            <Fab className={classes.fab} onClick={executeScrollStart} color="secondary" aria-label="edit">
                <ArrowUpwardRoundedIcon/>
            </Fab>
            <div>
                <section className={classes.section} ref={startRef}>
                    <Typography className={classes.headLines}>
                        Welcome to TeamTune
                    </Typography>
                    {/*
                    <Typography align="center" flexWrap="wrap" className={classes.welcomeText}>
                        TeamTune is a platform that allows people, companies and music enthusiasts to collaboratively create a Spotify playlist for every occasion by merging the different tastes with an intelligent recommender system.
                    </Typography>
                    */}
                    <div className={classes.flexRow}>
                        <img className={classes.landingPageImage} src={LandingPageTopImage} />
                    </div>
                    <Typography align="center" flexWrap="wrap" className={classes.welcomeText}>
                        Create the perfect Playlist by defining its Music Style and inviting your Friends to join you!
                    </Typography>
                    <div className={classes.flexRow}>
                        <Button className={classes.standardButton} onClick={executeScrollFeatures}>
                            Features
                        </Button>
                        <Button className={classes.standardButton} onClick={executeScrollPricing}>
                            Pricing
                        </Button>
                        <Button className={classes.standardButton} onClick={executeScrollInstructions}>
                            Information
                        </Button>
                    </div>
                </section>
                <Divider variant="middle" />
                <section className={classes.section} ref={featuresRef}>
                    {features()}
                </section>
                <Divider variant="middle" />
                <section className={classes.section} ref={pricingRef}>
                    {pricing()}
                </section>
                <Divider variant="middle" />
                <section className={classes.section} ref={instructionsRef}>
                    {instructions()}
                </section>
                <Divider variant="middle" />
                <section className={classes.section} ref={endSectionRef}>
                    {endSection()}
                </section>
            </div>
        </Paper>
    );
}

LandingPageComponent.propTypes = {
    FreeFunctionalitiesList: PropTypes.func,
    PremiumFunctionalitiesList: PropTypes.func,
    SubscriptionCardFree: PropTypes.func,
    SubscriptionCardPremium: PropTypes.func,
};

export default withRouter(LandingPageComponent);