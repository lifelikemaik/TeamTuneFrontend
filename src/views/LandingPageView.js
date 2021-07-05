import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import LandingPageComponent from "../components/LandingPageComponent";


/**
 * For the landing page
 * @param {props} props
 */
function LandingPageView(props) {


    return (
        <LandingPageComponent />
    );
}

export default connect()(withRouter(LandingPageView));
