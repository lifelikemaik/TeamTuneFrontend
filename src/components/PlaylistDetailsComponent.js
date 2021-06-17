import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Button, IconButton,
    List,
    ListItem,
    ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Delete} from "@material-ui/icons";

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
        width: "95%",
    },
    descriptionSpan: {
        marginLeft: '5px'
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
    const [sortedField, setSortedField] = React.useState(null);
    const [prevSortedField, setPrevSortedField] = React.useState(null);
    const [sortedDirection, setSortedDirection] = React.useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const sortHeaders =(fieldSet) => {
        setSortedField(fieldSet);
        let localSortedDirection = sortedDirection;
        if (fieldSet) {
            if (prevSortedField && prevSortedField === fieldSet && localSortedDirection === 'asc') {
                localSortedDirection ='desc';
            } else if (prevSortedField && prevSortedField === fieldSet && localSortedDirection === 'desc') {
                localSortedDirection = null;
            } else {
                localSortedDirection ='asc';
            }
            setSortedDirection(localSortedDirection);
            setPrevSortedField(fieldSet)
            if (localSortedDirection === 'asc') {
                if (fieldSet === 'duration_ms') {
                    playlist.music_info.songs.sort((a, b) => b[fieldSet] - a[fieldSet]);
                } else {
                    playlist.music_info.songs.sort((a, b) => a[fieldSet].localeCompare(b[fieldSet]));
                }
            } else if (localSortedDirection === 'desc') {
                if (fieldSet === 'duration_ms') {
                    playlist.music_info.songs.sort((a, b) => a[fieldSet] - b[fieldSet]);
                } else {
                    playlist.music_info.songs.sort((a, b) => b[fieldSet].localeCompare(a[fieldSet]));
                }
            }
        }
    }

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
    }

    const acousticness = getStringValue(playlist.music_info.acousticness_min, playlist.music_info.acousticness_max);
    const danceability = getStringValue(playlist.music_info.danceability_min, playlist.music_info.danceability_max);
    const energy = getStringValue(playlist.music_info.energy_min, playlist.music_info.energy_max);
    const instrumentalness = getStringValue(playlist.music_info.instrumentalness_min, playlist.music_info.instrumentalness_max);
    const key = getStringValue(playlist.music_info.instrumentalness_min, playlist.music_info.instrumentalness_max);
    const liveness = getStringValue(playlist.music_info.liveness_min, playlist.music_info.liveness_max);
    const loudness = getStringValue(playlist.music_info.loudness_min, playlist.music_info.loudness_max);
    const speechiness = getStringValue(playlist.music_info.speechiness_min, playlist.music_info.speechiness_max);
    const tempo = getStringValue(playlist.music_info.tempo_min, playlist.music_info.tempo_max);
    const valence = getStringValue(playlist.music_info.valence_min, playlist.music_info.valence_max);

    return(<div className={classes.root}>
                <h1>Playlist Overview</h1>
                <hr/>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Accordion 1</Typography>
                        <Typography className={classes.secondaryHeading}>
                            {expanded ? (<div></div>) : (<div>
                                <span className={classes.descriptionSpan}>Acousticness: {acousticness}</span>
                                <span className={classes.descriptionSpan}>Danceability: {danceability}</span>
                                <span className={classes.descriptionSpan}>Energy: {energy}</span>
                                <span className={classes.descriptionSpan}>Instrumentalness: {instrumentalness}</span>
                                <span className={classes.descriptionSpan}>Key: {key}</span>
                                <span className={classes.descriptionSpan}>Liveness: {liveness}</span>
                                <span className={classes.descriptionSpan}>Loudness: {loudness}</span>
                                <span className={classes.descriptionSpan}>Speechiness: {speechiness}</span>
                                <span className={classes.descriptionSpan}>Tempo: {tempo}</span>
                                <span className={classes.descriptionSpan}>Valence: {valence}</span>
                            </div>)}

                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <List component="nav" aria-label="secondary mailbox folders">
                                <ListItem>
                                    Acousticness: {acousticness}
                                </ListItem>
                                <ListItem>
                                    Danceability: {danceability}
                                </ListItem>
                                <ListItem>
                                    Energy: {energy}
                                </ListItem>
                                <ListItem>
                                    Instrumentalness: {instrumentalness}
                                </ListItem>
                                <ListItem>
                                    Key: {key}
                                </ListItem>
                                <ListItem>
                                    Liveness: {liveness}
                                </ListItem>
                                <ListItem>
                                    Loudness: {loudness}
                                </ListItem>
                                <ListItem>
                                    Speechiness: {speechiness}
                                </ListItem>
                                <ListItem>
                                    Tempo: {tempo}
                                </ListItem>
                                <ListItem>
                                    Valence: {valence}
                                </ListItem>
                            </List>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <hr/>
                <div>
                    <h2>{playlist.title} - {durationHours}:{durationMinutesModulo}</h2>
                </div>
                <div>
                    <Paper className={classes.playlistListPaper}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right" onClick={() => sortHeaders('number')}>
                                            #
                                        </TableCell>
                                        <TableCell align="right" onClick={() => sortHeaders('title')}>
                                            Title
                                        </TableCell>
                                        <TableCell align="right" onClick={() => sortHeaders('interpret')}>
                                            Interpret
                                        </TableCell>
                                        <TableCell align="right" onClick={() => sortHeaders('added_by')}>
                                            Added by
                                        </TableCell>
                                        <TableCell align="right" onClick={() => sortHeaders('duration_ms')}>
                                            Duration
                                        </TableCell>
                                        <TableCell align="right">
                                            Delete
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {playlist.music_info.songs.map((song, index) => (
                                        <TableRow key={song.interpret}>
                                            <TableCell align="right" component="th" scope="row">{index}</TableCell>
                                            <TableCell align="right">{song.title}</TableCell>
                                            <TableCell align="right">{song.interpret}</TableCell>
                                            <TableCell align="right">{song.added_by}</TableCell>
                                            <TableCell align="right">{song.duration_ms}</TableCell>
                                            <TableCell align="right"><IconButton><Delete/></IconButton></TableCell>
                                        </TableRow>

                                        ))}
                                </TableBody>

                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
    </div>);
}

// attributes of props and their type
PlaylistDetailsComponent.propTypes = {
    movie: PropTypes.object,
    new: PropTypes.bool,
    onCreate: PropTypes.func,
    onSave: PropTypes.func,
};

// withRouter() allows accsing the necessary functionality to navigate from this component
export default withRouter(PlaylistDetailsComponent);