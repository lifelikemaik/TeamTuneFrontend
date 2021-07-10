import {Button, TableCell} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        zIndex: 5,
    },
}));

function PlaylistListRowButtons(props) {
    const {button} = useStyles();

    return (
        <div>
            {props.isBrowse ? (
                <div>
                    {props.playlist.is_own_playlist ? (
                        <div>
                        </div>
                    ) : (
                        <div>
                            <Button className={button} variant="contained" onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                props.onClickFollowPlaylist(props.playlist.public_id)
                            }}>
                                Follow
                            </Button>
                            <Button variant="contained">
                                Copy to my Playlist
                            </Button>
                        </div>
                    )}
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
                            <Button variant="contained" >
                                Create Copy
                            </Button>
                        </div>
                    ) : (
                        <Button variant="contained" >
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
    onClickFollowPlaylist: PropTypes.func,
};

export default PlaylistListRowButtons;