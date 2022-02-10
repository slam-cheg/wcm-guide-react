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
const page = document.querySelector(".page");
sidebar.addEventListener("mouseover", () => {
    menuOpen(menuContainer);
});
sidebar.addEventListener("mouseout", () => {
    menuClose(menuContainer);
});
setMenuActive();
menuItems.forEach((item) => {
    if (item.querySelector(".menu__subitem-container")) {
        const subitem = item.querySelector(".menu__subitem-container");
        item.addEventListener("mouseover", () => {
            openSubmenu(item, subitem);
        });
        item.addEventListener("mouseout", () => {
            closeSubmenu(item, subitem);
        });
    }
});

function setMenuActive() {
    const menuButtons = menuContainer.querySelectorAll(".menu__item-container");
    menuButtons.forEach((menuButton) => {
        if (menuButton.id === document.querySelector(".section").id) {
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
    if (document.location.pathname !== "/") {
        menuContainer.classList.add("menu_disabled");
    }
}

if (document.location.pathname === "/wcm-structure" || document.location.pathname === "/settings" || document.location.pathname === "/settings/period") {
    document.getElementById("page").style.overflow = "hidden";
} else {
    document.getElementById("page").style.overflow = "auto";
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
    page.classList.add("page_light");
    menuClose(menuContainer);
} else {
    page.classList.remove("page_light");
    console.log("Home");
}
