import React, { useEffect, useSelector } from 'react';
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
    c: {
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
    const [currentPassword, setCurrentPassword] = React.useState("");
    const [newPassword, setPassword] = React.useState("");
    const [newPassword2, setPassword2] = React.useState("");

    const [changeUserNameError, setChangeUserNameError] = React.useState("");
    const [changePasswordError, setChangePasswordError] = React.useState("");


    useEffect(() => {
        if (props.user.error) {
            setChangeUserNameError(props.user.error);
            setChangePasswordError(props.user.error);
        } else {
            console.log(props.user);
            setChangeUserNameError("");
            setChangePasswordError("");
        }
    }, [props.user]);

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
        setChangeUserNameError("");
    };

    const onChangeCurrentPassword = (e) => {
        setPassword(e.target.value);
        setChangePasswordError("");
    };
    
    const onChangeNewPassword = (e) => {
        setPassword(e.target.value);
        setChangePasswordError("");
    };

    const onChangeNewPassword2 = (e) => {
        setPassword2(e.target.value);
        setChangePasswordError("");
    };

    const onBlurPassword = (e) => {
        if (newPassword !== "" && newPassword2 !== "") {
            if (newPassword !== newPassword2) {
                setChangePasswordError("Passwords do not match.");
            } else {
                setChangePasswordError("");
            }
        }
    };

    return (
        <div className={classes.changePWRoot}>
            <Paper className={classes.changeUserNamePaper} component="form">
                <div className={classes.changeCredentialsRow}>
                    <Typography variant="h4" align="center">
                        Change your username
                    </Typography>
                </div>
                <div className={classes.changeCredentialsRow}>
                    <p>Current username: {(props.user.user.username)}</p>
                </div>
                <div className={classes.changeCredentialsRow}>
                    <TextField
                        label="Enter new username"
                        fullWidth
                        value={username}
                        onChange={onChangeUsername}
                        error={changeUserNameError !== ""}
                    />
                </div>
                <div className={classes.changeCredentialsRow + " " + classes.changeCredentialsButtons}>
                    <div>
                        <Button
                            className={classes.changeCredentialsButton}
                            variant="contained"
                            color="primary"
                            onClick={onChangeUsername}
                            disabled={username === ""}
                            type="submit"
                        >
                            Change Username
                        </Button>
                    </div>
                </div>
            </Paper>

            <Paper className={classes.changePWPaper} component="form">
                <div className={classes.changeCredentialsRow}>
                    <Typography variant="h4" align="center">
                        Change your password
                    </Typography>
                </div>
                <div className={classes.changeCredentialsRow}>
                    <TextField
                        label="Enter your current password"
                        fullWidth
                        value={currentPassword}
                        onChange={onChangeCurrentPassword}
                        error={changePasswordError !== ""}
                        onBlur={onBlurPassword}
                        type="password"
                    />
                </div>
                <div className={classes.changeCredentialsRow}>
                    <TextField
                        label="New password"
                        fullWidth
                        value={newPassword}
                        onChange={onChangeNewPassword}
                        error={changePasswordError !== ""}
                        onBlur={onBlurPassword}
                        type="password"
                    />
                </div>
                <div className={classes.changeCredentialsRow}>
                    <TextField
                        label="Repeat new password"
                        fullWidth
                        value={newPassword2}
                        onChange={onChangeNewPassword2}
                        error={changePasswordError !== ""}
                        onBlur={onBlurPassword}
                        type="password"
                    />
                </div>
                <div className={classes.changeCredentialsRow + " " + classes.changeCredentialsButtons}>
                    <div>
                        <Button
                            className={classes.changeCredentialsButton}
                            variant="contained"
                            color="primary"
                            onClick={onChangeNewPassword2}
                            disabled={newPassword2 === ""}
                            type="submit"
                        >
                            Change Password
                        </Button>
                    </div>
                </div>
            </Paper>
        </div>
    );

}

export default MyTeamTuneAccountComponent;