import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { updateUserName } from "../redux/actions";
import MyTeamTuneAccountComponent from "../components/MyTeamTuneAccountComponent";


/**
 * Manages process of changing user settings
 * @param {props} props
 */

function MyTeamTuneAccountView(props) {
    const user = useSelector((state) => state.props.user);

    useEffect(() => {
        if (user.user) {
            /*
            console.log("TEST")
            */
        }
    }, [user, props.history]);

    const onUpdateUserName = (newUsername) => {
        props.dispatch(updateUserName(newUsername));
    };


    return (
        <MyTeamTuneAccountComponent
            user={user}
            onUpdateUserName={onUpdateUserName}
        />

    );
}

export default connect()(withRouter(MyTeamTuneAccountView));