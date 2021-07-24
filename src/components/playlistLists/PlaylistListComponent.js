import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Button,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    TableSortLabel,
    TablePagination, Checkbox,
} from "@material-ui/core";
import PropTypes from "prop-types";
import PlaylistListRow from "./PlaylistListRow";

// a material ui function. With this way of styling you have the style classes of this component in one place
// and you can access the global theme of the application
const useStyles = makeStyles((theme) => ({
    playlistListRoot: {
        padding: theme.spacing(2),
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    playlistListHeader: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        maxWidth: "1000px",
    },
    headerDivider: {
        margin: theme.spacing(2),
    },
    addPlaylistButton: {
        fontFamily: "Libre Franklin, sans-serif",
        borderRadius: 100,
        margin: theme.spacing(2),
        width: "110%",
        height: "40px",
        fontSize: 20,
        color: "black",
        backgroundColor: "1db954",
        '&:hover': {
            backgroundColor: "1db954",
            opacity: "90%",
        },
    },
    playlistListPaper: {
        width: "1000px",
    },
    image: {
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
    },
    filterBarRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
}));

/**
 * header cells for sortable table columns
 * @param {props} props
 */
function SortableTableHeadCell(props) {
    const { headCell, order, orderBy, onRequestSort } = props;

    return (
        <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            align="center"
            width={props.width}
        >
            <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={onRequestSort}
            >
                {headCell.label}
            </TableSortLabel>
        </TableCell>
    );
}

// data for sortable table columns
const sortableHeadCells = [
    {
        id: "title",
        label: "Playlist Name",
        width: "30%",
    },
    {
        id: "track_count",
        label: "Track Count",
        width: "30%",
    },
];

/**
 * Comparator for two objects on a generic property
 * @param {compare object a} a
 * @param {compare object b} b
 * @param {order by property name} orderBy
 * @returns 1 when b > a, -1 when a < b
 */
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

/**
 * Get comparator for sorting table
 * @param {asc or desc} order
 * @param {order by propoerty name} orderBy
 * @returns function that compares two objects
 */
function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function filterPlaylists(array, onlyTeamTune, onlyPublic, onlyPrivate) {
    if(onlyTeamTune){
        array = array.filter(playlist => playlist.is_teamtune_playlist);
    }
    if(onlyPublic){
        return array.filter(playlist => playlist.publicity);
    } else {
        return array.filter(playlist => !playlist.publicity);
    }
    return array;
}

/**
 * Sort array with respect to the initial order of the objects
 * @param {to sort array} inputArray
 * @param {comparator for sorting} comparator
 * @param {property to filter} onlyTeamTune
 * @returns sorted array
 */
