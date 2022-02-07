import React from "react";
import folder from "../images/folder.png";
import pencil from "../images/pencil.png";
import mail from "../images/mail.png"
import segment from "../images/segment.png"

function Infoblock() {
    return (
        <div className="infoblock">
            <menu className="infoblock__list">
                <li className="infoblock__list-item">
                    <a href="/wcm-guide-react/campaign-structure">
                        <img className="infoblock__list-item__icon" src={folder} />
                        Open
                    </a>
                </li>
                <li className="infoblock__list-item">
                    <img className="infoblock__list-item__icon" src={pencil} />
                    Edit
                </li>
                <li className="infoblock__list-item">
                    <img className="infoblock__list-item__icon" src={mail} />
                    Send tags
                </li>
                <li className="infoblock__list-item">
                    <a href="/wcm-guide-react/campaign-report">
                        <img className="infoblock__list-item__icon" src={segment} />
                        Reporting
                    </a>
                </li>
            </menu>
        </div>
    );
}

export default Infoblock;
