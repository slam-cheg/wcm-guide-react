import React from "react";

export const CardList = ({ prop }) => {
    const listItems = prop.map((item) => (
        <li className="card__list-item" key={item.toString()}>
            {item}
        </li>
    ));
    return <ul className="card__list">{listItems}</ul>;
};
