import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { updateUserName } from "../redux/actions";
import MyTeamTuneComponent from "../components/MyTeamTuneComponent";

/**
 * Manages process of changing user settings
 * @param {props} props
 */

function MyTeamTuneView(props) {

  const user = useSelector((state) => state.user);
  const onUpdateUserName = (newUsername) => {
    props.dispatch(updateUserName(newUsername));
  };

  useEffect(() => {
    if (user.user) {
      /*  
      console.log(user)
      */
    }
  }, [user, props.history]);


  return (
    <MyTeamTuneComponent
      user={user}
      onUpdateUserName={onUpdateUserName}
    />
  );

}


export default connect()(MyTeamTuneView);