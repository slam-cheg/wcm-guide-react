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
                    <a href="/campaigns/campaign-structure">
                        <img className="infoblock__list-item__icon" alt="ico-folder" src={folder} />
                        Open
                    </a>
                </li>
                <li className="infoblock__list-item">
                    <img className="infoblock__list-item__icon" alt="ico-pencil" src={pencil} />
                    Edit
                </li>
                <li className="infoblock__list-item">
                    <img className="infoblock__list-item__icon" alt="ico-mail" src={mail} />
                    Send tags
                </li>
                <li className="infoblock__list-item">
                    <a href="/campaigns/campaign-report">
                        <img className="infoblock__list-item__icon" alt="ico-segment" src={segment} />
                        Reporting
                    </a>
                </li>
            </menu>
        </div>
    );
}

export default Infoblock;
