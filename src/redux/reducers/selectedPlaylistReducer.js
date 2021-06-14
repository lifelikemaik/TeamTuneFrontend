export default function selectedPlaylist(state = {}, action) {
    switch (action.type) {
        case "GETPLAYLIST_SUCCESS":
            return { playlist: action.playlist };
        case "PLAYLIST_ERROR":
            return { error: action.error };
        case "CHANGE_SELECTED_PLAYLIST":
            return {
                movie: {
                    ...state.playlist,
                    ...action.updates,
                },
            };
        default:
            return { playlist: action.playlist };
    }
}
