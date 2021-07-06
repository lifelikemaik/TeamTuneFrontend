export default function entities(state = {}, action) {
    switch (action.type) {
        case 'GETPLAYLISTS_SUCCESS':
            return { playlists: action.playlists };
        case 'GETUSERPLAYLISTS_SUCCESS':
            return { playlists: action.playlists };
        case 'GETPUBLICPLAYLISTS_SUCCESS':
            return { playlists: action.playlists };
        case 'ADDPlaylist_SUCCESS':
            return { ...state };
        case 'UPDATEPLAYLIST_SUCCESS':
            return { ...state };
        case 'ADDSONG_SUCCESS':
            return { ...state };
        case 'SEARCHFORSONG_SUCCESS':
            return { songs: action.songs };
        default:
            return state;
    }
}
