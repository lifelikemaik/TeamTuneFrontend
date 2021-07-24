import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import PremiumBookingComponent from "../components/premium/PremiumBookingComponent";


/**
 * For the landing page
 * @param {props} props
 */
function PremiumBookingView(props) {

    return (
        <PremiumBookingComponent />
    );
}

export default connect()(withRouter(PremiumBookingView));
