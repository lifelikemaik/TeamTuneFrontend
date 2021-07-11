import {Button, Snackbar, TableCell} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Alert} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    button: {
        zIndex: 5,
    },
}));

function PlaylistListRowButtons(props) {
    const {button} = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        if(event != null) preventBackgroundClick(event)
        setOpen(false);
    };

    const preventBackgroundClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const snackBar = () => {
        return (
            <Snackbar open={open} autoHideDuration={2500} onClose={handleClose} onClick={preventBackgroundClick}>
                <Alert onClose={handleClose} severity="success">
                    Share link copied to clipboard
                </Alert>
            </Snackbar>
        )
    }

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
                                preventBackgroundClick(e)
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
                            <Button variant="contained" onClick={(e) => {
                                preventBackgroundClick(e)
                                handleClick()
                                navigator.clipboard.writeText("http://localhost:3000/invite/" + props.playlist._id)
                            }}>
                                Share Link
                            </Button>
                            {snackBar()}
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