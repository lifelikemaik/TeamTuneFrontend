import PlaylistService from '../../services/PlaylistService';

export function getPlaylists() {
    // when the backend call was successfull and the playlists are retrieved
    // in the dispatcher the playlists will be added to the global state
    function onSuccess(playlists) {
        return { type: 'GETPLAYLISTS_SUCCESS', playlists: playlists };
    }
    // when the backend call was failed
    function onFailure(error) {
        // error handling
        console.log('failed to get the playlists', error);
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            // ask for the playlists in the backend
            let playlists = await PlaylistService.getPlaylists();
            // call onSuccess in context of redux
            dispatch(onSuccess(playlists));
        } catch (e) {
            dispatch(onFailure(e));
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
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            // ask for the playlists in the backend
            let playlists = await PlaylistService.getPublicPlaylists();
            // call onSuccess in context of redux
            dispatch(onSuccess(playlists));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function getUserPlaylists() {
    function onSuccess(playlists) {
        return { type: 'GETUSERPLAYLISTS_SUCCESS', playlists: playlists };
    }
    function onFailure(error) {
        console.log('failed to get users playlists', error);
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            let playlists = await PlaylistService.getUserPlaylists();
            dispatch(onSuccess(playlists));
        } catch (e) {
            dispatch(onFailure(e));
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
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            const songs = await PlaylistService.searchForSong(songName);
            dispatch(onSuccess(songs));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function searchForSongInvite(songName, currentPlaylist) {
    function onSuccess(songs) {
        return {
            type: 'SEARCHFORSONG_SUCCESS',
            songs: songs,
            currentPlaylist: currentPlaylist,
        };
    }
    function onFailure(error) {
        console.log('failed to search for song: ', error);
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            const songs = await PlaylistService.searchForSongInvite(songName, currentPlaylist);
            dispatch(onSuccess(songs));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function addSongToPlaylist(playlistId, songId) {
    function onSuccess() {
        return { type: 'ADDSONG_SUCCESS' };
    }
    function onFailure(error) {
        console.log('failed to add song: ', error);
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            const result = await PlaylistService.addSongToPlaylist(
                playlistId,
                songId
            );
            dispatch(onSuccess());
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function addSongToPlaylistInvite(playlistId, songId) {
    function onSuccess() {
        return { type: 'ADDSONG_SUCCESS' };
    }
    function onFailure(error) {
        console.log('failed to add song: ', error);
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            const result = await PlaylistService.addSongToPlaylistInvite(
                playlistId,
                songId
            );
            dispatch(onSuccess());
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function removePlaylist(playlistId) {
    function onSuccess(removedPlaylistId) {
        return { type: 'REMOVE_PLAYLIST_SUCCESS', removedPlaylistId: removedPlaylistId };
    }
    function onFailure(error) {
        console.log('failed to remove playlist: ', error);
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            const result = await PlaylistService.removePlaylist(
                playlistId
            );
            dispatch(onSuccess(result.removedPlaylistId));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function playPlaylist(playlistId, songId) {
    function onSuccess() {
        return { type: 'PLAY_PLAYLIST_SUCCESS'};
    }
    function onFailure(error) {
        console.log('failed to play playlist: ', error);
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            const result = await PlaylistService.playPlaylist(
                playlistId, songId
            );
            dispatch(onSuccess());
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function removeSongFromPlaylist(playlistId, songId) {
    function onSuccess(removedSongId) {
        return { type: 'REMOVE_SONG_SUCCESS', removedSongId: removedSongId };
    }
    function onFailure(error) {
        console.log('failed to remove song: ', error);
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            const result = await PlaylistService.removeSongFromPlaylist(
                playlistId,
                songId
            );
            dispatch(onSuccess(result.removedSongId));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export const getPlaylist = (id, loggedIn) => {
    function onSuccess(playlist) {
        return { type: 'GETPLAYLIST_SUCCESS', playlist: playlist };
    }
    function onFailure(error) {
        console.log('failed to load a playlist', error);
        return { type: 'ERROR', error: error };
    }

    return async (dispatch, getState) => {
        try {
            let playlist = await PlaylistService.getPlaylist(id, loggedIn);
            dispatch(onSuccess(playlist));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
};

export function addPlaylist(playlist) {
    function onSuccess(playlist) {
        return { type: 'ADDPlaylist_SUCCESS', playlist: playlist};
    }
    function onFailure(error) {
        console.log('add playlist failure', error);
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            const result = await PlaylistService.createPlaylist(playlist);
            dispatch(onSuccess(result));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
};

export function updatePlaylist(playlistId, updatedPlaylist) {
    function onSuccess(updatedPlaylist) {
        return { type: 'UPDATEPLAYLIST_SUCCESS', updatedPlaylist: updatedPlaylist };
    }
    function onFailure(error) {
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            const result = await PlaylistService.updatePlaylist(playlistId, updatedPlaylist);
            dispatch(onSuccess(result));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function copyPlaylist(playlistId) {

    function onSuccess(playlist) {
        return { type: 'COPYPLAYLIST_SUCCESS', playlist: playlist };
    }
    function onFailure(error) {
        console.log('copy playlist failure', error);
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            const result = await PlaylistService.copyPlaylist(playlistId);
            dispatch(onSuccess(result));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function followPlaylist(playlistId) {
    function onSuccess() {
        return { type: 'FOLLOW_PLAYLIST_SUCCESS' };
    }
    function onFailure(error) {
        console.log('follow playlist failure', error);
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            await PlaylistService.followPlaylist(playlistId);
            dispatch(onSuccess());
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function getPlaylistLength(playlistId) {
    function onSuccess() {
        return { type: 'PLAYLIST_LENGTH_SUCCESS' };
    }
    function onFailure(error) {
        console.log('get playlist length failure', error);
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            await PlaylistService.getPlaylistLength(playlistId);
            dispatch(onSuccess());
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function getFullRecommendations(playlistId) {
    function onSuccess(snapshot_id) {
        return { type: 'RECOMMENDATION_SUCCESS', snapshot_id: snapshot_id };
    }
    function onFailure(error) {
        console.log('full recommendations failed', error);
        return { type: 'ERROR', error: error };
    }

    return async (dispatch) => {
        try {
            const result = await PlaylistService.fullRecommendation(playlistId);
            dispatch(onSuccess(result.snapshot_id));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}