import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Loading from "../components/Loading";
import BrowseComponent from "../components/BrowseComponent";

/**
 * Manages process of:
 * browsing playlists
 * Creating copy of public playlists
 * following public playlists
 * 
 * @param {props} props
 */

function BrowsePlaylistsView(props) {
  return (
    <BrowseComponent/>
  );

}


export default connect()(BrowsePlaylistsView);