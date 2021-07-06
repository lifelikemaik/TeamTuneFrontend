import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { updateUsername } from "../redux/actions";
import MyTeamTuneAccountComponent from "../components/MyTeamTuneAccountComponent";


/**
 * Manages process of changing user settings
 * @param {props} props
 */

function MyTeamTuneAccountView(props) {
    const user = useSelector((state) => state.props.user);

    useEffect(() => {
        if (user.user) {
            console.log(props.user);
        }
    }, [user, props.history]);

    const onUpdateUsername = (newUsername) => {
        props.dispatch(updateUsername(newUsername));
    };

    const onUpdatePassword = (newPassword) => {
        props.dispatch(updatePassword(newPassword));
    };


    return (
        <MyTeamTuneAccountComponent
            user={user}
            onUpdateUsername={onUpdateUsername}
            onUpdatePassword={onUpdatePassword}
        />

    );
}

export default connect()(withRouter(MyTeamTuneAccountView));