import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


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
}));

/**
 * For managing the payment option selection
 * @param {props} props
 */

function PaymentForm(props) {

    const classes = useStyles();

    const [isChecked, setIsChecked] = React.useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
      };


    return (
        <div className={classes.paymentForm}>
            <Grid container item xs={12}>
                {/*
            <Grid container item xs={12} sm={9} justify="space-between">
                {cardsLogo.map(e => <img key={e} src={`./cards/${e}.png`} alt={e} width="50px" align="bottom" style={{ padding: "0 5px" }} />)}
            </Grid>
            */}
                <Grid>
                    <FormControl component="fieldset" className={classes.checkBoxes}>
                        <FormLabel component="legend">Choose your payment option:</FormLabel>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                control={<Checkbox color="primary" isChecked={isChecked} onChange={handleChange} />}
                                label="PayPal"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Credit Card"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="SEPA"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
                {console.log(isChecked)}
            </Grid>
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
        </div>
    );
}

PaymentForm.propTypes = {
    Checkboxes: PropTypes.func,
    isChecked: PropTypes.object,
};

export default PaymentForm;
