import React from "react";

function InfoTrigger() {
    const trigger = {
        icon: "▼",
        one: {
            top: "251px",
            left: "402px",
        },
        two: {
            top: "286px",
            left: "402px",
        },
        three: {
            top: "321px",
            left: "402px",
        },
    };
    return (
        <>
            <div style={trigger.one} className="infoblock__trigger">
                {trigger.icon}
            </div>
            <div style={trigger.two} className="infoblock__trigger">
                {trigger.icon}
            </div>
            <div style={trigger.three} className="infoblock__trigger">
                {trigger.icon}
            </div>
        </>
    );
}

export default InfoTrigger;
