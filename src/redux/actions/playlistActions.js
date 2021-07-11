import PlaylistService from '../../services/PlaylistService';
import UserService from '../../services/UserService';

export function getPlaylists() {
    // when the backend call was successfull and the movies are retrieved
    // in the dispatcher the movies will be added to the global state
    function onSuccess(playlists) {
        return { type: 'GETPLAYLISTS_SUCCESS', playlists: playlists };
    }
    // when the backend call was failed
    function onFailure(error) {
        // error handling
        console.log('failed to get the playlists', error);
    }

    return async (dispatch) => {
        try {
            // ask for the movies in the backend
            let playlists = await PlaylistService.getPlaylists();
            // call onSuccess in context of redux
            dispatch(onSuccess(playlists));
        } catch (e) {
            onFailure(e);
        }
    };
}

export function getPublicPlaylists() {
    // when the backend call was successfull and the playlists are retrieved
    // in the dispatcher the playlists will be added to the global state
    function onSuccess(playlists) {
        return { type: 'GETPUBLICPLAYLISTS_SUCCESS', playlists: playlists };
    }
    // when the backend call was failed
    function onFailure(error) {
        // error handling
        console.log('failed to get the public playlists', error);
    }

    return async (dispatch) => {
        try {
            // ask for the playlists in the backend
            let playlists = await PlaylistService.getPublicPlaylists();
            // call onSuccess in context of redux
            dispatch(onSuccess(playlists));
        } catch (e) {
            onFailure(e);
        }
    };
}

export function getUserPlaylists() {
    function onSuccess(playlists) {
        return { type: 'GETUSERPLAYLISTS_SUCCESS', playlists: playlists };
    }
    function onFailure(error) {
        console.log('failed to get users playlists', error);
    }

    return async (dispatch) => {
        try {
            let playlists = await PlaylistService.getUserPlaylists();
            dispatch(onSuccess(playlists));
        } catch (e) {
            onFailure(e);
        }
    };
}

export function searchForSong(songName, currentPlaylist) {
    function onSuccess(songs) {
        return {
            type: 'SEARCHFORSONG_SUCCESS',
            songs: songs,
            currentPlaylist: currentPlaylist,
        };
    }
    function onFailure(error) {
        console.log('failed to search for song: ', error);
    }

    return async (dispatch) => {
        try {
            const songs = await PlaylistService.searchForSong(songName);
            dispatch(onSuccess(songs));
        } catch (e) {
            onFailure(e);
        }
    };
}

export function addSongToPlaylist(playlistId, songId) {
    function onSuccess() {
        return { type: 'ADDSONG_SUCCESS' };
    }
    function onFailure(error) {
        console.log('failed to add song: ', error);
    }

    return async (dispatch) => {
        try {
            const result = await PlaylistService.addSongToPlaylist(
                playlistId,
                songId
            );
            console.log('result: ', result);
            dispatch(onSuccess());
        } catch (e) {
            onFailure(e);
        }
    };
}

export const getPlaylist = (id) => {
    function onSuccess(playlist) {
        return { type: 'GETPLAYLIST_SUCCESS', playlist: playlist };
    }
    function onFailure(error) {
        console.log('failed to load a playlist', error);
    }

    return async (dispatch, getState) => {
        try {
            let playlist = await PlaylistService.getPlaylist(id);
            dispatch(onSuccess(playlist));
        } catch (e) {
            onFailure(e);
        }
    };
};

export function addPlaylist(playlist) {
    function onSuccess() {
        return { type: 'ADDPlaylist_SUCCESS' };
    }
    function onFailure(error) {
        console.log('add playlist failure', error);
    }

    return async (dispatch) => {
        try {
            await PlaylistService.createPlaylist(playlist);
            dispatch(onSuccess());
        } catch (e) {
            onFailure(e);
        }
    };
}

export function followPlaylist(playlistId) {
    function onSuccess() {
        return { type: 'FOLLOW_PLAYLIST_SUCCESS' };
    }
    function onFailure(error) {
        console.log('follow playlist failure', error);
    }

    return async (dispatch) => {
        try {
            await PlaylistService.followPlaylist(playlistId);
            dispatch(onSuccess());
        } catch (e) {
            onFailure(e);
        }
    };
}

export function getPlaylistLength(playlistId) {
    function onSuccess() {
        return { type: 'PLAYLIST_LENGTH_SUCCESS' };
    }
    function onFailure(error) {
        console.log('get playlist length failure', error);
    }

    return async (dispatch) => {
        try {
            await PlaylistService.getPlaylistLength(playlistId);
            dispatch(onSuccess());
        } catch (e) {
            onFailure(e);
        }
    };
}
