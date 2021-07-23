import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import MyTeamTuneDeleteAccountComponent from "../components/myTeamTune/MyTeamTuneDeleteAccountComponent";
import { deleteAccount } from "../redux/actions";

/**
 * Manages process of changing user settings
 * @param {props} props
 */

function MyTeamTuneDeleteAccountView(props) {

  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.user) {
        console.log(props.user);
    }
}, [user, props.history]);

  const onDeleteAccount = (username) => {
    props.dispatch(deleteAccount(username));
  };

  return (
    <MyTeamTuneDeleteAccountComponent
      user={user}
      onDeleteAccount={onDeleteAccount}
    />
  );

}


export default connect()(MyTeamTuneDeleteAccountView);