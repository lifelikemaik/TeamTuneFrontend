import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { TextField, Grid, Button } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles((theme) => ({
    checkBoxes: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 20,
    },
    paymentRoot: {
        height: 450,
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
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 100,
        display: 'flex',
        fontSize: 17,
        paddingLeft: 20,
        paddingRight: 20,
        color: "#96ffd3",
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "#62D2A2",
            color: "#000000",
            opacity: "90%",
        },
    },
}));


function useRadioButtons(name) {
    const [value, setState] = useState("paypal");

    const handleChange = e => {
        setState(e.target.value);
    };

    const inputProps = {
        name,
        type: "radio",
        onChange: handleChange
    };

    return [value, inputProps];
}


/**
 * For managing the payment option selection
 * @param {props} props
 */

function PaymentForm(props) {

    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [birthday, setBirthday] = React.useState("");
    const [creditCardNumber, setCreditCardNumber] = React.useState("");
    const [expDate, setExpDate] = React.useState("");
    const [CVC, setCVC] = React.useState("");
    const [debitCardNumber, setDebitCardNumber] = React.useState("");
    const [BIC, setBIC] = React.useState("");
    const [bankName, setBankName] = React.useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleBirthdayChange = (event) => {
        setBirthday(event.target.value);
    };

    const handleCreditCardChange = (event) => {
        setCreditCardNumber(event.target.value);
    };

    const handleExpDateChange = (event) => {
        setExpDate(event.target.value);
    };

    const handleCVCChange = (event) => {
        setCVC(event.target.value);
    };

    const handleDebitCardChange = (event) => {
        setDebitCardNumber(event.target.value);
    };

    const handleBICChange = (event) => {
        setBIC(event.target.value);
    };

    const handleBankNameChange = (event) => {
        setBankName(event.target.value);
    };

    const [paymentOption, paymentOptionInputProps] = useRadioButtons("paymentOption");


    return (
        <div className={classes.paymentForm}>
            <Grid container item xs={12}>
                <Grid>
                    <FormControl component="fieldset" className={classes.checkBoxes}>
                        <FormLabel component="legend">Choose your payment option:</FormLabel>
                        <RadioGroup aria-label="position" row>
                            <FormControlLabel
                                value="paypal"
                                control=
                                {<Radio color="secondary" checked={paymentOption === 'paypal'} {...paymentOptionInputProps} />}
                                label="PayPal"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="credit"
                                control=
                                {<Radio color="secondary" checked={paymentOption === 'credit'} {...paymentOptionInputProps} />}
                                label="Credit Card"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="sepa"
                                control=
                                {<Radio color="secondary" checked={paymentOption === 'sepa'} {...paymentOptionInputProps} />}
                                label="SEPA"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            {paymentOption === 'paypal' ? (
                <div className={classes.paymentRoot}>
                    <Grid item xs={12} sm={6} className={classes.paymentRow}>
                        <TextField
                            label="E-Mail address"
                            name="email"
                            variant="outlined"
                            required
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            onChange={handleEmailChange}
                            value={email}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} className={classes.paymentRow}>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue=""
                                required
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={handleBirthdayChange}
                                value={birthday}
                            />
                        </form>
                    </Grid>
                </div>
            ) : (<div />)}
            {paymentOption === 'sepa' ? (
                <div className={classes.paymentRoot}>
                    <Grid item xs={12} sm={6} className={classes.paymentRow}>
                        <TextField
                            label="Debitcard number"
                            name="dbcnumber"
                            variant="outlined"
                            required
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            onChange={handleDebitCardChange}
                            value={debitCardNumber}
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
                            onChange={handleBICChange}
                            value={BIC}
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
                            onChange={handleBankNameChange}
                            value={bankName}
                        />
                    </Grid>
                </div>
            ) : (<div />)}
            {paymentOption === 'credit' ? (
                <div className={classes.paymentRoot}>
                    <Grid item xs={12} sm={6} className={classes.paymentRow}>
                        <TextField
                            label="Credit Card Number"
                            name="ccnumber"
                            variant="outlined"
                            required
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            onChange={handleCreditCardChange}
                            value={creditCardNumber}
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
                            onChange={handleExpDateChange}
                            value={expDate}
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
                            onChange={handleCVCChange}
                            value={CVC}
                        />
                    </Grid>
                </div>
            ) : (<div />)}
            <div className={classes.bookPremiumButtons}>
                <Button
                    className={classes.bookPremiumButton}
                    variant="contained"

                    onClick={() => props.props.history.push('/register')}
                    disabled={
                        paymentOption === "paypal" && email === "" ||
                        paymentOption === "paypal" && birthday === "" ||
                        paymentOption === "credit" && creditCardNumber === "" ||
                        paymentOption === "credit" && expDate === "" ||
                        paymentOption === "credit" && CVC === "" ||
                        paymentOption === "sepa" && debitCardNumber === "" ||
                        paymentOption === "sepa" && BIC === "" ||
                        paymentOption === "sepa" && bankName === ""
                        }>
                    Book Premium {"&"} Register
                </Button>
            </div>
        </div>
    );
}

PaymentForm.propTypes = {
    Checkboxes: PropTypes.func,
};

export default PaymentForm;
