import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
    Paper,
    Button,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox, Link,
} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    usersignUpRoot: {
        margin: "auto",
    },
    signUpPaper: {
        width: "550px",
        padding: theme.spacing(2),
        marginLeft: "auto",
        marginRight: "auto",
    },
    signUpRow: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        "&:last-child": {
            paddingBottom: theme.spacing(0),
        },
        "&:first-child": {
            paddingTop: theme.spacing(0),
        },
    },
    signUpButtons: {
        display: "flex",
        justifyContent: "flex-end",
    },
    signUpButton: {
        marginLeft: theme.spacing(1),
    },
    spotifyDiv: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    },
    spotifyButton: {
        backgroundColor: "#1db954",
        color: "white",
        width: "60%",
        '&:hover': {
            backgroundColor: "#1db954",
            opacity: "80%",
        },
    },
    explanation: {
        marginBottom: 50,
        width: "750px",
    },
    termsAndConditions: {
        fontSize: 15,
        marginBottom: 10,
        marginTop: 10,
    },
    link: {
        textDecoration: "underline",
        cursor: "pointer",
    }
}));

/**
 * For register new users
 * @param {props} props
 */
function SignUpComponent(props) {
    const classes = useStyles();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password2, setPassword2] = React.useState("");
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [isLinkedToSpotify, setIsLinkedToSpotify] = React.useState(false);
    const [code, setCode] = React.useState("");
    const [buttonText, setButtonText] = React.useState("Link with Spotify");

    const [registerError, setRegisterError] = React.useState("");

    useEffect(() => {
        if (props.user.error) {
            setRegisterError(props.user.error);
        } else {
            setRegisterError("");
        }
    }, [props.user]);

    useEffect(() => {
        // mostly compatible: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
        const params = new URLSearchParams(window.location.search);
        const paramcode = params.get("code");
        const isLinked = params.get("isLinked");
        if (isLinked === "true") {
            setIsLinkedToSpotify(true); // Button only pressed once possible
            setButtonText("Spotify account linked");
        }
        setCode(paramcode);
    }, []);

    const onRegister = (e) => {
        e.preventDefault();
        props.onRegister(username, password, isAdmin, code);
    };

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
        setRegisterError("");
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
        setRegisterError("");
    };

    const onChangePassword2 = (e) => {
        setPassword2(e.target.value);
        setRegisterError("");
    };

    var generateRandomString = function (length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    const onOpenSpotify = (props) => {
        if (!isLinkedToSpotify) {
            // setButtonText("Spotify account linked");
            // setIsLinkedToSpotify(true);

            // Button only pressed once possible
            window.open("https://accounts.spotify.com/authorize?client_id=13fc26a1aa724752953370044913e510&response_type=code&redirect_uri=http://teamtune.fun:4000/callback/register&scope=user-read-private%20user-read-email%20user-library-read%20user-library-modify%20playlist-read-collaborative%20playlist-read-private%20playlist-modify-private%20playlist-modify-public%20streaming%20user-read-currently-playing%20user-read-playback-state&state=" + generateRandomString(16), "_self");
        }
    }

    const onBlurPassword = (e) => {
        if (password !== "" && password2 !== "") {
            if (password !== password2) {
                setRegisterError("Passwords do not match.");
            } else {
                setRegisterError("");
            }
        }
    };

    const termsAndConditions = () => {
        const link = <Link className={classes.link} onClick={() => props.history.push('/legal')}>terms and conditions</Link>;
        return (
            <Typography className={classes.termsAndConditions}>
                By clicking on Register you agree with TeamTune's {link}.
            </Typography>
        )
    }

    return (
        <div className={classes.usersignUpRoot}>

            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>
                    <Typography variant="h4" align="center">
                        Welcome to the TeamTune App!
                    </Typography>
                </div>
                <div className={classes.signUpRow + " " + classes.spotifyDiv}>
                    <Button
                        className={classes.spotifyButton}
                        onClick={() => onOpenSpotify(props)}>
                        {buttonText}
                    </Button>
                </div>
                <div className={classes.signUpRow}>
                    <TextField
                        label="Username"
                        fullWidth
                        value={username}
                        onChange={onChangeUsername}
                    />
                </div>
                <div className={classes.signUpRow}>
                    <TextField
                        label="Password"
                        fullWidth
                        value={password}
                        onChange={onChangePassword}
                        error={registerError !== ""}
                        onBlur={onBlurPassword}
                        type="password"
                    />
                </div>
                <div className={classes.signUpRow}>
                    <TextField
                        label="Repeat Password"
                        fullWidth
                        value={password2}
                        onChange={onChangePassword2}
                        error={registerError !== ""}
                        onBlur={onBlurPassword}
                        type="password"
                    />
                </div>
                {registerError !== "" ? (
                    <div className={classes.signUpRow}>
                        <Typography color="error">{registerError}</Typography>
                    </div>
                ) : null}
                {termsAndConditions()}
                <div
                    className={classes.signUpRow + " " + classes.signUpButtons}
                >
                    <Button
                        className={classes.signUpButton}
                        onClick={props.onCancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        className={classes.signUpButton}
                        variant="contained"
                        color="primary"
                        onClick={onRegister}
                        disabled={
                            username === "" ||
                            password === "" ||
                            password2 === "" ||
                            registerError !== "" ||
                            password !== password2 ||
                            isLinkedToSpotify === false
                        }
                        type="submit"
                    >
                        Register
                    </Button>
                </div>
            </Paper>
        </div>
    );
}

// attributes of props and their type
SignUpComponent.propTypes = {
    onRegister: PropTypes.func,
    onChangeUsername: PropTypes.func,
    onChangePassword: PropTypes.func,
    onChangePassword2: PropTypes.func,
    onOpenSpotify: PropTypes.func,
    onBlurPassword: PropTypes.func,
};

export default withRouter(SignUpComponent);
