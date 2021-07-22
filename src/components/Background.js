import * as React from "react"

const Background = () => {
    return (
        <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
                <div className="wave waveTop"/>
            </div>
            <div className="waveWrapperInner bgMiddle">
                <div className="wave2 waveMiddle"/>
            </div>
            <div className="waveWrapperInner bgMiddle">
                <div className="wave2 waveMiddle2"/>
            </div>
            <div className="waveWrapperInner bgMiddle">
                <div className="wave2 waveMiddle3"/>
            </div>
            <div className="waveWrapperInner bgBottom">
                <div className="wave3 waveBottom"/>
            </div>
        </div>
    )
};

export default Background