import React from "react";

export const Link = ({ prop }) => {
    return (
        <a className="section__lead_color" href={prop.href}>
            {prop.text}
        </a>
    );
};
