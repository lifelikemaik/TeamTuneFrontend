import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Loading from "../components/layout/Loading";
import MyTeamTuneSubscriptionComponent from "../components/myTeamTune/MyTeamTuneSubscriptionComponent";

/**
 * Manages process of changing user settings
 * @param {props} props
 */

function MyTeamTuneSubscriptionView(props) {
  return (
    <MyTeamTuneSubscriptionComponent/>
  );

}


export default connect()(MyTeamTuneSubscriptionView);