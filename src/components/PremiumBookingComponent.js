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
    bookPremiumButtons: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    },
    bookPremiumButton: {
        marginLeft: theme.spacing(1),
        marginTop: 110,
        width: "50%",
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
 * For managing the booking process of TeamTune premium
 * @param {props} props
 */
function PremiumBookingComponent(props) {
    const classes = useStyles();

    /*
    const user = useSelector((state) => {
        // return the currently logged in user from redux store
        return state.user;
    });


    useEffect(() => {
        if (props.user) {
            console.log(user);
        } else {
            //console.log(user);
            
        }
    }, [props.user]);

    */

    var previousURL = props.history.location.pathname;
    {console.log(previousURL)}

    return (
        <div className={classes.bookPremiumPaperRoot}>
            <h1 className={classes.headLines}>
                TeamTune Premium
            </h1>
            <Paper className={classes.bookPremiumPaper} component="form">
                <div className={classes.bookPremiumRow}>
                    <h2 className={classes.headLines} style={{textDecorationLine: 'underline'}}> 
                        Enter your payment information
                    </h2>
                </div>
                <PaymentForm/>
                <div className={classes.bookPremiumButtons}>
                    <Button
                        className={classes.bookPremiumButton}

                        onClick={() => props.history.push('/register')}>
                        Book Premium {"&"} Register
                    </Button>
                </div>
            </Paper>
        </div>

    );

}

export default withRouter(PremiumBookingComponent);