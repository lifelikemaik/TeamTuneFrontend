import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { login } from "../redux/actions";
import MyTeamTuneAccountComponent from "../components/MyTeamTuneAccountComponent";

/**
 * Manages process of changing user settings
 * @param {props} props
 */

 function MyTeamTuneAccountView(props) {
    const user = useSelector((state) => state.props.user);

    useEffect(() => { console.log("TEST")
        if (user.user) {
            console.log("TEST")
        }
    }, [user, props.history]);



    return (
        <MyTeamTuneAccountComponent
            user={user}
        />
        
    );
}

export default connect()(withRouter(MyTeamTuneAccountView));