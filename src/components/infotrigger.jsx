import React from "react";

function InfoTrigger() {
    const trigger = {
        icon: "▼",
        one: {
            bottom: "calc(50px + 8.6vw)",
            left: "22.3%",
        },
        two: {
            bottom: "calc(50px + 6.77vw)",
            left: "22.3%",
        },
        three: {
            bottom: "calc(50px + 5vw)",
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
