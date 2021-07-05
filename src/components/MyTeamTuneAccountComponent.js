import React, { useEffect, useSelector } from 'react';
import { PropTypes } from 'react'
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
            color: "black",
            opacity: "90%",
        },
    },
}));

/**
 * For changing account settings
 * @param {props} props
 */
function MyTeamTuneAccountComponent(props) {
    const classes = useStyles();

    const [username, setUsername] = React.useState("");
    const [newUsername, setNewUsername] = React.useState("");
    const [currentPassword, setCurrentPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [newPassword2, setNewPassword2] = React.useState("");

    const [changeUserNameError, setChangeUserNameError] = React.useState("");
    const [changePasswordError, setChangePasswordError] = React.useState("");


    useEffect(() => {
        if (props.user.error) {
            setChangeUserNameError(props.user.error);
            setChangePasswordError(props.user.error);
        } else {
            console.log(props.user);
            console.log(newUsername)
            setChangeUserNameError("");
            setChangePasswordError("");
        }
    }, [props.user]);

    const onChangeUsername = (e) => {
        setNewUsername(e.target.value);
        setChangeUserNameError("");
    };

    const onChangeCurrentPassword = (e) => {
        setCurrentPassword(e.target.value);
        setChangePasswordError("");
    };

    const onChangeNewPassword = (e) => {
        setNewPassword(e.target.value);
        setChangePasswordError("");
    };

    const onChangeNewPassword2 = (e) => {
        setNewPassword2(e.target.value);
        setChangePasswordError("");
    };

    const onUpdateUserName = (e) => { console.log(newUsername)
        e.preventDefault();
        props.onUpdateUserName(newUsername);
    };

    const onUpdatePassword = (e) => {
        e.preventDefault();
        props.onUpdatePassword(props.user.user.username, newPassword);
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
                        value={newUsername}
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
                            onClick={onUpdateUserName}
                            disabled={newUsername === ""}
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
                            onClick={onUpdatePassword}            
                            disabled={currentPassword !== props.user.user.password || currentPassword === "" || newPassword === "" || newPassword2 === ""}
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