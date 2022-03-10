import React from "react";

function InfoTrigger() {
    return (
        <>
            <div
                style={{
                    bottom: "calc(50px + 4.8vw)",
                    left: "22.3%",
                }}
                className="infoblock__trigger"
            >
                {"▼"}
            </div>
            <div
                style={{
                    bottom: "calc(50px + 2.9vw)",
                    left: "22.3%",
                }}
                className="infoblock__trigger"
            >
                {"▼"}
            </div>
            <div
                style={{
                    bottom: "calc(50px + 1.2vw)",
                    left: "22.3%",
                }}
                className="infoblock__trigger"
            >
                {"▼"}
            </div>
        </>
    );
}

export default InfoTrigger;
