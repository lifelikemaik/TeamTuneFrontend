export default function entities(state = {}, action) {
    switch (action.type) {
        case 'GETMOVIES_SUCCESS':
            return { movies: action.movies };
        case 'GETPLAYLISTS_SUCCESS':
            return { playlists: action.playlists };
        case 'GETUSERPLAYLISTS_SUCCESS':
            return { playlists: action.playlists };
        case 'GETPUBLICPLAYLISTS_SUCCESS':
            return { playlists: action.playlists };
        case 'DELETEMOVIE_SUCCESS':
            return { movies: action.movies };
        case 'ADDMOVIE_SUCCESS':
            return { ...state };
        case 'ADDPlaylist_SUCCESS':
            return { ...state };
        case 'ADDSONG_SUCCESS':
            return { ...state };
        case 'SEARCHFORSONG_SUCCESS':
            return { songs: action.songs };
        default:
            return state;
    }
}
