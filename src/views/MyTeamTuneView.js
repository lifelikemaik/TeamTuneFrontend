import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Loading from "../components/Loading";
import MyTeamTuneComponent from "../components/MyTeamTuneComponent";

/**
 * Manages process of changing user settings
 * @param {props} props
 */

function MyTeamTuneView(props) {

  const user = useSelector((state) => state.user);
/*
  useEffect(() => {
      if (user.user) {
          props.history.push("/");
      }
  }, [user, props.history]);
  */

  return (
    <MyTeamTuneComponent user={user}/>
  );

}


export default connect()(MyTeamTuneView);