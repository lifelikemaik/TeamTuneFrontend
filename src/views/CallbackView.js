// import React, { useEffect } from "react";
import { connect } from "react-redux";
// import Loading from "../components/Loading";
import MyTeamTuneComponent from "../components/MyTeamTuneComponent";

/**
 * Manages process of changing user settings
 * @param {props} props
 */

function CallbackView(props) {
  // close window after retrieval of link
  // window.close();
  return (
    <MyTeamTuneComponent/>
  );
}


export default connect()(CallbackView);
