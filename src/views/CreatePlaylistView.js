import React, {useEffect} from "react";
import {connect, useSelector} from "react-redux";

import {addPlaylist} from "../redux/actions";
import CreatePlaylistComponent from "../components/CreatePlaylistComponent";

/**
 * Manages the process of getting movie details data
 * @param {props} props
 */
function CreatePlaylistView(props) {
    // props can be deconstructed into single variables, so you do not need to write "props." all the time
    // let { match, getMovie } = props;

    // from redux store
    const user = useSelector((state) => state.user);

    // for creating a new movie
    const onCreate = (playlist) => {
        // trigger redux action add playlist
        props.addPlaylist(playlist);
        // navigate back to the playlist list
        props.history.push("/");
    };

    return (
        <CreatePlaylistComponent
            onCreate={onCreate}
            isLoggedIn={!!user.user}
            isAdmin={!!user.user ? user.user.role === "admin" : false}
        />
    )
}

// connect() establishes allows the usage of redux functionality
// here the function getMovie, changeMovie and addMovie are mentionend
// this is an alternative way of calling connecting them with redux
// another way is shown in MovieListView.js
export default connect(null, {addPlaylist})(
    CreatePlaylistView
);
