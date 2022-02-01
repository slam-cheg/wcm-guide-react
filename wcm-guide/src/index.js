import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

export const sidebar = document.querySelector(".sidebar");
const slide = document.querySelector(".section");
const menuContainer = sidebar.querySelector(".menu");
const menuButtons = menuContainer.querySelectorAll(".menu__item-container");
const menuItems = menuContainer.querySelectorAll(".menu__item");
const contentWrapper = document.querySelector(".content__wrapper");

sidebar.addEventListener("mouseover", () => {
    menuOpen(menuContainer);
});
sidebar.addEventListener("mouseout", () => {
    menuClose(menuContainer);
});
setMenuActive(menuButtons);
menuItems.forEach((item) => {
    if (item.childNodes.length > 1) {
        const subitem = item.querySelector(".menu__subitem-container");
        item.addEventListener("mouseover", () => {
            openSubmenu(item, subitem);
        });
        item.addEventListener("mouseout", () => {
            closeSubmenu(item, subitem);
        });
    }
});

function setMenuActive(menuButtons) {
    menuButtons.forEach((menuButton) => {
        if (menuButton.id === slide.id) {
            menuButton.classList.add("menu__item-container_active");
        } else {
            menuButton.classList.remove("menu__item_active");
        }
    });
}

function menuOpen(menuContainer) {
    menuContainer.classList.remove("menu_disabled");
}

function menuClose(menuContainer) {
    if (!slide.classList.contains("home-screen")) {
        menuContainer.classList.add("menu_disabled");
    }
}

function openSubmenu(button, subitem) {
    button.classList.add("menu__item_opened");
    subitem.classList.add("menu__subitem-container_opened");
}

function closeSubmenu(button, subitem) {
    subitem.classList.remove("menu__subitem-container_opened");
    button.classList.remove("menu__item_opened");
}

setTimeout(() => {
    if (document.location.pathname === "/") {
        sidebar.classList.remove("sidebar_disabled");
        contentWrapper.classList.remove("content__wrapper_resized");
		document.querySelector(".page").classList.remove("page__light")
    }
}, 10);
