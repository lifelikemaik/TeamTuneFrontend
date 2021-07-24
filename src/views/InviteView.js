import React from "react";
import { connect } from "react-redux";

import InviteComponent from '../components/authentication/InviteComponent';
import { registerInvite } from '../redux/actions';


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

export default connect()(InviteView);