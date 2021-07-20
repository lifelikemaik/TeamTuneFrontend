import React, { useEffect, useSelector } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { PropTypes } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    Button,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    Divider,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    changePWRoot: {
        margin: "auto",
    },
    changeUserNamePaper: {
        width: "600px",
        marginBottom: 50,
        padding: theme.spacing(2),
    },
    changePWPaper: {
        width: "600px",
        padding: theme.spacing(2),
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
}));

/**
 * For managing the booking process of TeamTune premium
 * @param {props} props
 */
function PremiumBookingComponent(props) {
    const classes = useStyles();
    
    const user = useSelector((state) => {
        // return the currently logged in user from redux store
        return state.user;
    });


    useEffect(() => {
        if (props.user) {
            console.log(user);
        } else {
            /*console.log(user);*/
            
        }
    }, [props.user]);

    

    return (
        <div className={classes.changePWRoot}>
            <Paper className={classes.changeUserNamePaper} component="form">
                <div>
                    testrow
                </div>
            </Paper>
        </div>
    );

}

export default withRouter(PremiumBookingComponent);