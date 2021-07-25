import React from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import TeamTuneIcon from "../../images/TeamTuneIcon";

const useStyles = makeStyles((theme) => ({
    backgroundPaper: {
        maxWidth: "1000px",
        minWidth: "350px",
        width: "70%",
        height: "300%",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    items: {
        marginTop: "10px",
        marginBottom: "10px",
    },
    button: {
        height: "50px",
        fontSize: 17,
        width: 200,
        variant: "outlined",
        borderRadius: 100,
        color: "#96ffd3",
        marginLeft: 5,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "#62D2A2",
            color: "#000000",
            opacity: "90%",
        },
    }

}));

/**
 * Landing page for invited user
 * @param {props} props
 */
function InviteComponent(props) {

    const classes = useStyles();

    const [username, setUsername] = React.useState("");
    const [registerError, setRegisterError] = React.useState("");

    const onRegister = (e) => {
        e.preventDefault();
        props.history.push("/playlist/" + props.match.params.id);
        props.onRegister(username, props.match.params.id);
    };

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
        setRegisterError("");
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && username !== '') {
            props.onRegister(username, props.match.params.id);
            props.history.push("/playlist/" + props.match.params.id);
        }
    };

    return (
        <Paper className={classes.backgroundPaper}>
            <h1>
                Welcome to TeamTune!
            </h1>
            <TeamTuneIcon style={{width: 200}} className={classes.items}/>

            <Typography variant="h5" align="center" flexWrap="wrap" className={classes.items}>
                You have been invited to join a TeamTune playlist.
            </Typography>
            <TextField id="outlined-basic"
                       label="Name"
                       variant="outlined"
                       className={classes.items}
                       value={username}
                       onChange={onChangeUsername}
                       onKeyDown={handleKeyDown}
            />

            <div>
                <Button variant="outlined"
                        size="large"
                        className={classes.button}
                        onClick={() => props.history.push("/")}
                >
                    Cancel Invite
                </Button>
                <Button variant="contained"
                        size="large"
                        color="secondary"
                        className={classes.button}
                        onClick={onRegister}
                        disabled={
                            username === "" ||
                            registerError !== ""
                        }
                >
                    Join Playlist
                </Button>
            </div>
        </Paper>
    );
}

// attributes of props and their type
InviteComponent.propTypes = {
    onRegister: PropTypes.func,
    onChangeUsername: PropTypes.func,
};

export default withRouter(InviteComponent);