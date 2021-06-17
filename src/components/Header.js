import React from "react";
import {withRouter} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Button, IconButton, Toolbar, Divider, Typography} from "@material-ui/core";

import TeamTuneIcon from "./TeamTuneIcon";

import {useSelector} from "react-redux";
import {logout} from "../redux/actions";

const useStyles = makeStyles((theme) => ({

    main_options: {
        fontSize: 25,
        flexGrow: 1,
        paddingLeft: 45,
        paddingRight: 45,
        fontFamily: "Libre Franklin, sans-serif",
    },
    side_options: {
        fontSize: 20,
        flexGrow: 0.8,
        paddingLeft: 15,
        paddingRight: 15,
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    header: {
        paddingRight: 80,
        paddingLeft: 110,
    },
    logo_type: {
        //TODO Font is not applied yet
        fontFamily: "Libre Franklin, sans-serif",
        fontWeight: 900,
    },
}));

/**
 * Navigation bar of the app
 * @param {props} props
 */
function Header(props) {
    const {header, main_options, side_options, toolbar, logo_type} = useStyles();


    const user = useSelector((state) => {
        // return the currently logged in user from redux store
        return state.user;
    });

    const onClickLogout = () => {
        // trigger redux logout action
        logout();
        // navigate to the home page
        props.history.push("/");
    };

    const displayHeader = () => {
        return (
            <Toolbar className={toolbar}>
                {teamTuneLogo}
                <div>
                    {getMenuButtons()}
                </div>
            </Toolbar>
        );
    };

    const logoType = (
        <Typography variant="h4"  classname={logo_type}>
            TeamTune
        </Typography>
    );

    const teamTuneLogo = (
        <IconButton onClick={() => props.history.push("/")} color="inherit"
        >
            <div style={{width: 50}}>
                <TeamTuneIcon/>
            </div>
            {logoType}
        </IconButton>
    );

    const getMenuButtons = () => {
        return <div>
            <section className={toolbar}>
                <Button
                    className={main_options}
                    color="inherit"
                    onClick={() => props.history.push("/browse")}
                >
                    Browse
                </Button>
                {user.user
                    ? [
                        // Buttons to show when user is logged in
                        <Button
                            className={main_options}
                            color="inherit"
                            onClick={() => props.history.push("/playlists")}
                        >
                            My Playlists
                        </Button>,
                        <Button
                            className={main_options}
                            color="inherit"
                            onClick={() => props.history.push("/myteamtune")}
                        >
                            My TeamTune
                        </Button>,
                        <Divider orientation="vertical" flexItem variant="middle"/>,
                        <Button
                            className={side_options}
                            color="inherit"
                            onClick={onClickLogout}
                        >
                            Log out
                        </Button>
                    ]
                    : [
                        // Buttons to show when user is not logged in
                        <Button
                            className={main_options}
                            color="inherit"
                        >
                            Premium
                        </Button>,
                        <Divider orientation="vertical" flexItem variant="middle"/>,
                        <Button
                            className={side_options}
                            color="inherit"
                            onClick={() => props.history.push("/login")}
                        >
                            Log in
                        </Button>,
                        <Button
                            className={side_options}
                            color="inherit"
                            onClick={() => props.history.push("/register")}
                        >
                            Sign up
                        </Button>
                    ]}
            </section>
        </div>

    };

    return (
        <header>
            <AppBar className={header} position="sticky">
                {displayHeader()}
            </AppBar>
        </header>
    );

}

export default withRouter(Header);
