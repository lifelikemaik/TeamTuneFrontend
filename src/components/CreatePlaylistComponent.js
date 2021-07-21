import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid, TextField} from "@material-ui/core";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
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
    marginTop: {
        marginTop: "25px",
    },
    marginInputs: {
        marginLeft: "40px",
    },
    inputs: {
        width: "300px",
    },
    durationInput: {
        width: "150px",
    },
    timeDivider: {
        display: 'flex',
        fontSize: '2em',
        margin: '7px 5px 0 5px',
        fontWeight: 'bold'
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
    saveButtonDiv: {
        float: "right"
    },
    cancelButton: {
        marginRight: "15px"
    },
    footer: {
        marginTop: "1rem",
        padding: "1rem",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
    }
}));

/**
 * For creating a new playlist
 * @param {props} props
 */
function CreatePlaylistComponent(props) {
    const classes = useStyles();

    const [playlistTitle, setPlaylistTitle] = React.useState("");
    const [durationHours, setDurationHours] = React.useState("");
    const [durationMinutes, setDurationMinutes] = React.useState("");
    const [mode, setMode] = React.useState("medium");
    const [acousticness, setAcousticness] = React.useState(null);
    const [danceability, setDanceability] = React.useState(null);
    const [energy, setEnergy] = React.useState(null);
    const [instrumentalness, setInstrumentalness] = React.useState(null);
    const [key, setKey] = React.useState(null);
    const [liveness, setLiveness] = React.useState(null);
    const [loudness, setLoudness] = React.useState(null);
    const [speechiness, setSpeechiness] = React.useState(null);
    const [tempo, setTempo] = React.useState(null);
    const [valence, setValence] = React.useState(null);


    let settingDescriptions = new Map();
    settingDescriptions.set("danceability", "How suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity")
        .set("energy", "Perceptual measure of intensity and activity.Typically, energetic tracks feel fast, loud, and noisy")
        .set("acousticness", "A confidence measure of whether the track is acoustic as opposed to electric or electronic means")
        .set("instrumentalness", "Whether a track contains no vocals. Rap or spoken word tracks are clearly “vocal”")
        .set("liveness", "Detects the presence of an audience in the recording")
        .set("loudness", "The overall loudness of a track in decibels (dB) averaged across the entire track")
        .set("speechiness", "Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the higher the value")
        .set("tempo", "The overall estimated tempo of a track in beats per minute (BPM)")
        .set("key", "The key the track is in")
        .set("valence", "A measure describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry)");

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

    const getDurationMs = (durationHours, durationMinutes) => {
        return (
            Math.abs(durationHours) * 1000 * 60 * 60 +
            Math.abs(durationMinutes) * 1000 * 60
        );
    };

    // creating a object with all relevant data to update or create a changed playlist
    const packPlaylist = () => {
        return {
            title: playlistTitle,
            publicity: false,
            spotify_id: "",
            is_own_playlist: true,
            share_link: "",
            joined_people: [],
            is_teamtune_playlist: true,
            track_count: 0,
            music_info: {
                durations_ms: 0,
                duration_target: getDurationMs(durationHours, durationMinutes),
                songs: [],
                number_songs: 0,
                mode: (convertRadioValueToNumberMin(mode) + convertRadioValueToNumberMax(mode)) / 2,
                min_acousticness: convertRadioValueToNumberMin(acousticness),
                max_acousticness: convertRadioValueToNumberMax(acousticness),
                min_danceability: convertRadioValueToNumberMin(danceability),
                max_danceability: convertRadioValueToNumberMax(danceability),
                min_energy: convertRadioValueToNumberMin(energy),
                max_energy: convertRadioValueToNumberMax(energy),
                min_instrumentalness: convertRadioValueToNumberMin(instrumentalness),
                max_instrumentalness: convertRadioValueToNumberMax(instrumentalness),
                min_key: convertRadioValueToNumberMin(key),
                max_key: convertRadioValueToNumberMax(key),
                min_liveness: convertRadioValueToNumberMin(liveness),
                max_liveness: convertRadioValueToNumberMax(liveness),
                min_loudness: convertRadioValueToNumberMin(loudness),
                max_loudness: convertRadioValueToNumberMax(loudness),
                min_speechiness: convertRadioValueToNumberMin(speechiness),
                max_speechiness: convertRadioValueToNumberMax(speechiness),
                min_tempo_min: convertRadioValueToNumberMin(tempo),
                max_tempo: convertRadioValueToNumberMax(tempo),
                min_valence: convertRadioValueToNumberMin(valence),
                max_valence_max: convertRadioValueToNumberMax(valence),
            }
        }
    };


    const Footer = () => (
        <div className={classes.footer}>
            <div className={classes.saveButtonDiv}>
                <Button className={classes.cancelButton}
                        variant="contained"
                        onClick={onCancel}>
                    Cancel
                </Button>
                <Button variant="contained" color="primary"
                        className={classes.cancelButton}
                        disabled={(!durationHours || !durationMinutes) || !playlistTitle}
                        onClick={onSave}>
                    Create Playlist
                </Button>
            </div>
        </div>
    );


    // ----------------------------------------------------------------------------------------------------
    // on change functions

    const onChangeTitle = (value) => {
        setPlaylistTitle(value.target.value);
    };

    const onChangeDurationHours = (value) => {
        setDurationHours(value.target.value);
    };

    const onChangeDurationMinutes = (value) => {
        setDurationMinutes(value.target.value);
    };

    // ----------------------------------------------------------------------------------------------------


    // cancel is called, functionality differs whether it is a new playlist or not
    const onCancel = () => {
        props.history.push("/");

    };

    // save is called, functionality differs whether it is a new playlist or not
    const onSave = () => {
        props.onCreate(packPlaylist());
    };

    return (
        <div className={classes.margin20}>
            <div>
                <h1>Create a playlist</h1>
            </div>
            <Button onClick={() => getDurationMs(durationHours, durationMinutes)}>Test</Button>
            <hr className={classes.rounded}/>
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
                    <div className={classes.flexRow}>
                        <div>
                            <TextField label="Hours"
                                       className={classes.durationInput}
                                       onChange={onChangeDurationHours}
                                       type="number"
                                       min="0"
                                       variant="outlined"/>
                        </div>
                        <div>
                            <span className={classes.timeDivider}> : </span>
                        </div>
                        <div>
                            <TextField label="Minutes"
                                       className={classes.durationInput}
                                       onChange={onChangeDurationMinutes}
                                       type="number"
                                       min="0"
                                       variant="outlined"/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={classes.rounded + " " + classes.marginTop}/>
            <div>
                <h1>Filters</h1>
                <div>
                    <FilterSettingRow
                        title={"Danceability"}
                        value={danceability}
                        description={settingDescriptions.get("danceability")}
                        onChange={setDanceability}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Energy"}
                        value={energy}
                        description={settingDescriptions.get("energy")}
                        onChange={setEnergy}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Acousticness"}
                        value={acousticness}
                        description={settingDescriptions.get("acousticness")}
                        onChange={setAcousticness}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Instrumentality"}
                        value={instrumentalness}
                        description={settingDescriptions.get("instrumentalness")}
                        onChange={setInstrumentalness}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Liveness"}
                        value={liveness}
                        description={settingDescriptions.get("liveness")}
                        onChange={setLiveness}/>
                </div>

                <div>
                    <FilterSettingRow
                        title={"Loudness"}
                        value={loudness}
                        description={settingDescriptions.get("loudness")}
                        onChange={setLoudness}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Speechiness"}
                        value={speechiness}
                        description={settingDescriptions.get("speechiness")}
                        onChange={setSpeechiness}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Tempo"}
                        value={tempo}
                        description={settingDescriptions.get("tempo")}
                        onChange={setTempo}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Key"}
                        value={key}
                        description={settingDescriptions.get("key")}
                        onChange={setKey}/>
                </div>
                <div>
                    <FilterSettingRow
                        title={"Valence"}
                        value={valence}
                        description={settingDescriptions.get("valence")}
                        onChange={setValence}/>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

// attributes of props and their type
CreatePlaylistComponent.propTypes = {
    new: PropTypes.bool,
    onCreate: PropTypes.func,
    onSave: PropTypes.func,
};

// withRouter() allows accsing the necessary functionality to navigate from this component
export default withRouter(CreatePlaylistComponent);
