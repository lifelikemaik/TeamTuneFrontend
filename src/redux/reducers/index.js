import { combineReducers } from "redux";
import user from "./userReducer";
import entities from "./entitiesReducer";
import selectedMovie from "./selectedMovieReducer";
import selectedPlaylist from "./selectedPlaylistReducer";

export default combineReducers({
    user,
    entities,
    selectedMovie,
    selectedPlaylist,
});
