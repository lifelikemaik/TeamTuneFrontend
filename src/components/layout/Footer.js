import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Typography } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme) => ({
    footerRoot: {
        display: "flex",
        justifyContent: "center",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
        paddingLeft: theme.spacing(1),
    },
}));

/**
 * Footer of the app
 * @param {props} props
 */
function Footer(props) {
    const classes = useStyles();

    return (
        <div className={classes.footerRoot}>

        </div>
    );
}

export default Footer;
