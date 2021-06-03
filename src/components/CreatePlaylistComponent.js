import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid, TextField} from "@material-ui/core";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import MovieService from "../services/MovieService";
import FilterSettingRow from "./FilterSettingRow"

const useStyles = makeStyles((theme) => ({
    flexCol: {
        display: "flex",
        flexDirection: "column",
    },
    flexRow: {
        display: "flex",
        flexDirection: "row"
    },
    justifySpaceBetween: {
        justifyContent: "space-between",
    },
    flex: {
        flex: 1,
    },
    flexEnd: {
        justifyContent: "flex-end",
    },
    marginSides: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    center: {
        margin: "auto",
    },
    padding: {
        padding: theme.spacing(2),
    },
    margin20: {
        margin: "20px",
    },
    marginInputs: {
        marginLeft: "40px",
    },
    inputs: {
      width: "300px",
    },
    maxWidth: {
        width: "100%",
        maxWidth: "1500px",
    },
    pageArea: {
        paddingBottom: theme.spacing(2),
        "&:last-child": {
            paddingBottom: 0,
        },
    },
    title: {
        marginTop: theme.spacing(4),
    },
    barMinHeight: {
        minHeight: theme.spacing(5),
        position: "absolute",
        top: theme.spacing(1),
        right: theme.spacing(2),
    },
}));

/**
 * For presenting and changing movie details
 * @param {props} props
 */
