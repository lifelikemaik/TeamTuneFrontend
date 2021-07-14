import { combineReducers } from "redux";
import user from "./userReducer";
import entities from "./entitiesReducer";
import selectedPlaylist from "./selectedPlaylistReducer";

export default combineReducers({
    user,
    entities,
    selectedPlaylist,
});
