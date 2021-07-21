import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Loading from "../components/Loading";
import BrowseComponent from "../components/BrowseComponent";
import {getPublicPlaylists, followPlaylist, copyPlaylist} from "../redux/actions";
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
    props.dispatch(getPublicPlaylists());
  };

  const onClickDisplayPlaylist = (id) => {
    // navigate to details of the selected playlist
    props.history.push("/playlist/" + id);
  };

  const onClickFollowPlaylist = async (id) => {
    // trigger the redux action followPlaylist
    props.dispatch(followPlaylist(id));
  };

  const onCopyPlaylist = async (e, playlistId) => {
    e.preventDefault();
    e.stopPropagation();
    props.dispatch(copyPlaylist(playlistId));
  }


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
          onClickDisplayPlaylist={onClickDisplayPlaylist}
          isLoggedIn={!!user.user}
          isBrowse={true}
          onCopyPlaylist={onCopyPlaylist}
          onClickFollowPlaylist={onClickFollowPlaylist}
      />
  );

}


export default connect()(BrowsePlaylistsView);