import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { register } from "../redux/actions";
import { login } from "../redux/actions";
import MyTeamTuneAccountComponent from "../components/MyTeamTuneAccountComponent";

/**
 * Manages process of changing user settings
 * @param {props} props
 */

 function MyTeamTuneAccountView(props) {
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.user) {
            props.history.push("/");
        }
    }, [user, props.history]);

    const onLogin = (username, password) => {
        props.dispatch(login(username, password));
    };

    const onCancel = () => {
        props.history.push("/");
    };

    const onSignUp = () => {
        props.history.push("/register");
    };

    return (
        <MyTeamTuneAccountComponent
            user={user}
            onCancel={onCancel}
            onLogin={onLogin}
            onSignUp={onSignUp}
        />
    );
}

export default connect()(withRouter(MyTeamTuneAccountView));