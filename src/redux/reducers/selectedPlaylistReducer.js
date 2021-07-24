export default function selectedPlaylist(state = {}, action) {
    switch (action.type) {
        case "GETPLAYLIST_SUCCESS":
            return { playlist: action.playlist };
        case "PLAYLIST_ERROR":
            return { error: action.error };
        default:
            return state;
    }
}
