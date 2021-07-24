import { connect, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Loading from '../components/layout/Loading';
import PlaylistDetailsComponent from '../components/playlistDetails/PlaylistDetailsComponent';
import {
    addPlaylist,
    addSongToPlaylist,
    addSongToPlaylistInvite,
    getPlaylist,
    searchForSong,
    getPlaylistLength,
    searchForSongInvite,
    removeSongFromPlaylist, playPlaylist,
} from '../redux/actions';

function PlaylistDetailsView(props) {
    // props can be deconstructed into single variables, so you do not need to write "props." all the time
    let { match, getPlaylist, searchForSong, searchForSongInvite, addSongToPlaylist, addSongToPlaylistInvite, removeSongFromPlaylist, playPlaylist} = props;

    // from redux store
    const selectedPlaylist = useSelector((state) => state.selectedPlaylist);
    const user = useSelector((state) => state.user);

    // state variable of this functional component
    const [newPlaylist, setNewPlaylist] = React.useState(false);

    useEffect(() => {
        // get id of playlist from URL
        let playlistId = match.params.id;

        getPlaylist(playlistId, !!user.user);
    }, [match.params]);

    const addSongToPlaylistHelper = (playlistId, songId) => {
        if(!(user.user)){
            addSongToPlaylistInvite(playlistId, songId);
        } else {
            addSongToPlaylist(playlistId, songId);
        }
    }

    const searchForSongHelper = (songName) => {
        if(!(user.user)){
            searchForSongInvite(songName, match.params.id);
        } else {
            searchForSong(songName, match.params.id);
        }
    }

    const removeSong = (songId) => {
        if (user.user) {
            removeSongFromPlaylist(match.params.id, songId);
        }
    }

    const startPlayback = (playlistId, songId) => {
        playPlaylist(playlistId, songId)
    }

    function checkBrowse(){
        if(match.params.id.length == 64){
            return true;
        }
        return false;
    }

    return !selectedPlaylist ||
        (!selectedPlaylist?.playlist &&
            !selectedPlaylist?.error &&
            !newPlaylist) ? (
        <Loading />
    ) : selectedPlaylist.error ? (
        <div>error</div>
    ) : selectedPlaylist.playlist ? (
        <PlaylistDetailsComponent
            playlist={selectedPlaylist.playlist}
            isLoggedIn={!!user.user}
            isAdmin={!!user.user ? user.user.role === 'admin' : false}
            searchForSong={searchForSongHelper}
            addSongToPlaylist={addSongToPlaylistHelper}
            removeSong={removeSong}
            startPlayback={startPlayback}
            getPlaylistLength={props.getPlaylistLength}
            user={user.user}
            isBrowse={checkBrowse()}
        />
    ) : null;
}

// connect() establishes allows the usage of redux functionality
// here the function getPlaylist, changePlaylist and addPlaylist are mentioned
// this is an alternative way of calling connecting them with redux
// another way is shown in PlaylistListView.js

export default connect(null, {
    getPlaylist,
    addPlaylist,
    searchForSong,
    searchForSongInvite,
    addSongToPlaylist,
    addSongToPlaylistInvite,
    getPlaylistLength,
    removeSongFromPlaylist,
    playPlaylist
})(PlaylistDetailsView);
