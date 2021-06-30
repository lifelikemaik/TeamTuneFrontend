import React, {useEffect, useState} from "react";
import {Checkbox, Tooltip, withStyles} from "@material-ui/core";
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
import {withRouter} from "react-router-dom";
import HelpIcon from '@material-ui/icons/HelpOutline';
import SvgIcon from "@material-ui/icons/Help";

function FilterSettingRow(props) {

    // For when user unchecks and checks again, so previous value is retained
    const [previousValue, setPreviousValue] = React.useState(props.value);
    // Whether box is checked or not
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        event.persist();
        setChecked(event.target.checked);
        if (!event.target.checked) {
            props.onChange(null);
        } else {
            props.onChange(previousValue);
        }
    };
    const handleAlignment = (event, newAlignment) => {
        props.onChange(newAlignment);
        setPreviousValue(newAlignment);
    };

    const LightTooltip = withStyles((theme) => ({
        tooltip: {
            boxShadow: theme.shadows[1],
            fontSize: 15,
        },
    }))(Tooltip);

    const customizedTooltip = (
        <LightTooltip title={props.description} arrow placement="right">
            <SvgIcon component={HelpIcon} fontSize="small"/>
        </LightTooltip>
    );

    return (
        <div>
            <div>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{'aria-label': 'primary checkbox'}}
                />
                <span>{props.title} </span>
                {customizedTooltip}
            </div>
            <div>
                <ToggleButtonGroup
                    value={props.value}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton value="low" aria-label="low" disabled={!checked}>
                        Low
                    </ToggleButton>
                    <ToggleButton value="medium" aria-label="medium" disabled={!checked}>
                        Medium
                    </ToggleButton>
                    <ToggleButton value="high" aria-label="high" disabled={!checked}>
                        High
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>

    );
}

export default withRouter(FilterSettingRow);