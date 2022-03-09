import React from "react";
import { menuProps } from "./menuProps";

function Menu() {
    return (
        <aside className="sidebar">
            <ul className="menu">
                <MenuListItem prop={menuProps.wcmStructure} />
                <MenuListItem prop={menuProps.campaigns} />
                <MenuListItem prop={menuProps.reporting} />
                <MenuListItem prop={menuProps.campaignTree} />
                <MenuListItem prop={menuProps.settings} />
                <MenuListItem prop={menuProps.xlsxReports} />
                <MenuListItem prop={menuProps.permalinks} />
                <MenuListItem prop={menuProps.auditoriaReport} />
                <MenuListItem prop={menuProps.viewsReport} />
                <MenuListItem prop={menuProps.conversionReport} />
                <MenuListItem prop={menuProps.automatization} />
                <MenuListItem prop={menuProps.metrics} />
            </ul>
        </aside>
    );
}

function MenuListItem({ prop }) {
    return (
        <li className="menu__item">
            <MenuItem prop={prop} />
            <Submenu prop={prop} />
        </li>
    );
}

function MenuItem({ prop }) {
    return (
        <div className="menu__item-container" id={prop.id}>
            <a className="menu__link" href={prop.href}>
                <div className="menu__ico-wrapper">
                    <img src={prop.img} alt={prop.name} className="menu__ico" />
                </div>
                <div className="menu__text-wrapper">
                    <p className="menu__text">{prop.name}</p>
                </div>
            </a>
        </div>
    );
}

function Submenu({ prop }) {
    if (prop.href2 === undefined) {
        return null;
    }
    return (
        <div className="menu__subitem-container">
            <div className="menu__subitem">
                <a href={prop.href2} className="menu__subitem-link">
                    {prop.name2}
                </a>
            </div>
            <div className="menu__subitem">
                <a href={prop.href3} className="menu__subitem-link">
                    {prop.name3}
                </a>
            </div>
        </div>
    );
}

export default Menu;
