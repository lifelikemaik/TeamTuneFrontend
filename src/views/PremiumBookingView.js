import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import PremiumBookingComponent from "../components/PremiumBookingComponent";


/**
 * For the landing page
 * @param {props} props
 */
function PremiumBookingView(props) {

    const user = useSelector((state) => state.user);
    useEffect(() => {
        if (user.user) {
          
         /* console.log(user)*/
          
        }
      }, [user, props.history]);

    return (
        <PremiumBookingComponent />
    );
}

export default connect()(withRouter(PremiumBookingView));