function stableSort(inputArray, comparator, onlyTeamTune, onlyPublic, onlyPrivate) {
    const array = filterPlaylists(inputArray, onlyTeamTune, onlyPublic, onlyPrivate);
    filterPlaylists(array, true);
    // include index into the to sortable array objects
    const stabilizedThis = array.map((el, index) => [el, index]);
    // sort the array
    stabilizedThis.sort((a, b) => {
        // compare two array objects a[0] or b[0] refer to the original element of the list a[1] or b[1] would be the initial index
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        // if both objects have the same property value in the order by property, their initial order in the array is maintained
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

/**
 * For presenting and changing playlists
 * @param {props} props
 */
function PlaylistListComponent(props) {
    // with this you can access the above defined style classes
    const classes = useStyles();

    const [orderBy, setOrderBy] = React.useState();
    const [order, setOrder] = React.useState();
    const [onlyTeamTune, setTeamTune] = React.useState(false);
    const [onlyPublic, setOnlyPublic] = React.useState(false);
    const [onlyPrivate, setOnlyPrivate] = React.useState(false);
    const [playlistCount, setPlaylistCount] = React.useState(props.playlists.length);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const onChangeTeamTune = (event) => {
        setTeamTune(!onlyTeamTune);
        if(!onlyTeamTune){
            setPlaylistCount(props.playlists.filter(playlist => playlist.is_teamtune_playlist).length);
            setPage(0);
        } else {
            setPlaylistCount(props.playlists.length);
        }
    }
    const onChangePublic = (event) => {
        setOnlyPublic(!onlyPublic);
        setOnlyPrivate(false);
        if(!onlyPublic){
            setPlaylistCount(props.playlists.filter(playlist => playlist.publicity).length);
            setPage(0);
        } else {
            setPlaylistCount(props.playlists.length);
        }
    }

    const onChangePrivate = (event) => {
        setOnlyPrivate(!onlyPrivate);
        setOnlyPublic(false);
        if(!onlyPrivate){
            setPlaylistCount(props.playlists.filter(playlist => !playlist.publicity).length);
            setPage(0);
        } else {
            setPlaylistCount(props.playlists.length);
        }
    }

    const onRequestSort = (cellId, event) => {
        // if the current orderBy is also the clicked property then the direction of the sorting should be changed
        // otherwise the fist order direction is always ascending
        const isAsc = orderBy === cellId && order === "asc";
        setOrder(isAsc ? "desc" : "asc");

        // setting the called cell id as order by
        setOrderBy(cellId);
    };

    const onChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const onChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const filterBar = (
        <div>
            {props.isBrowse ? (<div/>) : (
                <div className={classes.filterBarRow}>
                    <div>
                        <Checkbox
                            checked={onlyTeamTune}
                            onChange={onChangeTeamTune}
                            style={{
                                transform: "scale(1.2)",
                            }}
                        />
                        <label
                            onClick={onChangeTeamTune}
                            style={{ cursor: "pointer"}}>
                            Only TeamTune Playlists
                        </label>
                    </div>
                    <div>
                        <Checkbox
                            checked={onlyPublic}
                            onChange={onChangePublic}
                            style={{
                                transform: "scale(1.2)",
                            }}
                        />
                        <label
                            onClick={onChangePublic}
                            style={{ cursor: "pointer"}}>
                            Only Public Playlists
                        </label>
                    </div>
                    <div>
                        <Checkbox
                            checked={onlyPrivate}
                            onChange={onChangePrivate}
                            style={{
                                transform: "scale(1.2)",
                            }}
                        />
                        <label
                            onClick={onChangePrivate}
                            style={{ cursor: "pointer"}}>
                            Only Private Playlists
                        </label>
                    </div>
                </div>
            )}
        </div>
    )

    return (
        <div className={classes.playlistListRoot}>
            <div>
                {props.isBrowse ? (
                    <div />
                ) : (
                    <Button
                        onClick={props.onAddPlaylist}
                        variant="contained"
                        color="secondary"
                        className={classes.addPlaylistButton}
                    >
                        Create a new Playlist
                    </Button>
                )}
            </div>
            <Paper className={classes.playlistListPaper}>
                {filterBar}
                <Divider/>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell width="10%">Picture</TableCell>
                                {sortableHeadCells.map((headCell, index) => (
                                    <SortableTableHeadCell
                                        key={index}
                                        order={order}
                                        orderBy={orderBy}
                                        headCell={headCell}
                                        onRequestSort={() =>
                                            onRequestSort(headCell.id)
                                        }
                                        width={headCell.width}
                                    />
                                ))}
                                <TableCell width="20%">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {stableSort(
                                props.playlists,
                                getComparator(order, orderBy),
                                onlyTeamTune,
                                onlyPublic,
                                onlyPrivate
                            )
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((playlist, index) => {
                                    return (
                                        <PlaylistListRow
                                            key={index}
                                            playlist={playlist}
                                            onClickDisplayPlaylist={
                                                props.onClickDisplayPlaylist
                                            }
                                            onClickFollowPlaylist={
                                                props.onClickFollowPlaylist
                                            }
                                            onClickDeletePlaylist={
                                                props.onClickDeletePlaylist
                                            }
                                            onClickPlayPlaylist={props.onClickPlayPlaylist}
                                            onMakePlaylistPublic={props.onMakePlaylistPublic}
                                            onCopyPlaylist={props.onCopyPlaylist}
                                            isAdmin={props.isAdmin}
                                            isBrowse={props.isBrowse}
                                            isLoggedIn={props.isLoggedIn}
                                        />
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25]}
                    component="div"
                    count={playlistCount}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={onChangePage}
                    onChangeRowsPerPage={onChangeRowsPerPage}
                />
            </Paper>


        </div>
    );
}

// attributes of props and their type
PlaylistListComponent.propTypes = {
    onAddPlaylist: PropTypes.func,
    onClickDeletePlaylist: PropTypes.func,
    onClickDisplayPlaylist: PropTypes.func.isRequired,
    onClickPlayPlaylist: PropTypes.func.isRequired,
    onClickFollowPlaylist: PropTypes.func,
    onMakePlaylistPublic: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    playlists: PropTypes.array,
    isBrowse: PropTypes.bool.isRequired,
};

export default PlaylistListComponent;
