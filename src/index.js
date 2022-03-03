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
const page = document.querySelector(".page");
const elem = document.querySelectorAll(".section__image");
const popup = document.querySelector(".popup");
const popupImage = document.querySelector(".popup__image");
const closeButton = document.querySelector(".popup__close-button");

elem.forEach((img) => {
    img.addEventListener("click", (evt) => {
        openPopup(evt);
    });
});

closeButton.addEventListener("click", (evt) => {
    closePopup(evt);
});
window.addEventListener("keyup", (evt) => {
    closePopupByEscape(evt);
});
popup.addEventListener("click", (evt) => {
    closePopupByOverlay(evt);
});
sidebar.addEventListener("mouseover", () => {
    menuOpen(menuContainer);
});
sidebar.addEventListener("mouseout", () => {
    menuClose(menuContainer);
});

setMenuActive();

function openPopup(evt) {
    popup.classList.add("popup_opened");
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
}

function closePopup() {
    popup.classList.remove("popup_opened");
    popupImage.src = "";
    popupImage.alt = "";
}

function closePopupByEscape(evt) {
    if (evt.keyCode === 27) {
        closePopup();
    }
}

function closePopupByOverlay(evt) {
    if (evt.type === "click") {
        if (evt.target === evt.currentTarget) {
            closePopup();
        }
    }
}

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

if (
    document.location.pathname === "/wcm-structure" ||
    document.location.pathname === "/settings" ||
    document.location.pathname === "/settings/period"
) {
    document.getElementById("page").style.overflow = "hidden";
} else {
    document.getElementById("page").style.overflow = "auto";
}

if (!document.querySelector(".section").classList.contains("home-screen")) {
    sidebar.classList.add("sidebar_disabled");
    page.classList.add("page_light");
    menuClose(menuContainer);
} else {
    page.classList.remove("page_light");
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
