import React from "react";
import firstscreen from "../images/firstscreen.jpg";
import BackButton from "../components/backButton";
import Cards from "../components/cards";

function WcmStructure() {
    return (
        <div className="section__wrapper">
            <section className="section section_not-homepage" id="wcm-structure">
                <div className="section-heading">
                    <BackButton />
                    <h1 className="section-heading__title">
                        Интерфейс WCM содержит <span>5 основных вкладок:</span>
                    </h1>
                </div>
                <img className="section__image section__image_resized" src={firstscreen} alt="Интерфейс WCM" />
                <AdditionalContent />
            </section>
        </div>
    );
}

function AdditionalContent() {
    return (
        <div className="section__additional-content">
            <Cards />
        </div>
    );
}

export default WcmStructure;
