import React from "react";
import Infoblock from "../../components/infoblock";
import InfoTrigger from "../../components/infotrigger";
import campaigns from "../../images/campaigns.jpg";
import BackButton from "../../components/backButton";
import SectionHeading from "../../components/sectionHeading";
import { sectionsTexts } from "../../props/sectionsTexts";
import RedWords from "../../components/redWords";

const redWords = {
    text: "Campaigns",
};

function Campaigns() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="campaigns">
                <SectionHeading prop={sectionsTexts.campaigns} />
                <div className="section__content">
                    <p className="section__lead">
                        <RedWords prop={redWords.text} />&nbsp;&mdash; первая вкладка, которая открывается внутри аккаунта WCM Здесь удобно смотреть
                        структуру заведения кампании и&nbsp;основные метрики.
                    </p>
                </div>
                <SectionCover />
            </section>
        </div>
    );
}

function SectionCover() {
    return (
        <div className="section__cover">
            <SectionImage />
            <InfoTrigger />
            <Infoblock />
        </div>
    );
}

function SectionImage() {
    return <img className="section__image" src={campaigns} alt="Кампании WCM" />;
}

export default Campaigns;
