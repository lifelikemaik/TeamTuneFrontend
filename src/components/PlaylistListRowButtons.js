import {IconButton, Snackbar, Tooltip, withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Alert } from '@material-ui/lab';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

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
    const LightTooltip = withStyles((theme) => ({
        tooltip: {
            boxShadow: theme.shadows[1],
            fontSize: 15,
        },
    }))(Tooltip);

    const preventBackgroundClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const shareLinkOnClick = (e) => {
        preventBackgroundClick(e);
        handleClick(
            'Link was copied to the clipboard!'
        );
        navigator.clipboard.writeText(
            'http://localhost:3000/invite/' +
            props.playlist._id
        );
    }
    const followOnClick = (e) => {
        preventBackgroundClick(e);
        props.onClickFollowPlaylist(
            props.playlist.public_id
        );
    }
    const makePublicOnClick = (e) => {
        props.onMakePlaylistPublic(
            e,
            props.playlist._id,
            { publicity: true }
        );
        setPublicity(true);
        handleClick('Playlist made public!');
    }
    const copyOnClick = (e) => {
        props.onCopyPlaylist(e, props.playlist._id);
        handleClick('Playlist copied!');
    }

    const buttons = [
        {
            label: "Copy Share Link",
            icon: ShareOutlinedIcon,
            browse: false,
            my_playlists: true,
            message: "Link was copied to the clipboard!",
            on_click: shareLinkOnClick,
        },
        {
            label: "Follow Playlist",
            icon: FavoriteBorderOutlinedIcon,
            browse: true,
            my_playlists: false,
            message: "Playlist was followed on Spotify!",
            on_click: followOnClick,
        },
        {
            label: "Make Public",
            icon: PublicOutlinedIcon,
            browse: false,
            my_playlists: true,
            message: "Playlist successfully made public!",
            on_click: makePublicOnClick,
        },
        {
            label: "Create Copy",
            icon: FileCopyOutlinedIcon,
            browse: true,
            my_playlists: true,
            message: "Playlist successfully copied to your playlists!",
            on_click: copyOnClick,
        }
    ]

    const getButtons = (
        buttons.map(({label, icon, browse, my_playlists, on_click}) => {
            let Icon = icon;
            return (
                <React.Fragment>
                    { (props.isBrowse && browse || !(props.isBrowse) && my_playlists) ? [
                        <IconButton onClick={on_click} aria-label={label}>
                            <LightTooltip title={label} arrow placement="top">
                                <Icon fontSize="large" color="primary"/>
                            </LightTooltip>
                        </IconButton>
                    ] : []}
                </React.Fragment>
            )}
        )
    );

    return (
        <div>
            {snackBar()}
            {!props.isLoggedIn ? (<div/>) : (
                <div>
                    {getButtons}
                </div>
            )}
        </div>
    );
}

PlaylistListRowButtons.propTypes = {
    playlist: PropTypes.object,
    isBrowse: PropTypes.bool.isRequired,
    onClickFollowPlaylist: PropTypes.func,
    onMakePlaylistPublic: PropTypes.func,
};

export default PlaylistListRowButtons;
