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
import PaymentForm from "./PaymentForm";


const useStyles = makeStyles((theme) => ({
    bookPremiumPaperRoot: {
        margin: "auto",

    },
    bookPremiumPaper: {
        width: "900px",
        height: "700px",
        marginBottom: 50,
        padding: theme.spacing(2),
        marginLeft: "auto",
        marginRight: "auto",

    },
    bookPremiumRow: {
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
    headLines: {
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Libre Franklin, sans-serif",
    },

}));

/**
 * For managing the booking process of TeamTune premium
 * @param {props} props
 */
function PremiumBookingComponent(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.bookPremiumPaperRoot}>
            <h1 className={classes.headLines}>
                TeamTune Premium
            </h1>
            <Paper className={classes.bookPremiumPaper} component="form">
                <div className={classes.bookPremiumRow}>
                    <h2 className={classes.headLines} style={{ textDecorationLine: 'underline' }}>
                        Enter your payment information
                    </h2>
                </div>
                <PaymentForm className={classes.paymentForm}/>

            </Paper>
        </div>

    );

}


export default withRouter(PremiumBookingComponent);