import React, { useEffect } from 'react';
import { connect, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    deleteAccRoot: {
        margin: "auto",
    },
    deleteAccPaper: {
        width: "900px",
        padding: theme.spacing(2),
    },
    deleteAccRow: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        "&:last-child": {
            paddingBottom: theme.spacing(0),
        },
        "&:first-child": {
            paddingTop: theme.spacing(0),
        },
    },
    deleteAccButtons: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    },
    deleteAccButton: {
        marginLeft: theme.spacing(1),
        marginTop: 10,
        width: "40%",
        height: "40px",
        fontSize: 17,
        color: "white",
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "#1db954",
            opacity: "90%",
        },
    },
}));



/**
 * For deleting the account of a logged in user
 * @param {props} props
 */

function MyTeamTuneDeleteAccountComponent(props) {

    const classes = useStyles();

    const user = useSelector((state) => state.user);
    useEffect(() => {
        if (user.user) {

            /* console.log(user)*/
        }
    }, [user, props.history]);

    const onDeleteAccount = (e) => {
        e.preventDefault();
        console.log(props);
        props.onDeleteAccount(props.user.user.username);
    };

    return (
        <div className={classes.deleteAccRoot}>
            <Paper className={classes.deleteAccPaper} component="form">
                <div className={classes.deleteAccRow}>
                    <Typography variant="h4" align="center">
                        Do you really want to delete your account?
                    </Typography>
                </div>
                <div className={classes.deleteAccButtons}>
                    <Button
                        className={classes.deleteAccButton}
                        onClick={onDeleteAccount}>
                        Delete Account
                    </Button>
                </div>
            </Paper>
        </div>
    );
}

export default MyTeamTuneDeleteAccountComponent;