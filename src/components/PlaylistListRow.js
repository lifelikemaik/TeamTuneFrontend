import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {IconButton, Paper, TableCell, TableRow, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import ImageIcon from "@material-ui/icons/Image";
import DeleteIcon from "@material-ui/icons/Delete";
import {Rating} from "@material-ui/lab";
import PlaylistListRowButtons from "./PlaylistListRowButtons";

// a material ui function. With this way of styling you have the style classes of this component in one place
// and you can access the global theme of the application
const useStyles = makeStyles((theme) => ({
    image: {
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
        maxWidth: 140,
    },
    row: {
        zIndex: 1,
    }
}));

/**
 * For presenting and changing movies
 * @param {props} props
 */
function PlaylistListRow(props) {
    // with this you can access the above defined style classes
    const {image, row} = useStyles();

    const playlistId = (props.isBrowse ? props.playlist.public_id : props.playlist._id);
    return (
        <TableRow
            className={row}
            key={playlistId}
            onClick={() => props.onClickDisplayPlaylist(playlistId)}
            height="118px"
        >
            <TableCell>
                <img className={image} src={props.playlist.image_url} />
            </TableCell>
            <TableCell>
                <Typography variant="h6">{props.playlist.title}</Typography>
            </TableCell>

            <TableCell>
                <Typography align="center">
                    {props.playlist.track_count}
                </Typography>
            </TableCell>

            <TableCell>
                <PlaylistListRowButtons
                    playlist={props.playlist}
                    isBrowse={props.isBrowse}
                    onClickFollowPlaylist={props.onClickFollowPlaylist}
                />
            </TableCell>
        </TableRow>
    );
}

// attributes of props and their type
PlaylistListRow.propTypes = {
    playlist: PropTypes.object,
    onClickDisplayPlaylist: PropTypes.func,
    onClickDeleteMovie: PropTypes.func,
    onClickFollowMovie: PropTypes.func,
    isAdmin: PropTypes.bool,
    isBrowse: PropTypes.bool.isRequired,
};

export default PlaylistListRow;
