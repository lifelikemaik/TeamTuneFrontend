import React, {useEffect, useState} from "react";
import {Checkbox} from "@material-ui/core";
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
import {withRouter} from "react-router-dom";


function FilterSettingRow(props) {

    const [checked, setChecked] = React.useState("false");
    const handleChange = (event) => {
        setChecked(event.target.checked);
        props.onChange(null);
    };
    const handleAlignment = (event, newAlignment) => {
        props.onChange(newAlignment);
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