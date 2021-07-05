import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Delete } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '10px',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    playlistListPaper: {
        width: '95%',
    },
    descriptionSpan: {
        marginLeft: '5px',
    },
    searchRow: {
        width: '95%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textInput: {
        margin: '10px',
        flex: '1 1 auto',
    },
    textField: {
        width: '100%',
    },
    addToPlaylistButton: {
        float: 'right',
        marginLeft: 'auto'
    }
}));

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function PlaylistDetailsComponent(props) {
    const classes = useStyles();
    const playlist = props.playlist;

    const [expanded, setExpanded] = React.useState(false);
    const [sortedField, setSortedField] = React.useState(null);
    const [prevSortedField, setPrevSortedField] = React.useState(null);
    const [sortedDirection, setSortedDirection] = React.useState(null);
    const [searchString, setSearchString] = React.useState('');
    const [foundSongs, setFoundSongs] = React.useState([]);
    const [searchOpen, setSearchOpen] = React.useState(false);

    const foundSongsState = useSelector((state) => state.entities.songs);

    const autoCompleteRef = React.createRef();

    useEffect(() => {
        console.log('foundSongs: ', foundSongsState);
        if (!foundSongsState) {
            setFoundSongs([]);
        } else {
            setFoundSongs(foundSongsState);
            if (searchString !== '')
            setSearchOpen(true);
        }
    }, [foundSongsState]);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    
    const onOpen = () => {
        setSearchOpen(!searchOpen);
    }

    const onClose = () => {
        setSearchOpen(!searchOpen);
    }

    const onChangeSearch = (value) => {
        setSearchString(value.target.value);
    };

    const onSearchSong = (songName) => {
        setFoundSongs([]);
        props.searchForSong(songName);
    };

    const getAllArtistsString = (artists) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.name + ', ';
        return artists.reduce(reducer, '').slice(0, -2);
    }

    const getStringFromMilliseconds = (milliseconds) => {
        const minutes = Math.floor(milliseconds / 1000 / 60);
        const seconds = Math.round((milliseconds / 1000) % 60);
        return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    }

    const onAddSongToPlaylist = (song) => {
        const playlistId = props.playlist.spotify_id;
        const songId = song.spotify_id;
        if (songId && playlistId) {
            props.addSongToPlaylist(playlistId, songId);
        } else {
            console.error('No songId or no spotify_id of playlist found, playlist probably has no spotify_id.')
        }
    }

    const sortHeaders = (fieldSet) => {
        setSortedField(fieldSet);
        let localSortedDirection = sortedDirection;
        if (fieldSet) {
            if (
                prevSortedField &&
                prevSortedField === fieldSet &&
                localSortedDirection === 'asc'
            ) {
                localSortedDirection = 'desc';
            } else if (
                prevSortedField &&
                prevSortedField === fieldSet &&
                localSortedDirection === 'desc'
            ) {
                localSortedDirection = null;
            } else {
                localSortedDirection = 'asc';
            }
            setSortedDirection(localSortedDirection);
            setPrevSortedField(fieldSet);
            if (localSortedDirection === 'asc') {
                if (fieldSet === 'duration_ms') {
                    playlist.music_info.songs.sort(
                        (a, b) => b[fieldSet] - a[fieldSet]
                    );
                } else {
                    playlist.music_info.songs.sort((a, b) =>
                        a[fieldSet].localeCompare(b[fieldSet])
                    );
                }
            } else if (localSortedDirection === 'desc') {
                if (fieldSet === 'duration_ms') {
                    playlist.music_info.songs.sort(
                        (a, b) => a[fieldSet] - b[fieldSet]
                    );
                } else {
                    playlist.music_info.songs.sort((a, b) =>
                        b[fieldSet].localeCompare(a[fieldSet])
                    );
                }
            }
        }
    };

    const getProperty = (property) => {
        if (!(property[1] === 'Not set')) {
            return (
                <span className={classes.descriptionSpan}>
                    {property[0]}: {property[1] + '     '}
                </span>
            );
        }
    };

    const getPropertyListItem = (property) => {
        if (!(property[1] === 'Not set')) {
            return (
                <ListItem>
                    {property[0]}: {property[1]}
                </ListItem>
            );
        }
    };

    const durationMinutes = playlist.music_info.durations_ms / (1000 * 60);
    const durationHours = Math.trunc(durationMinutes / 60);
    const durationMinutesModulo = Math.round(durationMinutes % 60);

    const getStringValue = (valueMin, valueMax) => {
        if (valueMin && valueMax) {
            if (valueMin === 0 && valueMax === 0.33) return 'Low';
            else if (valueMin === 0.33 && valueMax === 0.66) return 'Medium';
            else if (valueMin === 0.66 && valueMax === 1) return 'High';
            else return `Custom value: ${valueMin} - ${valueMax}`;
        } else {
            return 'Not set';
        }
    };

    const properties = [
        [
            'Acousticness',
            getStringValue(
                playlist.music_info.acousticness_min,
                playlist.music_info.acousticness_max
            ),
        ],
        [
            'Danceability',
            getStringValue(
                playlist.music_info.danceability_min,
                playlist.music_info.danceability_max
            ),
        ],
        [
            'Energy',
            getStringValue(
                playlist.music_info.energy_min,
                playlist.music_info.energy_max
            ),
        ],
        [
            'Instrumentalness',
            getStringValue(
                playlist.music_info.instrumentalness_min,
                playlist.music_info.instrumentalness_max
            ),
        ],
        [
            'Key',
            getStringValue(
                playlist.music_info.instrumentalness_min,
                playlist.music_info.instrumentalness_max
            ),
        ],
        [
            'Liveness',
            getStringValue(
                playlist.music_info.liveness_min,
                playlist.music_info.liveness_max
            ),
        ],
        [
            'Loudness',
            getStringValue(
                playlist.music_info.loudness_min,
                playlist.music_info.loudness_max
            ),
        ],
        [
            'Speechiness',
            getStringValue(
                playlist.music_info.speechiness_min,
                playlist.music_info.speechiness_max
            ),
        ],
        [
            'Tempo',
            getStringValue(
                playlist.music_info.tempo_min,
                playlist.music_info.tempo_max
            ),
        ],
        [
            'Valence',
            getStringValue(
                playlist.music_info.valence_min,
                playlist.music_info.valence_max
            ),
        ],
    ];

    return (
        <div className={classes.root}>
            <h1>Playlist Overview</h1>

            {!playlist.is_teamtune_playlist ? (
                <div></div>
            ) : (
                <div>
                    <hr />
                    <Accordion
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                Playlist Properties
                            </Typography>
                            <Typography className={classes.secondaryHeading}>
                                {expanded ? (
                                    <div></div>
                                ) : (
                                    <div>{properties.map(getProperty)}</div>
                                )}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <List
                                    component="nav"
                                    aria-label="secondary mailbox folders"
                                >
                                    {properties.map(getPropertyListItem)}
                                </List>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <hr />
                </div>
            )}

            <div>
                <h2>
                    {playlist.title} - {durationHours}:{durationMinutesModulo}
                </h2>
            </div>
            <div className={classes.searchRow}>
                <div className={classes.textInput}>
                    <Autocomplete
                        className={classes.textField}
                        options={foundSongs}
                        getOptionLabel={(option) => option.name}
                        open={searchOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                        renderOption={(option) => (
                            <React.Fragment>
                                <div className={classes.searchRow}>
                                    <span>{option.name} - {getAllArtistsString(option.artists)} - {getStringFromMilliseconds(option.duration_ms)}</span>
                                    <Button className={classes.addToPlaylistButton} onClick={() => onAddSongToPlaylist(option)}>Add to Playlist</Button>
                                </div>
                            </React.Fragment>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                ref={autoCompleteRef}
                                onChange={(event, value) => onChangeSearch(event) }
                                label="Search for songs"
                                variant="outlined"
                                fullWidth
                            />
                        )}
                    />
                </div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => onSearchSong(searchString)}
                    >
                        Search
                    </Button>
                </div>
            </div>
            <div>
                <Paper className={classes.playlistListPaper}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="right"
                                        onClick={() => sortHeaders('number')}
                                    >
                                        #
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        onClick={() => sortHeaders('title')}
                                    >
                                        Title
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        onClick={() => sortHeaders('interpret')}
                                    >
                                        Interpret
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        onClick={() => sortHeaders('added_by')}
                                    >
                                        Added by
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        onClick={() =>
                                            sortHeaders('duration_ms')
                                        }
                                    >
                                        Duration
                                    </TableCell>
                                    <TableCell align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {playlist.music_info.songs.map(
                                    (song, index) => (
                                        <TableRow key={song.interpret}>
                                            <TableCell
                                                align="right"
                                                component="th"
                                                scope="row"
                                            >
                                                {index}
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
                                                {song.duration_ms}
                                            </TableCell>
                                            <TableCell align="right">
                                                <IconButton>
                                                    <Delete />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    )
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
        </div>
    );
}

// attributes of props and their type
PlaylistDetailsComponent.propTypes = {
    playlist: PropTypes.object,
    searchForSong: PropTypes.func,
    addSongToPlaylist: PropTypes.func,
};

// withRouter() allows accessing the necessary functionality to navigate from this component
export default withRouter(PlaylistDetailsComponent);
