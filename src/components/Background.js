import * as React from "react"

const Background = () => {
    return (
        <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
                <div className="wave waveTop"/>
            </div>
            <div className="waveWrapperInner bgMiddle">
                <div className="wave waveMiddle"/>
            </div>
            <div className="waveWrapperInner bgBottom">
                <div className="wave waveBottom"/>
            </div>
        </div>
    )
};

export default Background