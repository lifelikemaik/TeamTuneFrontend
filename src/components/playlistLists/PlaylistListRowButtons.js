import {IconButton, Snackbar, Tooltip, withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Alert } from '@material-ui/lab';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

function PlaylistListRowButtons(props) {
    const [publicity, setPublicity] = React.useState(props.playlist.publicity);

    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState(false);

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
                    {message}
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
            'https://teamtune.fun/invite/' +
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
        preventBackgroundClick(e);
        props.onMakePlaylistPublic(
            e,
            props.playlist._id,
            { publicity: true }
        );
        setPublicity(true);
        handleClick('Playlist made public!');
    }

    const copyOnClick = (e) => {
        preventBackgroundClick(e);
        props.onCopyPlaylist(e, props.playlist._id || props.playlist.public_id); // Use public_id on browse where _id doesn't exist, will be converted in the backend
        handleClick('Playlist copied!');
    }

    const deleteOnClick = (e) => {
        preventBackgroundClick(e);
        props.onClickDeletePlaylist(e, props.playlist._id);
        handleClick('Playlist deleted!');
    };

    const playOnClick = (e) => {
        preventBackgroundClick(e);
        const id = props.isBrowse
            ? props.playlist.public_id
            : props.playlist._id;
        props.onClickPlayPlaylist(id);
        handleClick('Playback started!');
    };

    const buttons = [
        {
            label: "Play Playlist",
            icon: PlayCircleOutlineIcon,
            display: props.isLoggedIn,
            message: "Playback started!",
            on_click: playOnClick,
        },
        {
            label: "Copy Invite Link",
            icon: ShareOutlinedIcon,
            display: !props.isBrowse && props.playlist.is_teamtune_playlist && props.playlist.is_own_playlist,
            message: "Link was copied to the clipboard!",
            on_click: shareLinkOnClick,
        },
        {
            label: "Follow Playlist",
            icon: FavoriteBorderOutlinedIcon,
            display: props.isBrowse && !(props.playlist.owner == props.user?._id),
            message: "Playlist was followed on Spotify!",
            on_click: followOnClick,
        },
        {
            label: "Make Public",
            icon: PublicOutlinedIcon,
            display: !publicity && (props.playlist.is_own_playlist) && props.playlist.is_teamtune_playlist,
            message: "Playlist successfully made public!",
            on_click: makePublicOnClick,
        },
        {
            label: "Create Copy",
            icon: FileCopyOutlinedIcon,
            display: true,
            message: "Playlist successfully copied to your playlists!",
            on_click: copyOnClick,
        },
        {
            label: "Delete Playlist",
            icon: DeleteOutlineOutlinedIcon,
            display: props.playlist.is_teamtune_playlist && props.playlist.is_own_playlist && !props.isBrowse,
            message: "Playlist successfully deleted!",
            on_click: deleteOnClick,
        }
    ]

    const getButtons = (
        buttons.map(({label, icon, display, on_click}) => {
            let Icon = icon;
            return (
                <React.Fragment>
                    { display ? [
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
    isLoggedIn: PropTypes.bool,
    playlist: PropTypes.object,
    isBrowse: PropTypes.bool.isRequired,
    onClickFollowPlaylist: PropTypes.func,
    onMakePlaylistPublic: PropTypes.func,
    copyOnClick: PropTypes.func,
};

export default PlaylistListRowButtons;
