import React, {useEffect, useState} from "react";
import {Checkbox} from "@material-ui/core";
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
import {withRouter} from "react-router-dom";


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


    return (
        <div>
            <div>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{'aria-label': 'primary checkbox'}}
                />
                <span>{props.title}</span>
            </div>
            <div>
                <ToggleButtonGroup
                    value={props.value}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton value="low" aria-label="left aligned">
                        Low
                    </ToggleButton>
                    <ToggleButton value="medium" aria-label="centered">
                        Medium
                    </ToggleButton>
                    <ToggleButton value="high" aria-label="right aligned">
                        High
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>

    );
}

export default withRouter(FilterSettingRow);