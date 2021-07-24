import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { updateUsername } from '../redux/actions';
import { deleteAccount } from '../redux/actions';
import MyTeamTuneComponent from '../components/myTeamTune/MyTeamTuneComponent';

/**
 * Manages process of changing user settings
 * @param {props} props
 */

function MyTeamTuneView(props) {
    const user = useSelector((state) => state.user);
    const onUpdateUsername = (newUsername) => {
        props.dispatch(updateUsername(newUsername));
    };

    const onDeleteAccount = (userId) => {
        props.dispatch(deleteAccount(userId));
    };

    return (
        <MyTeamTuneComponent
            user={user}
            onUpdateUsername={onUpdateUsername}
            onDeleteAccount={onDeleteAccount}
        />
    );
}

export default connect()(MyTeamTuneView);
