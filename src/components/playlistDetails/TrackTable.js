import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
} from '@material-ui/core';
import {Delete} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    trackImage: {
        boxShadow: theme.shadows[2],
        maxWidth: 60,
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
            align="right"
            width={props.width}
        >
            <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
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
        label: "Track Title",
        width: "40%",
    },
    {
        id: "interpret",
        label: "Interpret",
        width: "20%",
    },
    {
        id: "added_by",
        label: "Added By",
        width: "10%",
    },
    {
        id: "duration_ms",
        label: "Duration",
        width: "5%",
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
    // Special case duration since it needs to be sorted specially
    if (orderBy === 'duration') {
        orderBy = 'duration_ms'
    }
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
 * @param {order by property name} orderBy
 * @returns function that compares two objects
 */
function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

/**
 * Sort array with respect to the initial order of the objects
 * @param {to sort array} array
 * @param {comparator for sorting} comparator
 * @param {property to filter} onlyTeamTune
 * @returns sorted array
 */
function stableSort(array, comparator, onlyTeamTune) {
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
 * For presenting and changing tracks
 * @param {props} props
 */
function TrackTable(props) {
    const classes = useStyles();

    const [orderBy, setOrderBy] = React.useState();
    const [order, setOrder] = React.useState();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(50);


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


    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align="left"
                                width="10%"
                            >
                                Image
                            </TableCell>
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
                            {props.isBrowse ? (<div />) : (
                                <TableCell width="5%" align="right">
                                    Delete
                                </TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stableSort(
                            props.allSongs,
                            getComparator(order, orderBy)
                        )
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((song, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <img className={classes.trackImage} src={song.image_url} />
                                        </TableCell>
                                        <TableCell align="right">
                                            {song.title}
                                        </TableCell>
                                        <TableCell align="right">
                                            {song.interpret}
                                        </TableCell>
                                        <TableCell align="right">
                                            {song.added_by}
                                        </TableCell>
                                        <TableCell align="right">
                                            {props.getStringFromMilliseconds(
                                                song.duration_ms,
                                                false
                                            )}
                                        </TableCell>
                                        {props.isBrowse ? (<div />) : (
                                            <TableCell align="right">
                                                <IconButton
                                                    disabled={
                                                        !props.playlist
                                                            .is_own_playlist
                                                    }
                                                    onClick={() => props.removeSong(song)}
                                                >
                                                    <Delete />
                                                </IconButton>
                                            </TableCell>
                                        )}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[50, 100, 250]}
                component="div"
                count={props.allSongs.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onChangePage}
                onChangeRowsPerPage={onChangeRowsPerPage}
            />
        </div>
    );
}

// attributes of props and their type
TrackTable.propTypes = {};

export default TrackTable;
