import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import {copyPlaylist, getUserPlaylists, updatePlaylist} from "../redux/actions";
import PlaylistListComponent from "../components/playlistLists/PlaylistListComponent";
import Loading from "../components/layout/Loading";

/**
 * Manages the process of getting movie list data
 * @param {props} props
 */
function PlaylistListView(props) {
    // state from the redux store
    const playlists = useSelector((state) => state.entities.playlists);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        // load playlists when the page is loaded or the playlists have changed.
        if (!playlists) {
            loadPlaylists();
        }
    }, [playlists]);

    const loadPlaylists = async () => {
        // trigger the redux action getUserPlaylists
        props.dispatch(getUserPlaylists());
    };

    const onClickDisplayPlaylist = (id) => {
        // navigate to details of the selected playlist
        props.history.push("/playlist/" + id);
    };

    const onAddPlaylist = () => {
        // navigate to an empty mask for entering details of the new playlist
        props.history.push("/playlist/new");
    };

    const onMakePlaylistPublic = async (e, playlistId, updatedPlaylist) => {
        e.preventDefault();
        e.stopPropagation();
        props.dispatch(updatePlaylist(playlistId, updatedPlaylist));
    }

    const findPlaylistIndexById = (playlists, playlistId) => {
        return playlists.findIndex((playlist) => playlist._id == playlistId);
    }

    const onCopyPlaylist = async (e, playlistId) => {
        e.preventDefault();
        e.stopPropagation();
        props.dispatch(copyPlaylist(playlistId));
    }


    return !playlists ? (
        // if no playlists are loaded, the above useEffect should be triggered
        <Loading />
    ) : !Array.isArray(playlists) ? (
        // apparently something went wrong, usually there should be some kind of error handling
        <div>error</div>
    ) : (
        // everything is fine an the playlist list can be displayed
        <PlaylistListComponent
            playlists={playlists}
            onClickDisplayPlaylist={onClickDisplayPlaylist}
            onAddPlaylist={onAddPlaylist}
            onMakePlaylistPublic={onMakePlaylistPublic}
            onCopyPlaylist={onCopyPlaylist}
            isLoggedIn={!!user.user}
            isBrowse={false}
        />
    );
}

// connect() establishes the connection to the redux functionalities
export default connect()(PlaylistListView);
