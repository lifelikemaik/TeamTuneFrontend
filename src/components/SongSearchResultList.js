import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '10px',
    },
    songRow: {
        display: 'flex',
    },
}));

const SongSearchResultList = ({songList = [], addSong}) => {
    const classes = useStyles();
    return (
        <>
            {songList.map((song, index) => {
                if (song) {
                    return (
                        <div className={classes.songRow}>
                            <div>
                                {index}
                            </div>
                            <div>
                                {song.name}
                            </div>
                            <div>
                                {song.duration_ms}
                            </div>
                            <div>
                                <Button onClick={() => addSong(song.spotify_id)}>Add Song</Button>
                            </div>
                        </div>
                    )
                } else return null
            })}
        </>
    )
}