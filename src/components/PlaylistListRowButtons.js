import { Button, Snackbar } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Alert } from '@material-ui/lab';

function PlaylistListRowButtons(props) {
    const [publicity, setPublicity] = React.useState(props.playlist.publicity);

    const [open, setOpen] = React.useState(false);
    const [messsage, setMessage] = React.useState(false);

    const handleClick = (message) => {
        setMessage(message);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        if (event != null) preventBackgroundClick(event);
        setOpen(false);
    };

    const preventBackgroundClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const snackBar = () => {
        return (
            <Snackbar
                open={open}
                autoHideDuration={2500}
                onClose={handleClose}
                onClick={preventBackgroundClick}
            >
                <Alert onClose={handleClose} severity="success">
                    {messsage}
                </Alert>
            </Snackbar>
        );
    };

    return (
        <div>
            {!props.isLoggedIn ? (
                <div/>
            ) : props.isBrowse ? (
                <div>
                    <Button variant="contained">Follow</Button>
                    <Button variant="contained">Copy to my Playlist</Button>
                </div>
            ) : (
                <div>
                    {snackBar()}
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
                                        handleClick('Playlist made public!');
                                    }}
                                >
                                    Make Public
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                onClick={(e) => {
                                    props.onCopyPlaylist(e, props.playlist._id);
                                    handleClick('Playlist copied!');
                                }}
                            >
                                Create Copy
                            </Button>
                        </div>
                    ) : (
                        <Button
                            variant="contained"
                            onClick={(e) => {
                                props.onCopyPlaylist(e, props.playlist._id);
                                handleClick('Playlist copied!');
                            }}
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
