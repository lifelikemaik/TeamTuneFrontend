import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, IconButton, Toolbar, Divider, Typography } from "@material-ui/core";
import TeamTuneIcon from "./TeamTuneIcon";

import { useSelector } from "react-redux";

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
        fontFamily: "Libre Franklin, sans-serif",
    },
    icon_type: {
        marginLeft: 100,
    },
}));


/**
 * Landing page and "home" screen of the web app
 * @param {props} props
 */
function LandingPageComponent(props) {

    return (
        <div></div>
    );
}

export default withRouter(LandingPageComponent);