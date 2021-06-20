import PlaylistService from "../../services/PlaylistService";

export function getPlaylists() {
    // when the backend call was successfull and the movies are retrieved
    // in the dispatcher the movies will be added to the global state
    function onSuccess(playlists) {
        return { type: "GETPLAYLISTS_SUCCESS", playlists: playlists };
    }
    // when the backend call was failed
    function onFailure(error) {
        // error handling
        console.log("failed to get the playlists", error);
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
        return { type: "GETPUBLICPLAYLISTS_SUCCESS", playlists: playlists };
    }
    // when the backend call was failed
    function onFailure(error) {
        // error handling
        console.log("failed to get the public playlists", error);
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

export const getPlaylist = (id) => {
    function onSuccess(playlist) {
        return { type: "GETPLAYLIST_SUCCESS", playlist: playlist };
    }
    function onFailure(error) {
        console.log("failed to load a playlist", error);
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
        return { type: "ADDPlaylist_SUCCESS" };
    }
    function onFailure(error) {
        console.log("add playlist failure", error);
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