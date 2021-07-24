import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import LegalComponent from "../components/legalText/LegalComponent";

/**
 * For the landing page
 * @param {props} props
 */
function LegalView(props) {

    return (
        <LegalComponent/>
    );
}

export default connect()(withRouter(LegalView));