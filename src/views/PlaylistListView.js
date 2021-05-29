import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import { getPlaylists } from "../redux/actions";
import PlaylistList from "../components/PlaylistList";
import Loading from "../components/Loading";

/**
 * Manages the process of getting movie list data
 * @param {props} props
 */
function PlaylistListView(props) {
    // state from the redux store
    const playlists = useSelector((state) => state.entities.playlists);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        // load movies when the page is loaded or the movies have changed.
        if (!playlists) {
            loadPlaylists();
        }
    }, [playlists]);

    const loadPlaylists = async () => {
        // trigger the redux action getMovies
        props.dispatch(getPlaylists());
    };

    const onClickDisplayMovie = (id) => {
        // navigate to details of the selected movie
        props.history.push("/movie/" + id);
    };

    const onAddPlaylist = () => {
        // navigate to an empty mask for entering details of the new movie
        props.history.push("/playlist/new");
    };

    return !playlists ? (
        // if no movies are loaded, the above useEffect should be triggered
        <Loading />
    ) : !Array.isArray(playlists) ? (
        // apperantly something went wrong, usually there should be some kind of error handling
        <div>error</div>
    ) : (
        // everyhing is fine an the movie list can be displayed
        <PlaylistList
            playlists={playlists}
            onClickDisplayMovie={onClickDisplayMovie}
            onAddPlaylist={onAddPlaylist}
            isLoggedIn={!!user.user}
            isAdmin={!!user.user ? user.user.role === "admin" : false}
        />
    );
}

// connect() establishes the connection to the redux functionalities
export default connect()(PlaylistListView);
