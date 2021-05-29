import {Button, TableCell} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";



function PlaylistListRowButtons(props) {

    return (
        <div>
            {props.isPublic ? (
                <div>
                    <Button variant="contained">
                        Follow
                    </Button>
                    <Button variant="contained">
                        Copy to my Playlist
                    </Button>
                </div>
            ) : (
                <div>
                    <Button variant="contained">
                        Share Link
                    </Button>
                    <Button variant="contained">
                        Share Playlist
                    </Button>
                    <Button variant="contained">
                        Create Copy
                    </Button>
                </div>
            )}
        </div>
    );
}

PlaylistListRowButtons.propTypes = {
    isPublic: PropTypes.bool,
};

export default PlaylistListRowButtons;