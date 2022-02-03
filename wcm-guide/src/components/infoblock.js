import React from "react";

function Infoblock() {
    return (
        <div className="infoblock">
            <menu className="infoblock__list">
                <li className="infoblock__list-item">
                    <img className="infoblock__list-item__icon" />
                    <a href="/wcm-guide-react/campaign-structure">Open</a>
                </li>
                <li className="infoblock__list-item">Edit</li>
                <li className="infoblock__list-item">Send tags</li>
                <li className="infoblock__list-item">
                    <a href="/wcm-guide-react/campaign-report">Reporting</a>
                </li>
            </menu>
        </div>
    );
}

export default Infoblock;
