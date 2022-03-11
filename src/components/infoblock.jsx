import React from "react";
import folder from "../images/folder.png";
import pencil from "../images/pencil.png";
import mail from "../images/mail.png";
import segment from "../images/segment.png";

export const Infoblock = () => {
    return (
        <div className="infoblock">
            <menu className="infoblock__list">
                <InfoblockListItem prop={props.open} />
                <InfoblockListItem prop={props.edit} />
                <InfoblockListItem prop={props.mail} />
                <InfoblockListItem prop={props.segment} />
            </menu>
        </div>
    );
};

const InfoblockListItem = ({ prop }) => {
    return (
        <li className="infoblock__list-item">
            <a href="/campaigns/campaign-structure">
                <img className="infoblock__list-item__icon" alt={prop.name} src={prop.img} />
                {prop.name}
            </a>
        </li>
    );
};

const props = {
    open: {
        name: "Open",
        img: folder,
    },
    edit: {
        name: "Edit",
        img: pencil,
    },
    mail: {
        name: "Send tags",
        img: mail,
    },
    segment: {
        name: "Reporting",
        img: segment,
    },
};
