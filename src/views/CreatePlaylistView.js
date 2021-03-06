import React, {useEffect} from "react";
import {connect, useSelector} from "react-redux";

import {addPlaylist} from "../redux/actions";
import CreatePlaylistComponent from "../components/createPlaylist/CreatePlaylistComponent";

/**
 * Creates a new playlist
 * @param {props} props
 */
function CreatePlaylistView(props) {
    // from redux store
    const user = useSelector((state) => state.user);
    const addedPlaylist = useSelector((state) => {
        // return the currently logged in user from redux store
        return state.entities.addedPlaylist;
    });

    useEffect(() => {
        if(addedPlaylist) {
            props.history.push(addedPlaylist._id);
        }
    }, [addedPlaylist]);

    // for creating a new playlist
    const onCreate = (playlist) => {
        // trigger redux action add playlist
        props.addPlaylist(playlist);
        // navigate back to the playlist list
    };

    return (
        <CreatePlaylistComponent
            onCreate={onCreate}
            isLoggedIn={!!user.user}
            isAdmin={!!user.user ? user.user.role === "admin" : false}
        />
    )
}

export default connect(null, {addPlaylist})(
    CreatePlaylistView
);
