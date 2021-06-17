import React from "react";
import queryString from 'query-string';

/**
 * For presenting and changing the user settings and more
 * @param {props} props
 */
function CallbackComponent(props) {

    const params = new URLSearchParams();
    // console.log(queryString.parse(this.props.location.search));
    // queryString.parse(this.props.location.search)
    window.close();
    return (
        <div style={{
                    display: 'flex',
                    justifyContent: 'Right',
                    alignItems: 'Right',
                    height: '100vh'
                }}
            >
                <h1>Callback Page.</h1>
            </div>
    );
}

export default CallbackComponent;
