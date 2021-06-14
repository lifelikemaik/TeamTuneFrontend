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

const useStyles = makeStyles((theme) => ({

    title: {
        flexGrow: 1,
    },
    button: {
        fontSize: 25,
        flexGrow: 0.5,
    }
    
}));

/**
 * Navigation bar of the app
 * @param {props} props
 */
function Header(props) {
    const classes = useStyles();

    const [menuAnchor, setMenuAnchor] = React.useState(null);

    const onClickGithub = (event) => {
        var win = window.open(
            "https://github.com/sebischair/seba-master-movie-frontend",
            "_blank"
        );
        win.focus();
    };

    return (
        <AppBar position="sticky">
            <KebabMenu
                open={Boolean(menuAnchor)}
                anchor={menuAnchor}
                onClose={() => setMenuAnchor(null)}
            />
            <Toolbar className={classes.toolbar}>

                <IconButton onClick={() => props.history.push("/")} color="inherit"
                >
                    <div style={ {width: 50} }>
                        <TeamTuneIcon/>
                    </div>
                </IconButton>



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
                    onClick={() => props.history.push("/playlists")}
                >
                    My Playlists
                </Button>
                <Button
                    className={classes.button}
                    color="inherit"
                    onClick={() => props.history.push("/myteamtune")}
                >
                    My TeamTune
                </Button>
                <IconButton onClick={onClickGithub} color="inherit">
                    <GitHubIcon/>
                </IconButton>
                <IconButton
                    onClick={(event) => setMenuAnchor(event.currentTarget)}
                    color="inherit"
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(Header);
