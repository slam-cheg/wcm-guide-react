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

const sidebar = document.querySelector(".sidebar");
const menuContainer = sidebar.querySelector(".menu");
const menuItems = menuContainer.querySelectorAll(".menu__item");
const menuButtons = menuContainer.querySelectorAll(".menu__item-container");
const contentContainer = document.querySelector(".content__wrapper");
const page = document.querySelector(".page");

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
        if (menuButton.id === document.location.pathname) {
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
    if (document.location.pathname !== "/wcm-guide-react") {
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

if (!document.querySelector(".section").classList.contains("home-screen")) {
    sidebar.classList.add("sidebar_disabled");
    console.log("Not home");
    page.classList.add("page__light");
    contentContainer.classList.add("content__wrapper_resized");
} else {
    page.classList.remove("page__light");
    console.log("Home");
}
