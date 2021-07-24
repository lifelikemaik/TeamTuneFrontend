export default function entities(state = {}, action) {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: action.error
            }
        case 'GETPLAYLISTS_SUCCESS':
            return { playlists: action.playlists };
        case 'GETUSERPLAYLISTS_SUCCESS':
            return { playlists: action.playlists };
        case 'GETPUBLICPLAYLISTS_SUCCESS':
            return { playlists: action.playlists };
        case 'COPYPLAYLIST_SUCCESS':
            state.playlists.push(action.playlist);
            return { ...state };
        case 'FOLLOW_Playlist_SUCCESS':
            return { ...state };
        case 'ADDPlaylist_SUCCESS':
            return { ...state };
        case 'REMOVE_PLAYLIST_SUCCESS':
            return {
                ...state,
                playlists: state.playlists.filter(playlist => playlist._id !== action.removedPlaylistId)
            }
        case 'UPDATEPLAYLIST_SUCCESS':
            return { ...state };
        case 'ADDSONG_SUCCESS':
            return { ...state };
        case 'REMOVE_SONG_SUCCESS':
            return {
                ...state,
                removedSongId: action.removedSongId
            };
        case 'PLAY_PLAYLIST_SUCCESS':
            return {...state};
        case 'SEARCHFORSONG_SUCCESS':
            return { songs: action.songs };
        default:
            return state;
    }
}
