import {Button, TableCell} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";



function PlaylistListRowButtons(props) {

    return (
        <div>
            {props.isBrowse ? (
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
                    {props.playlist.is_own_playlist ? (
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
                    ) : (
                        <Button variant="contained">
                            Create Copy
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
}

PlaylistListRowButtons.propTypes = {
    playlist: PropTypes.object,
    isBrowse: PropTypes.bool.isRequired,
};

export default PlaylistListRowButtons;