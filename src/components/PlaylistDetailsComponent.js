import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function PlaylistDetailsComponent(props) {
    const classes = useStyles;
    const playlist = props.playlist;

    const durationMinutes = playlist.music_info.durations_ms / (1000 * 60);
    const durationHours = Math.trunc(durationMinutes / 60);
    const durationMinutesModulo = durationMinutes % 60;

    console.log('props: ', props);
    return(<div>
        <h1>Playlist Overview</h1>
        <hr/>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <hr/>
        <div>
            <h2>{playlist.title} - {durationHours}:{durationMinutesModulo}</h2>
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