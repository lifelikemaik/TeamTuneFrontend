import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Loading from "../components/Loading";
import BrowseComponent from "../components/BrowseComponent";
import {getPlaylists} from "../redux/actions";
import PlaylistListComponent from "../components/PlaylistListComponent";

/**
 * Manages process of:
 * browsing playlists
 * Creating copy of public playlists
 * following public playlists
 * 
 * @param {props} props
 */

function BrowsePlaylistsView(props) {
  // state from the redux store
  const playlists = useSelector((state) => state.entities.playlists);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // load playlists when the page is loaded or the playlists have changed.
    if (!playlists) {
      loadPlaylists();
    }
  }, [playlists]);

  const loadPlaylists = async () => {
    // trigger the redux action getPlaylists
    // TODO getPublicPlaylists
    props.dispatch(getPlaylists());
  };

  const onClickDisplayPlaylist = (id) => {
    // navigate to details of the selected playlist
    props.history.push("/playlist/" + id);
  };

  const onAddPlaylist = () => {
    // navigate to an empty mask for entering details of the new playlist
    props.history.push("/playlist/new");
  };


  return !playlists ? (
      // if no playlists are loaded, the above useEffect should be triggered
      <Loading />
  ) : !Array.isArray(playlists) ? (
      // TODO apparently something went wrong, usually there should be some kind of error handling
      <div>error</div>
  ) : (
      // everything is fine an the playlist list can be displayed
      <PlaylistListComponent
          playlists={playlists}
          onClickDisplayMovie={onClickDisplayPlaylist}
          onAddPlaylist={onAddPlaylist}
          isLoggedIn={!!user.user}
          isAdmin={!!user.user ? user.user.role === "admin" : false}
      />
  );

}


export default connect()(BrowsePlaylistsView);