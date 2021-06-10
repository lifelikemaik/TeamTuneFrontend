// import React, { useEffect } from "react";
import { connect } from "react-redux";
// import Loading from "../components/Loading";
import CallbackComponent from "../components/CallbackComponent";
const queryString = require('query-string');

/**
 * Manages process of changing user settings
 * @param {props} props
 */

function CallbackView(props) {
  // close window after retrieval of link
  window.close();
  return (
    <CallbackComponent/>
  );
}


export default connect()(CallbackView);
