import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Loading from "../components/Loading";
import MyTeamTuneComponent from "../components/MyTeamTuneComponent";

/**
 * Manages process of changing user settings
 * @param {props} props
 */

function MyTeamTuneView(props) {
  return (
    <MyTeamTuneComponent/>
  );

}


export default connect()(MyTeamTuneView);