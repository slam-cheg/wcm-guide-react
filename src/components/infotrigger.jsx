import React from "react";

function InfoTrigger() {
    const trigger = {
        icon: "▼",
        one: {
            bottom: "calc(50px + 8.5vw)",
            left: "22.3%",
        },
        two: {
            bottom: "calc(50px + 6.67vw)",
            left: "22.3%",
        },
        three: {
            bottom: "calc(50px + 4.9vw)",
            left: "22.3%",
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
