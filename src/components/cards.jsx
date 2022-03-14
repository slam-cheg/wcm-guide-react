import React from "react";

export default function Card({ prop }) {
    if (prop.cardLink === undefined) {
        return (
            <div className="card" id={prop.id} href={prop.cardLink} style={{ cursor: "auto" }}>
                <div className="card__num-wrapper">
                    <span>{prop.num}</span>
                </div>
                <h3 className="card__title">{prop.title}</h3>
                <p className="card__description">{prop.description}</p>
                <ul className="card__list">
                    <li className="card__list-item">{prop.listItemOne}</li>
                    <li className="card__list-item">{prop.listItemTwo}</li>
                </ul>
                <CardSubmenu prop={prop} />
            </div>
        );
    }
    return (
        <a className="card" id={prop.id} href={prop.cardLink}>
            <div className="card__num-wrapper">
                <span>{prop.num}</span>
            </div>
            <h3 className="card__title">{prop.title}</h3>
            <p className="card__description">{prop.description}</p>
            <ul className="card__list">
                <li className="card__list-item">{prop.listItemOne}</li>
                <li className="card__list-item">{prop.listItemTwo}</li>
            </ul>
            <CardSubmenu prop={prop} />
        </a>
    );
}

function CardSubmenu({ prop }) {
    if (prop.href === undefined) {
        return "";
    }
    return (
        <div className="card_hover">
            <a className="card__heading" href={prop.href}>
                {prop.name}
            </a>
            <a className="card__selector" href={prop.href2}>
                {prop.name2}
            </a>
            <a className="card__selector" href={prop.href3}>
                {prop.name3}
            </a>
        </div>
    );
}
