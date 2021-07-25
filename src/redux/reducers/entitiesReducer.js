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
            return {
                ...state,
                addedPlaylist: action.playlist
            };
        case 'REMOVE_PLAYLIST_SUCCESS':
            return {
                ...state,
                playlists: state.playlists.filter(playlist => playlist._id !== action.removedPlaylistId)
            }
        case 'UPDATEPLAYLIST_SUCCESS':
            const index = state.playlists.findIndex((playlist) => playlist._id === action.updatedPlaylist._id);
            if (index > -1) {
                state.playlists[index] = action.updatedPlaylist;
            }
            const newPlaylists = [...state.playlists];
            return {
                ...state,
                playlists: newPlaylists
            };
        case 'ADDSONG_SUCCESS':
            return { ...state };
        case 'RECOMMENDATION_SUCCESS':
            return { ...state,
            snapshot_id: action.snapshot_id
            };
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
