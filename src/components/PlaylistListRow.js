import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {IconButton, TableCell, TableRow, Typography} from "@material-ui/core";
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
        maxWidth: 54,
    },
}));

/**
 * For presenting and changing movies
 * @param {props} props
 */
function PlaylistListRow(props) {
    // with this you can access the above defined style classes
    const classes = useStyles();

    return (
        <TableRow
            key={props.playlist._id}
            onClick={() => props.onClickDisplayPlaylist(props.playlist._id)}
            height="118px"
        >
            <TableCell>
                <ImageIcon/>
            </TableCell>
            <TableCell>
                <Typography variant="h6">{props.playlist.title}</Typography>
            </TableCell>

            <TableCell>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography align="center">
                        00:00
                    </Typography>
                </div>
            </TableCell>

            <TableCell>
                <PlaylistListRowButtons
                    playlist={props.playlist}
                    isBrowse={props.isBrowse}
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
    isAdmin: PropTypes.bool,
    isBrowse: PropTypes.bool.isRequired,
};

export default PlaylistListRow;
