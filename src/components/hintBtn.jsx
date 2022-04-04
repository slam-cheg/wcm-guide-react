import React, { useState } from "react";
import { RedWords } from "../components/redWords";

export const HintBtn = () => {
    return (
        <div
            id="hint-open-btn"
            style={{
                width: 40,
                height: 40,
                background: "#fff",
                position: "fixed",
                bottom: 20,
                borderRadius: 50,
                boxShadow: "0px 0px 19px 6px #6b6c6c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                visibility: "hidden",
                pointerEvents: "none",
                cursor: "pointer",
                transition: "0.5s",
            }}
        >
            <p style={{ fontSize: 30, fontFamily: "Open-Sans, sans-serif" }}>
                <RedWords prop={"!"} />
            </p>
        </div>
    );
};
