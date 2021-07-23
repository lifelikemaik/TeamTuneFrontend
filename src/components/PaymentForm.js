import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import {
    TextField,
    Grid,
    Typography,
    Button
} from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';


const useStyles = makeStyles((theme) => ({
    checkBoxes: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 20,
    },
    paymentRow: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        "&:last-child": {
            paddingBottom: theme.spacing(0),
        },
        "&:first-child": {
            paddingTop: theme.spacing(0),
        },
    },
    paymentForm: {
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        alignItems: "center"
    },
    bookPremiumButtons: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    bookPremiumButton: {
        marginLeft: theme.spacing(1),
        marginTop: 280,
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
 * For managing the payment option selection
 * @param {props} props
 */

function PaymentForm(props) {

    const classes = useStyles();

    const [isCheckedPayPal, setIsCheckedPayPal] = React.useState(false);
    const [isCheckedCreditCard, setIsCheckedCreditCard] = React.useState(false);
    const [isCheckedSEPA, setIsCheckedSEPA] = React.useState(false);

    const handleChangePaypal = () => {
        setIsCheckedPayPal(!isCheckedPayPal);
    };

    const handleChangeSEPA = () => {
        setIsCheckedSEPA(!isCheckedSEPA);
    };

    const handleChangeCreditCard = () => {
        setIsCheckedCreditCard(!isCheckedCreditCard);
    };




    return (
        <div className={classes.paymentForm}>
            <Grid container item xs={12}>
                <Grid>
                    <FormControl component="fieldset" className={classes.checkBoxes}>
                        <FormLabel component="legend">Choose your payment option:</FormLabel>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                control={<Checkbox color="primary" isChecked={isCheckedPayPal} onChange={handleChangePaypal} />}

                                label="PayPal"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" isChecked={isCheckedCreditCard} onChange={handleChangeCreditCard} />}
                                label="Credit Card"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" isChecked={isCheckedSEPA} onChange={handleChangeSEPA} />}
                                label="SEPA"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
            </Grid>
            {console.log(isCheckedSEPA)}
            {console.log(isCheckedPayPal)}
            {console.log(isCheckedCreditCard)}
            {!isCheckedPayPal ? (<div />) : (
                <div>
                    <Grid item xs={12} sm={6} className={classes.paymentRow}>
                        <TextField
                            label="E-Mail address"
                            name="email"
                            variant="outlined"
                            required
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} className={classes.paymentRow}>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue=""
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </Grid>
                </div>
            )}
            {!isCheckedSEPA ? (<div />) : (
                <div>
                    <Grid item xs={12} sm={6} className={classes.paymentRow}>
                        <TextField
                            label="Debitcard number"
                            name="dbcnumber"
                            variant="outlined"
                            required
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} className={classes.paymentRow}>
                        <TextField
                            label="BIC"
                            name="bicnumber"
                            variant="outlined"
                            required
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} className={classes.paymentRow}>
                        <TextField
                            label="Bank Name"
                            name="bankname"
                            variant="outlined"
                            required
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                </div>
            )}
            {!isCheckedCreditCard ? (<div />) : (
                <div>
                    <Grid item xs={12} sm={6} className={classes.paymentRow}>
                        <TextField
                            label="Credit Card Number"
                            name="ccnumber"
                            variant="outlined"
                            required
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} className={classes.paymentRow}>
                        <TextField
                            label="Expiration Date"
                            name="ccexp"
                            variant="outlined"
                            required
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} className={classes.paymentRow}>
                        <TextField
                            label="CVC"
                            name="cvc"
                            variant="outlined"
                            required
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <div className={classes.bookPremiumButtons}>
                        <Button
                            className={classes.bookPremiumButton}
                            onClick={() => props.history.push('/register')}
                            disabled={
                                isCheckedPayPal === false
                            }
                            >

                            Book Premium {"&"} Register
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

PaymentForm.propTypes = {
    Checkboxes: PropTypes.func,
    isChecked: PropTypes.object,
};

export default PaymentForm;
