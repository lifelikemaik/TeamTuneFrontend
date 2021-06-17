import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import TeamTuneIcon from "./TeamTuneIcon";
import GitHubIcon from "@material-ui/icons/GitHub";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";

import KebabMenu from "./KebabMenu";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({

    title: {
        flexGrow: 1,
    },
    button: {
        fontSize: 30,
        flexGrow: 1,
    },
    div: {
        flexGrow: 0.5,
    },
    toolbar: {
        marginLeft: -12,
        flexGrow: 1,
    },
    menuButton: {
        marginRight: -12,
        marginLeft: 'auto',
    }
}));

/**
 * Navigation bar of the app
 * @param {props} props
 */
function Header(props) {
    const classes = useStyles();

    const [menuAnchor, setMenuAnchor] = React.useState(null);

    const user = useSelector((state) => {
        // return the currnetly logged in user from redux store
        return state.user;
    });

    /*const onClickGithub = (event) => {
        var win = window.open(
            "https://github.com/sebischair/seba-master-movie-frontend",
            "_blank"
        );
        win.focus();
    };*/

    return (
        <AppBar position="sticky">
            <Toolbar>
                <KebabMenu
                    className={classes.menuButton}
                    open={Boolean(menuAnchor)}
                    anchor={menuAnchor}
                    onClose={() => setMenuAnchor(null)}
                />
                <IconButton onClick={() => props.history.push("/")} color="inherit"
                >
                    <div style={{ width: 50 }}>
                        <TeamTuneIcon />
                    </div>
                </IconButton>

                {user.user
                    ? [
                        <section className={classes.toolbar}>
                            <Button
                                className={classes.button}
                                color="inherit"
                                onClick={() => props.history.push("/browse")}
                            >
                                Browse
                            </Button>,
                            <Button
                                className={classes.button}
                                color="inherit"
                                onClick={() => props.history.push("/playlists")}
                            >
                                My Playlists
                            </Button>,
                            <Button
                                className={classes.button}
                                color="inherit"
                                onClick={() => props.history.push("/myteamtune")}
                            >
                                My TeamTune
                            </Button>
                        </section>
                    ]
                    : [
                        <section className={classes.toolbar}>
                                                    <Button
                            className={classes.button}
                            color="inherit"
                            onClick={() => props.history.push("/browse")}
                        >
                            Browse
                        </Button>
                        
                            <Button
                                className={classes.button}
                                color="inherit"
                                onClick={() => props.history.push("/login")}
                            >
                                Login
                            </Button>
                            <Button
                                className={classes.button}
                                color="inherit"
                                onClick={() => props.history.push("/register")}
                            >
                                Register
                            </Button>
                        
                        </section>
                    ]}


                {/*<IconButton onClick={onClickGithub} color="inherit">
                    <GitHubIcon/>
                </IconButton>*/}
                <IconButton
                    onClick={(event) => setMenuAnchor(event.currentTarget)}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(Header);
