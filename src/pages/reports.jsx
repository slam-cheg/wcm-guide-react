import React, { useEffect } from "react";
import SectionHeading from "../components/sectionHeading";
import { sectionsTexts } from "../props/sectionsTexts";
import Image from "../components/image";
import Link from "../components/links";
import RedWords from "../components/redWords";
import Popup from "../components/zoom";

export const Reports = () => {
    useEffect(() => {
        zoomIn();
    });
    return (
        <>
            <div className="section__wrapper">
                <section className="section section__not-homepage" id="reporting">
                    <SectionHeading prop={sectionsTexts.reports} />
                    <div className="section__grid-block">
                        <div className="section__content" style={{ justifyContent: "center" }}>
                            <p className="section__lead">
                                Для просмотра статистики по&nbsp;рекламной кампании необходимо выбрать блок <RedWords prop={"Reporting"} />{" "}
                                в&nbsp;выпадающем меню. Функционал появляется при наведении мышки на&nbsp;необходимую РК. Затем необходимо кликнуть
                                на&nbsp;флажок и&nbsp;выбрать блок <RedWords prop={"Reporting"} />.
                            </p>
                        </div>
                        <Image prop={sectionsTexts.reports.image} />
                    </div>
                    <div className="section__grid-block section__grid-block_reverse">
                        <Image prop={sectionsTexts.reports.imageTwo} />
                        <div className="section__content" style={{ justifyContent: "center" }}>
                            <p className="section__lead">
                                Столбец слева&nbsp;&mdash; это меню уровней и&nbsp;отчетов. В&nbsp;нем выбираем{" "}
                                <Link prop={{ text: "Campaigns", href: "/campaigns" }} />, чтобы увидеть список кампаний. Можно зайти внутрь кампании,
                                кликнув по&nbsp;ней.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Popup />
        </>
    );
};

function zoomIn() {
    const closeButton = document.querySelector(".popup__close-button");
    const images = document.querySelectorAll(".section__image");
    const popup = document.querySelector(".popup");
    const popupImage = document.querySelector(".popup__image");

    images.forEach((img) => {
        img.addEventListener("click", (evt) => {
            openPopup(evt, popup, popupImage);
        });
        img.style.cursor = "zoom-in";
    });

    closeButton.addEventListener("click", (evt) => {
        closePopup(evt, popup, popupImage);
    });
    window.addEventListener("keyup", (evt) => {
        closePopupByEscape(evt, popup, popupImage);
    });
    popup.addEventListener("click", (evt) => {
        closePopupByOverlay(evt, popup, popupImage);
    });
}

function openPopup(evt, popup, popupImage) {
    popup.classList.add("popup_opened");
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
}

function closePopup(evt, popup, popupImage) {
    popup.classList.remove("popup_opened");
    popupImage.src = "";
    popupImage.alt = "";
}

function closePopupByEscape(evt, popup, popupImage) {
    if (evt.keyCode === 27) {
        closePopup(evt, popup, popupImage);
    }
}

function closePopupByOverlay(evt, popup, popupImage) {
    if (evt.type === "click") {
        if (evt.target === evt.currentTarget) {
            closePopup(evt, popup, popupImage);
        }
    }
}
