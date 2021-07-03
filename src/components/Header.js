import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Button, IconButton, Toolbar, Divider, Typography, Drawer, MenuItem, Link} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
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
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    logo_type: {
        fontFamily: "Libre Franklin, sans-serif",
    },
    icon_type: {
        marginLeft: 100,
    },
    drawerContainer: {
        padding: "20px 30px",
    },
}));

/**
 * Navigation bar of the app
 * @param {props} props
 */
function Header(props) {
    const {header, main_options, side_options, toolbar, logo_type, icon_type, drawerContainer} = useStyles();


    const user = useSelector((state) => {
        // return the currently logged in user from redux store
        return state.user;
    });

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const {mobileView, drawerOpen} = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({...prevState, mobileView: true}))
                : setState((prevState) => ({...prevState, mobileView: false}));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const onClickLogout = () => {
        // trigger redux logout action
        logout();
        // navigate to the home page
        props.history.push("/");
    };

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {teamTuneLogo}
                <div>
                    {getMenuButtons()}
                </div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({...prevState, drawerOpen: true}));
        const handleDrawerClose = () =>
            setState((prevState) => ({...prevState, drawerOpen: false}));
        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon/>
                </IconButton>
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClick: handleDrawerClose,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>
                {/*<div>{teamTuneLogo}</div>*/}
            </Toolbar>
        );
    };

    const logoType = (
        <Typography variant="h4" className={logo_type}>
            TeamTune
        </Typography>
    );

    const teamTuneLogo = (
        <div>
            <IconButton onClick={() => props.history.push("/")} color="inherit" classname={icon_type}>
                <div style={{width: 50, marginLeft: -100}}>
                    <TeamTuneIcon/>
                </div>
                {logoType}
            </IconButton>
        </div>

    );

    const headersData = [
        {
            label: "Browse",
            req_login: false,
            req_logout: false,
            className: main_options,
            onClickFun: () => props.history.push("/browse")
        },
        {
            label: "My Playlists",
            req_login: true,
            req_logout: false,
            className: main_options,
            onClickFun: () => props.history.push("/playlists")
        },
        {
            label: "My TeamTune",
            req_login: true,
            req_logout: false,
            className: main_options,
            onClickFun: () => props.history.push("/myteamtune")
        },
        {
            label: "Log out",
            req_login: true,
            req_logout: false,
            className: side_options,
            onClickFun: onClickLogout
        },
        {
            label: "Log in",
            req_login: false,
            req_logout: true,
            className: side_options,
            onClickFun: () => props.history.push("/login")
        },
        {
            label: "Sign up",
            req_login: false,
            req_logout: true,
            className: side_options,
            onClickFun: () => props.history.push("/register")
        },

    ];

    const getDrawerChoices = () => {
        return headersData.map(({ label, req_login, req_logout, className, onClickFun }) => {
            return (
                <React.Fragment>
                    { ((!!(user.user) && req_login) || !(user.user) && req_logout || req_logout === req_login) ? [
                        <Link
                            {...{
                                key: label,
                                onClick: onClickFun,
                                className: className,
                            }}
                        >
                            <MenuItem>{label}</MenuItem>
                        </Link>
                    ] : [
                    ]}
                </React.Fragment>
            );
        });
    };

    const getMenuButtons = () => {
        return headersData.map(({ label, req_login, req_logout, className, onClickFun }) => {
            return (
                <React.Fragment>
                    { ((!!(user.user) && req_login) || !(user.user) && req_logout || req_logout === req_login) ? [
                        <Button
                            {...{
                                key: label,
                                onClick: onClickFun,
                                className: className,
                            }}
                        >
                            {label}
                        </Button>
                    ] : [
                    ]}
                </React.Fragment>
            )
        })

    };

    return (
        <header>
            <AppBar className={header} position="sticky">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );

}

export default withRouter(Header);
