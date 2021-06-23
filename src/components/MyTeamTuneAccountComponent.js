import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    Button,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    changePWRoot: {
        margin: "auto",
    },
    changePWPaper: {
        width: "550px",
        padding: theme.spacing(2),
    },
    changePWRow: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        "&:last-child": {
            paddingBottom: theme.spacing(0),
        },
        "&:first-child": {
            paddingTop: theme.spacing(0),
        },
    },
    changePWButtons: {
        display: "flex",
        justifyContent: "flex-end",
    },
    changePWButton: {
        marginLeft: theme.spacing(1),
    },
}));

/**
 * For changing account settings
 * @param {props} props
 */
function MyTeamTuneAccountComponent(props) {
    const classes = useStyles();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [loginError, setLoginError] = React.useState("");

    useEffect(() => { 
        console.log(props.user)
        if (props.user.error) {
            setLoginError(props.user.error);
        } else {
            setLoginError("");
        }
    }, [props.user]);

    const onLogin = (e) => {
        e.preventDefault();
        props.onLogin(username, password);
    };

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
        setLoginError("");
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
        setLoginError("");
    };

    return (
        <div className={classes.changePWRoot}>
            <Paper className={classes.changePWPaper} component="form">
                <div className={classes.changePWRow}>
                    <Typography variant="h4" align="center">
                        Welcome to the TeamTune App!
                    </Typography>
                </div>
                <div className={classes.changePWRow}>
                    <TextField
                        label="Username"
                        fullWidth
                        value={username}
                        onChange={onChangeUsername}
                        error={loginError !== ""}
                    />
                </div>
                <div className={classes.changePWRow}>
                    <TextField
                        label="Password"
                        fullWidth
                        value={password}
                        onChange={onChangePassword}
                        error={loginError !== ""}
                        type="password"
                    />
                </div>
                {loginError !== "" ? (
                    <div className={classes.changePWRow}>
                        <Typography color="error">{loginError}</Typography>
                    </div>
                ) : null}
                <div className={classes.changePWRow + " " + classes.changePWButtons}>
                    <Button onClick={props.onSignUp}>
                        Not Registered yet?
                    </Button>
                    <div>
                        <Button
                            className={classes.changePWButton}
                            onClick={props.onCancel}
                        >
                            Cancel
                        </Button>
                        <Button
                            className={classes.changePWButton}
                            variant="contained"
                            color="primary"
                            onClick={onLogin}
                            disabled={username === "" || password === ""}
                            type="submit"
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </Paper>
        </div>
    );

}

export default MyTeamTuneAccountComponent;