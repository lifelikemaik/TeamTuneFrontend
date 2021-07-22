
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    paymentPaper: {
        width: "550px",
        padding: theme.spacing(2),
        marginLeft: "auto",
        marginRight: "auto",
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

}));


function PaymentForm(props) {

    const classes = useStyles();

    return (
        <div>
            <Grid container item xs={12}>
                {/*
            <Grid container item xs={12} sm={9} justify="space-between">
                {cardsLogo.map(e => <img key={e} src={`./cards/${e}.png`} alt={e} width="50px" align="bottom" style={{ padding: "0 5px" }} />)}
            </Grid>
            */}
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

export default PaymentForm;
