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
        const backBtn = document.querySelector(".section-heading__back-button");
        backBtn.addEventListener("click", () => {
            window.history.back();
        });
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

if (document.location.pathname === "/metrics") {
    accord();
}

function accord() {
    const accord = document.querySelector(".accord");
    const accordItems = accord.querySelectorAll(".accord__item");
    accord.addEventListener("click", (event) => {
        const accordItem = event.target.closest(".accord__item");
        const accordHeader = accordItem.querySelector(".accord__heading");
        const accordContent = accordItem.querySelector(".accord__content");
        if (accordContent.classList.contains("accord__content_opened")) {
            accordContent.classList.remove("accord__content_opened");
            accordHeader.classList.remove("accord__heading_opened");
        } else {
            accordItems.forEach((item) => {
                if (item.querySelector(".accord__content").classList.contains("accord__content_opened")) {
                    item.querySelector(".accord__content").classList.remove("accord__content_opened");
                    item.querySelector(".accord__heading").classList.remove("accord__heading_opened");
                }
            });
            accordContent.classList.add("accord__content_opened");
            accordHeader.classList.add("accord__heading_opened");
        }
    });
}
