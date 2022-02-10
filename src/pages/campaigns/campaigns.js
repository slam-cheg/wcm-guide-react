import React from "react";
import Infoblock from "../../components/infoblock";
import InfoTrigger from "../../components/infotrigger";
import campaigns from "../../images/campaigns.jpg";

function Campaigns() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="campaigns">
                <div className="section-heading">
                    <h1 className="section-heading__title">WCM Campaigns (Кампании)</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        <span className="section__lead_color">Campaigns</span> &mdash;&nbsp;первая вкладка, которая открывается внутри аккаунта WCM Здесь удобно смотреть
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