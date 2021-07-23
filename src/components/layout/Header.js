import React, {useEffect, useState} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Button, IconButton, Toolbar, Divider, Typography, Drawer, MenuItem, Link} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { motion } from "framer-motion";

import {useSelector} from "react-redux";
import {logout} from "../../redux/actions";
import TeamTuneIconWhite from "../../images/TeamTuneIconWhite";

const useStyles = makeStyles((theme) => ({
    main_options: {
        fontSize: 25,
        marginLeft: 18,
        marginRight: 18,
        fontFamily: "Libre Franklin, sans-serif",
        color: "#c3c8c9",
        textDecoration: "none",
    },
    side_options: {
        fontSize: 18,
        marginLeft: 15,
    },
    activeLink: {
        fontSize: 25,
        marginLeft: 18,
        marginRight: 18,
        fontFamily: "Libre Franklin, sans-serif",
        color: "#62D2A2",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "primary",
    },
    toolbarMobile: {
        justifyContent: "flex-start",
        backgroundColor: "primary",
    },
    header: {
        paddingRight: 0,
        paddingLeft: 0,
        "@media (max-width: 1050px)": {
            paddingLeft: 0,
        },
    },
    logo_type: {
        fontFamily: "Libre Franklin, sans-serif",
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
    const {header, main_options, side_options, toolbar, toolbarMobile, activeLink, logo_type, drawerContainer} = useStyles();


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
            return window.innerWidth < 1050
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
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 1 }}>
                    {teamTuneLogo}
                </motion.div>
                <Toolbar >
                    {getMenuButtons(headersMainData, true)}
                </Toolbar>
                <Toolbar >
                    {getMenuButtons(headersSideData, false)}
                </Toolbar>


            </Toolbar>
        );
    };


    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({...prevState, drawerOpen: true}));
        const handleDrawerClose = () =>
            setState((prevState) => ({...prevState, drawerOpen: false}));
        return (
            <Toolbar className={toolbarMobile} justifyContent="flex-start">
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        onClick: handleDrawerOpen,
                    }}>
                    <MenuIcon/>
                </IconButton>
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClick: handleDrawerClose,
                        onClose: handleDrawerClose,
                    }}>
                    <div>
                        <div className={drawerContainer}>{getDrawerChoices(headersMainData)}</div>
                        <Divider/>
                        <div className={drawerContainer}>{getDrawerChoices(headersSideData)}</div>
                    </div>
                </Drawer>
                <div>{teamTuneLogo}</div>
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
            <IconButton disableRipple  onClick={() => props.history.push("/")} color="inherit">
                <div style={{width: 50}}>
                    <TeamTuneIconWhite/>
                </div>
                {logoType}
            </IconButton>
        </div>
    );

    const headersMainData = [
        {
            label: "Browse",
            req_login: false,
            req_logout: false,
            className: main_options,
            onClickFun: () => props.history.push("/browse"),
            to: "/browse"
        },
        {
            label: "My Playlists",
            req_login: true,
            req_logout: false,
            className: main_options,
            onClickFun: () => props.history.push("/playlists"),
            to: "/playlists",
        },
        {
            label: "My TeamTune",
            req_login: true,
            req_logout: false,
            className: main_options,
            onClickFun: () => props.history.push("/myteamtune"),
            to: "/myteamtune",
        },
    ];

    const headersSideData = [
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

    // Get Buttons for Mobile view
    const getDrawerChoices = (headersData) => {
        return headersData.map(({label, req_login, req_logout, className, onClickFun}) => {
            return (
                <React.Fragment>
                    {((!!(user.user) && req_login) || !(user.user) && req_logout || req_logout === req_login) ? [
                        <Link
                            {...{
                                key: label,
                                onClick: onClickFun,
                                color: "primary",
                                textDecoration: "none",
                            }}
                        >
                            <MenuItem>{label}</MenuItem>
                        </Link>
                    ] : []}
                </React.Fragment>
            );
        });
    };


    // Get Buttons for Desktop view
    const getMenuButtons = (headersData, main_options) => {
        return headersData.map(({label, req_login, req_logout, to, className, onClickFun}) => {
            return (
                <React.Fragment>
                    {((!!(user.user) && req_login) || !(user.user) && req_logout || req_logout === req_login) ? [
                        <React.Fragment>
                            {main_options ? [
                                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 1 }}>
                                    <NavLink
                                             {...{
                                                 key: label,
                                                 onClick: onClickFun,
                                                 className: className,
                                                 to: to,
                                                 activeClassName: activeLink,

                                             }}
                                    >
                                        {label}
                                    </NavLink>
                                </motion.div>

                            ] : [
                                <Button variant="outlined" color="secondary"
                                        {...{
                                            key: label,
                                            onClick: onClickFun,
                                            className: className,
                                        }}
                                >
                                    {label}
                                </Button>
                            ]}
                        </React.Fragment>
                    ] : []}
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
