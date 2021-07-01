import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import MyTeamTuneDeleteAccountComponent from "../components/MyTeamTuneDeleteAccountComponent";
import { deleteAccount } from "../redux/actions";

/**
 * Manages process of changing user settings
 * @param {props} props
 */

function MyTeamTuneDeleteAccountView(props) {

  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.user) {
        props.history.push("/");
    }
}, [user, props.history]);

  const onDelete = (username, password) => {
    props.dispatch(deleteAccount(username, password));
  };

  return (
    <MyTeamTuneDeleteAccountComponent
      user={user}
      onDelete={onDelete}
    />
  );

}


export default connect()(MyTeamTuneDeleteAccountView);