import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Loading from "../components/Loading";
import MyTeamTuneSubscriptionComponent from "../components/MyTeamTuneSubscriptionComponent";

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