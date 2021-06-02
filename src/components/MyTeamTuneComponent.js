import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/**
 * For presenting and changing the user settings and more
 * @param {props} props
 */
function MyTeamTuneComponent(props) {

    return (
        <div
                style={{
                    display: 'flex',
                    justifyContent: 'Right',
                    alignItems: 'Right',
                    height: '100vh'
                }}
            >
                <h1>The MyTeamTune Page.</h1>
            </div>
    );
}

export default MyTeamTuneComponent;

