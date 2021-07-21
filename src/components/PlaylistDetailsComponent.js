import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { duration, makeStyles } from '@material-ui/core/styles';
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
import SpotifyLogoWithText from './SpotifyLogoWithText';

const useStyles = makeStyles((theme) => ({
    backgroundPaper: {
        minWidth: '350px',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    spotify: {
        backgroundColor: '#1ED760',
        color: '#ffffff',
        fontWeight: 'bold',
        maxHeight: 60,
        marginTop: 15,
        marginRight: 20,
        letterSpacing: 1,
        fontFamily: 'Libre Franklin, sans-serif',
        borderRadius: 100,
        '&:hover': {
            backgroundColor: '#1ED760',
        },
    },
    headerRowA: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 20,
    },
    headerRowB: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    headerColumnA: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        marginLeft: 20,
    },
    headerColumnB: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    sideButton: {
        borderRadius: 100,
        fontFamily: 'Libre Franklin, sans-serif',
        width: "60%",
        margin: 20,
    },
    image: {
        boxShadow: theme.shadows[2],
        display: "flex",
        maxWidth: 180,
        maxHeight: 180,
    },
    trackImage: {
        boxShadow: theme.shadows[2],
        maxWidth: 60,
    },
    root: {
        width: '95%',
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
    descriptionSpan: {
        marginLeft: '5px',
    },
    searchRow: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textInput: {
        marginTop: 10,
        marginBottom: 20,
        marginRight: 10,
        flex: '1 1 auto',
    },
    textField: {
        width: '100%',
    },
    addToPlaylistButton: {
        float: 'right',
        marginLeft: 'auto',
    },
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
    const [totalDuration, setTotalDuration] = React.useState(0);
    const [sortedField, setSortedField] = React.useState(null);
    const [prevSortedField, setPrevSortedField] = React.useState(null);
    const [sortedDirection, setSortedDirection] = React.useState(null);
    const [searchString, setSearchString] = React.useState('');
    const [foundSongs, setFoundSongs] = React.useState([]);
    const [searchOpen, setSearchOpen] = React.useState(false);
    const [allSongs, setAllSongs] = React.useState([]);

    const foundSongsState = useSelector((state) => state.entities.songs);
    const removedSongIdState = useSelector((state) => state.entities.removedSongId);

    const autoCompleteRef = React.createRef();

    useEffect(() => {
        console.log('foundSongs: ', foundSongsState);
        if (!foundSongsState) {
            setFoundSongs([]);
        } else {
            setFoundSongs(
                foundSongsState.map((song) => validateSongWithFilters(song))
            );
            if (searchString !== '') setSearchOpen(true);
        }
    }, [foundSongsState]);

    useEffect(() => {
        if (removedSongIdState) {
            const newSongs = allSongs.filter(song => song.id !== removedSongIdState);
            setAllSongs(newSongs);
        }
    }, [removedSongIdState]);

    useEffect(() => {
        if (playlist.music_info.songs.length > 0) {
            const reducer = (accumulator, currentValue) =>
                accumulator + currentValue;
            setTotalDuration(
                playlist.music_info.songs
                    .map((song) => song.duration_ms)
                    .reduce(reducer)
            );
            if (Array.isArray(playlist.music_info.songs)) {
                setAllSongs(playlist.music_info.songs);
            }
        }
    }, [playlist.music_info.songs]);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const onOpen = () => {
        setSearchOpen(!searchOpen);
    };

    const onClose = () => {
        setSearchOpen(!searchOpen);
    };

    const onChangeSearch = (value) => {
        setSearchString(value.target.value);
    };

    const onSearchSong = (songName) => {
        setFoundSongs([]);
        props.searchForSong(songName);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && searchString !== '') {
            onSearchSong(searchString);
        }
    };

    const getAllArtistsString = (artists) => {
        const reducer = (accumulator, currentValue) =>
            accumulator + currentValue.name + ', ';
        return artists.reduce(reducer, '').slice(0, -2);
    };

    const packSong = (song) => {
        return {
            interpret: song.artists.map((artist) => artist.name).join(', '),
            album: '',
            title: song.name,
            added_by: props.user?.username ? props.user.username : '',
            duration_ms: song.duration_ms,
            image_url: song.image_url,
            id: song.spotify_id //Check if correct, might just be id in some edge cases
        };
    };

    const addSongLocal = (song) => {
        const allSongsTemp = allSongs.slice(0);
        allSongsTemp.unshift(packSong(song));
        setAllSongs([]);
        setAllSongs(allSongsTemp);
        setTotalDuration(totalDuration + song.duration_ms);
    };

    const getStringFromMilliseconds = (milliseconds, includeHours) => {
        const hours = Math.floor(milliseconds / 1000 / 60 / 60);
        const minutes = includeHours
            ? Math.floor(milliseconds / 1000 / 60) % 60
            : Math.floor(milliseconds / 1000 / 60);
        const seconds = Math.round((milliseconds / 1000) % 60);
        const hoursString = includeHours
            ? hours.toString().padStart(2, '0') + ':'
            : '';
        return (
            hoursString +
            minutes.toString().padStart(2, '0') +
            ':' +
            seconds.toString().padStart(2, '0')
        );
    };

    // Not checked since it has weird (not normed) values: key, loudness, tempo, acousticness (not sure about that)
    const validateSongWithFilters = (song) => {
        let songValid = true;
        if (playlist.music_info.min_danceability) {
            songValid = songValid && checkSongForFeature(song, 'danceability');
        }
        if (playlist.music_info.min_energy) {
            songValid = songValid && checkSongForFeature(song, 'energy');
        }
        if (playlist.music_info.min_instrumentalness) {
            songValid =
                songValid && checkSongForFeature(song, 'instrumentalness');
        }
        if (playlist.music_info.min_liveness) {
            songValid = songValid && checkSongForFeature(song, 'liveness');
        }
        if (playlist.music_info.min_speechiness) {
            songValid = songValid && checkSongForFeature(song, 'speechiness');
        }
        if (playlist.music_info.min_valence) {
            songValid = songValid && checkSongForFeature(song, 'valence');
        }
        song.valid = songValid;
        return song;
    };

    const checkSongForFeature = (song, audio_feature) => {
        const minValue = playlist.music_info['min_' + audio_feature];
        const maxValue = playlist.music_info['max_' + audio_feature];
        return (
            minValue <= song.audio_features[audio_feature] &&
            maxValue >= song.audio_features[audio_feature]
        );
    };

    const onAddSongToPlaylist = (song) => {
        const playlistId = props.playlist.spotify_id;
        const songId = song.spotify_id;
        if (songId && playlistId) {
            props.addSongToPlaylist(playlistId, songId);
            addSongLocal(song);
        } else {
            console.error(
                'No songId or no spotify_id of playlist found, playlist probably has no spotify_id.'
            );
        }
    };
    
    const removeSong = (song) => {
        if (song.id) {
            props.removeSong(song.id);
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
                playlist.music_info.min_acousticness,
                playlist.music_info.max_acousticness
            ),
        ],
        [
            'Danceability',
            getStringValue(
                playlist.music_info.min_danceability,
                playlist.music_info.max_danceability
            ),
        ],
        [
            'Energy',
            getStringValue(
                playlist.music_info.min_energy,
                playlist.music_info.max_energy
            ),
        ],
        [
            'Instrumentalness',
            getStringValue(
                playlist.music_info.min_instrumentalness,
                playlist.music_info.max_instrumentalness
            ),
        ],
        [
            'Key',
            getStringValue(
                playlist.music_info.min_instrumentalness,
                playlist.music_info.max_instrumentalness
            ),
        ],
        [
            'Liveness',
            getStringValue(
                playlist.music_info.min_liveness,
                playlist.music_info.max_liveness
            ),
        ],
        [
            'Loudness',
            getStringValue(
                playlist.music_info.min_loudness,
                playlist.music_info.max_loudness
            ),
        ],
        [
            'Speechiness',
            getStringValue(
                playlist.music_info.min_speechiness,
                playlist.music_info.max_speechiness
            ),
        ],
        [
            'Tempo',
            getStringValue(
                playlist.music_info.min_tempo_min,
                playlist.music_info.max_tempo
            ),
        ],
        [
            'Valence',
            getStringValue(
                playlist.music_info.min_valence,
                playlist.music_info.max_valence
            ),
        ],
    ];

    const spotifyLogoText = (
        <Button
            disableRipple
            variant="contained"
            className={classes.spotify}
            endIcon={<SpotifyLogoWithText />}
            onClick={() => window.open("https://open.spotify.com/playlist/" + props.playlist.spotify_id)}
        >
            Check out on
        </Button>
    );

    const playlistHeader = (
        <div className={classes.headerRowA}>
            <div className={classes.headerRowB}>
                <img className={classes.image} src={props.playlist.image_url} />
                <div className={classes.headerColumnA}>
                    <Typography variant="h2">
                        {playlist.title}
                    </Typography>
                    <Typography variant="h6">
                        {getStringFromMilliseconds(totalDuration, true)}
                    </Typography>
                </div>

            </div>
            <div className={classes.headerColumnB}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {spotifyLogoText}
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" color="primary" className={classes.sideButton}>
                        Fill up to target
                    </Button>
                </div>
            </div>
        </div>
    )

    return (
        <Paper className={classes.backgroundPaper}>
            <div className={classes.root}>
                {playlistHeader}

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
                                <Typography
                                    className={classes.secondaryHeading}
                                >
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
                <div className={classes.searchRow}>
                    <div className={classes.textInput}>
                        <Autocomplete
                            className={classes.textField}
                            options={foundSongs}
                            getOptionLabel={(option) => option.name}
                            open={searchOpen}
                            onOpen={onOpen}
                            onClose={onClose}
                            getOptionDisabled={(option) => !option.valid} //Disable if audio features don't fit
                            renderOption={(option) => (
                                <React.Fragment>
                                    <div className={classes.searchRow}>
                                        <span>
                                            {option.name} -{' '}
                                            {getAllArtistsString(
                                                option.artists
                                            )}{' '}
                                            -{' '}
                                            {getStringFromMilliseconds(
                                                option.duration_ms,
                                                false
                                            )}
                                        </span>
                                        <Button
                                            className={
                                                classes.addToPlaylistButton
                                            }
                                            onClick={() =>
                                                onAddSongToPlaylist(option)
                                            }
                                        >
                                            Add to Playlist
                                        </Button>
                                    </div>
                                </React.Fragment>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    ref={autoCompleteRef}
                                    onChange={(event, value) =>
                                        onChangeSearch(event)
                                    }
                                    label="Search for songs"
                                    variant="outlined"
                                    fullWidth
                                    onKeyDown={handleKeyDown}
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
                    <Paper>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            align="right"
                                            onClick={() =>
                                                sortHeaders('number')
                                            }
                                        >
                                            #
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                        >
                                            Image
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            onClick={() => sortHeaders('title')}
                                        >
                                            Title
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            onClick={() =>
                                                sortHeaders('interpret')
                                            }
                                        >
                                            Interpret
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            onClick={() =>
                                                sortHeaders('added_by')
                                            }
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
                                        <TableCell align="right">
                                            Delete
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {allSongs.map((song, index) => (
                                        <TableRow key={index}>
                                            <TableCell
                                                align="right"
                                                component="th"
                                                scope="row"
                                            >
                                                {index+1}
                                            </TableCell>
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
                                                {getStringFromMilliseconds(
                                                    song.duration_ms,
                                                    false
                                                )}
                                            </TableCell>
                                            <TableCell align="right">
                                                <IconButton
                                                    disabled={
                                                        !props.playlist
                                                            .is_own_playlist
                                                    }
                                                    onClick={() => removeSong(song)}
                                                >
                                                    <Delete />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
            </div>
        </Paper>
    );
};

// attributes of props and their type
PlaylistDetailsComponent.propTypes = {
    playlist: PropTypes.object,
    searchForSong: PropTypes.func,
    addSongToPlaylist: PropTypes.func,
};

// withRouter() allows accessing the necessary functionality to navigate from this component
export default withRouter(PlaylistDetailsComponent);
