import React, { useEffect } from "react";
import { menuProps } from "../props/menuProps";

export const Menu = () => {
    useEffect(() => {
        handlerMenu();
    });
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
                <MenuListItem prop={menuProps.availableReports} />
                <MenuListItem prop={menuProps.conversionReport} />
                <MenuListItem prop={menuProps.automatization} />
                <MenuListItem prop={menuProps.metrics} />
            </ul>
        </aside>
    );
};

const MenuListItem = ({ prop }) => {
    return (
        <li className="menu__item">
            <MenuItem prop={prop} />
            <Submenu prop={prop} />
        </li>
    );
};

const MenuItem = ({ prop }) => {
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
};

const Submenu = ({ prop }) => {
    if (prop.submenu === undefined) {
        return null;
    }
    if (prop.id === "available-reports") {
    }
    const listItems = prop.submenu.map((obj) => (
        <div className="menu__subitem" key={obj}>
            <a href={obj.link.toString()} className="menu__subitem-link">
                {obj.text.toString()}
            </a>
        </div>
    ));
    return <div className="menu__subitem-container">{listItems}</div>;
};

const handlerMenu = () => {
    const sidebar = document.querySelector(".sidebar");
    const menuContainer = sidebar.querySelector(".menu");
    const page = document.querySelector(".page");
    const menuButtons = menuContainer.querySelectorAll(".menu__item-container");
    let currentSection = document.querySelector(".section");

    function goBack() {
        window.history.go(-1);
    }

    sidebar.addEventListener("mouseover", () => {
        menuOpen(menuContainer);
    });
    sidebar.addEventListener("mouseout", () => {
        menuClose(menuContainer);
    });

    menuButtons.forEach((menuButton) => {
        if (menuButton.id === document.querySelector(".section").id) {
            menuButton.classList.add("menu__item-container_active");
        } else {
            menuButton.classList.remove("menu__item_active");
        }
    });

    function menuOpen(menuContainer) {
        menuContainer.classList.remove("menu_disabled");
    }

    function menuClose(menuContainer) {
        if (!currentSection.classList.contains("home-screen")) {
            menuContainer.classList.add("menu_disabled");
        }
    }

    if (!currentSection.classList.contains("home-screen")) {
        const backBtn = document.querySelector(".section-heading__back-button");
        sidebar.classList.add("sidebar_disabled");
        page.classList.add("page_light");
        backBtn.addEventListener("click", goBack);
        menuClose(menuContainer);
    } else {
        const main = document.querySelector(".main");
        page.classList.remove("page_light");
        main.style.display = "grid";
        main.style.gridTemplateColumns = "auto auto";
        main.style.gap = "20px";
    }
};