function CreatePlaylistComponent(props) {
    const classes = useStyles();

    const [playlistTitle, setPlaylistTitle] = React.useState("TeamTune");
    const [duration, setDuration] = React.useState("");
    const [mode, setMode] = React.useState("medium");
    const [acousticness, setAcousticness] = React.useState("medium");
    const [danceability, setDanceability] = React.useState("medium");
    const [energy, setEnergy] = React.useState("medium");
    const [instrumentalness, setInstrumentalness] = React.useState("medium");
    const [key, setKey] = React.useState("medium");
    const [liveness, setLiveness] = React.useState("medium");
    const [loudness, setLoudness] = React.useState("medium");
    const [speechiness, setSpeechiness] = React.useState("medium");
    const [tempo, setTempo] = React.useState("medium");
    const [valence, setValence] = React.useState("medium");


    const [movieTitle, setMovieTitle] = React.useState(" ");
    const [movieSynopsis, setMovieSynopsis] = React.useState("");
    const [movieCast, setMovieCast] = React.useState([]);
    const [movieAgeRating, setMovieAgeRating] = React.useState("");
    const [movieRuntime, setMovieRuntime] = React.useState("");
    const [movieYear, setMovieYear] = React.useState("");
    const [criticsRating, setCriticsRating] = React.useState("");
    const [avgAudienceRating, setAvgAudienceRating] = React.useState("");
    const [theaterRelease, setTheaterRelease] = React.useState("");
    const [blurayRelase, setBlurayRelease] = React.useState("");
    const [moviethumbnail, setMovieThumbnail] = React.useState("");

    /**
     * Used to convert Radio buttons to values for backend
     * @param string
     * @returns {null|number}
     */
    const convertRadioValueToNumberMin = (string) => {
        if (!string) return null;
        switch (string.toLowerCase()) {
            case "low":
                return 0;
            case "medium":
                return 0.33;
            case "high":
                return 0.66;
            default:
                return null;
        }
    }

    /**
     * Used to convert Radio buttons to values for backend
     * @param string
     * @returns {null|number}
     */
    const convertRadioValueToNumberMax = (string) => {
        if (!string) return null;
        switch (string.toLowerCase()) {
            case "low":
                return 0.33;
            case "medium":
                return 0.66;
            case "high":
                return 1;
            default:
                return null;
        }
    }

    // creating a object with all relevant data to update or create a changed movie
    const packPlaylist = () => {
        return {
            title: playlistTitle,
            publicity: false,
            is_own_playlist: true,
            share_link: "",
            joined_people: [],
            music_info: {
                durations_ms: 0,
                duration_target: duration,
                songs: [],
                number_songs: 0,
                mode: (convertRadioValueToNumberMin(mode) + convertRadioValueToNumberMax(mode)) / 2,
                acousticness_min: convertRadioValueToNumberMin(acousticness),
                acousticness_max: convertRadioValueToNumberMax(acousticness),
                danceability_min: convertRadioValueToNumberMin(danceability),
                danceability_max: convertRadioValueToNumberMax(danceability),
                energy_min: convertRadioValueToNumberMin(energy),
                energy_max: convertRadioValueToNumberMax(energy),
                instrumentalness_min: convertRadioValueToNumberMin(instrumentalness),
                instrumentalness_max: convertRadioValueToNumberMax(instrumentalness),
                key_min: convertRadioValueToNumberMin(key),
                key_max: convertRadioValueToNumberMax(key),
                liveness_min: convertRadioValueToNumberMin(liveness),
                liveness_max: convertRadioValueToNumberMax(liveness),
                loudness_min: convertRadioValueToNumberMin(loudness),
                loudness_max: convertRadioValueToNumberMax(loudness),
                speechiness_min: convertRadioValueToNumberMin(speechiness),
                speechiness_max: convertRadioValueToNumberMax(speechiness),
                tempo_min: convertRadioValueToNumberMin(tempo),
                tempo_max: convertRadioValueToNumberMax(tempo),
                valence_min: convertRadioValueToNumberMin(valence),
                valence_max: convertRadioValueToNumberMax(valence),
            }
        }
    };

    // triggers when a new movie is given to this component or the new parameter is changed
    useEffect(() => {
        if (!props.new) {
        }
    }, [props.movie, props.new]);

    // triggers when the new parameter is changed and setts the edit mode to true
    useEffect(() => {
        if (props.new) {
            setEditMode(true);
        }
    }, [props.new]);

    // indicates whether the movie can be changed
    const [editMode, setEditMode] = React.useState(null);

    // props for all grid items used below in the JSX
    const girdItemProps = {
        item: true,
        className: classes.padding,
    };

    // ----------------------------------------------------------------------------------------------------
    // on change functions

    const onChangeTitle = (value) => {
        setPlaylistTitle(value.target.value);
    };

    const onChangeDuration = (value) => {
        console.log(value.target.value);
        setDuration(value.target.value);
    };

    // ----------------------------------------------------------------------------------------------------

    // for cast
    const onAddCastMember = (castMember) => {
        movieCast.push(castMember);
        setMovieCast([...movieCast]);
    };

    // for cast
    const onRemoveCastMember = (index) => {
        movieCast.splice(index, 1);
        setMovieCast([...movieCast]);
    };

    // cancel is called, functionality differs whether it is a new movie or not
    const onCancel = () => {
        if (props.new) {
            props.history.push("/");
        }
    };

    // save is called, functionality differs whether it is a new movie or not
    const onSave = () => {
        if (props.new) {
            props.onCreate(packPlaylist());
        } else {
            setEditMode(false);
            props.onSave(packPlaylist());
        }
    };

    return (
        <div className={classes.margin20}>
            <div>
                <h1>Create a playlist</h1>
            </div>
            <div className={classes.flexRow}>
                <div>
                    <div>
                        <h2>Playlist name</h2>
                    </div>
                    <div>
                        <TextField label="Name"
                                   className={classes.inputs}
                                   onChange={onChangeTitle}
                                   variant="outlined"/>
                    </div>
                </div>
                <div className={classes.marginInputs}>
                    <div>
                        <h2>Duration</h2>
                    </div>
                    <div>
                        <TextField label="Duration"
                                   className={classes.inputs}
                                   onChange={onChangeDuration}
                                   type="number"
                                   min="0"
                                   variant="outlined"/>
                    </div>
                </div>
            </div>
            <div>
                <h1>Filters</h1>
                <div>
                    <FilterSettingRow
                        title={"Danceability"}
                        value={danceability}
                        onChange={setDanceability}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Energy"}
                        value={energy}
                        onChange={setEnergy}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Acousticness"}
                        value={acousticness}
                        onChange={setAcousticness}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Instrumentality"}
                        value={instrumentalness}
                        onChange={setInstrumentalness}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Key"}
                        value={key}
                        onChange={setKey}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Liveness"}
                        value={liveness}
                        onChange={setLiveness}/>
                </div>

                <div>
                    <FilterSettingRow
                        title={"Loudness"}
                        value={loudness}
                        onChange={setLoudness}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Speechiness"}
                        value={speechiness}
                        onChange={setSpeechiness}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Tempo"}
                        value={tempo}
                        onChange={setTempo}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Valence"}
                        value={valence}
                        onChange={setValence}/>
                </div>
            </div>

        </div>

    );
}

// attributes of props and their type
CreatePlaylistComponent.propTypes = {
    movie: PropTypes.object,
    new: PropTypes.bool,
    onCreate: PropTypes.func,
    onSave: PropTypes.func,
};

// withRouter() allows accsing the necessary functionality to navigate from this component
export default withRouter(CreatePlaylistComponent);
