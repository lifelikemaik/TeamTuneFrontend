import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/**
 * For presenting the Browse-view and actions on it
 * @param {props} props
 */
function BrowseComponent(props) {

    return (
        <div
                style={{
                    display: 'flex',
                    justifyContent: 'Right',
                    alignItems: 'Right',
                    height: '100vh'
                }}
            >
                <h1>The Browsing page.</h1>
            </div>
    );
}

export default BrowseComponent;