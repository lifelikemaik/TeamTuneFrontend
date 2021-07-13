import { Button, TableCell } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

function PlaylistListRowButtons(props) {
    const [publicity, setPublicity] = React.useState(props.playlist.publicity);

    return (
        <div>
            {props.isBrowse ? (
                <div>
                    <Button variant="contained">Follow</Button>
                    <Button variant="contained">Copy to my Playlist</Button>
                </div>
            ) : (
                <div>
                    {props.playlist.is_own_playlist ? (
                        <div>
                            <Button variant="contained">Share Link</Button>
                            {!publicity && (
                                <Button
                                    variant="contained"
                                    onClick={(e) => {
                                        props.onMakePlaylistPublic(
                                            e,
                                            props.playlist._id,
                                            { publicity: true }
                                        );
                                        setPublicity(true);
                                    }}
                                >
                                    Make Public
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                onClick={(e) =>
                                    props.onCopyPlaylist(e, props.playlist._id)
                                }
                            >
                                Create Copy
                            </Button>
                        </div>
                    ) : (
                        <Button
                            variant="contained"
                            onClick={(e) =>
                                props.onCopyPlaylist(e, props.playlist._id)
                            }
                        >
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
    onMakePlaylistPublic: PropTypes.func,
};

export default PlaylistListRowButtons;
