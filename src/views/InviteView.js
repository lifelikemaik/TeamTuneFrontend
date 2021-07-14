import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import InviteComponent from "../components/InviteComponent";
import {registerInvite} from "../redux/actions";


/**
 * For the landing page
 * @param {props} props
 */
function InviteView(props) {

    const onRegister = (username, playlist_id) => {
        props.dispatch(registerInvite(username, playlist_id));
    };

    return (
        <InviteComponent
            onRegister={onRegister}
        />
    );
}

export default connect()(withRouter(InviteView));