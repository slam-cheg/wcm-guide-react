import React from "react";
import Infoblock from "../../components/infoblock";
import InfoTrigger from "../../components/infotrigger";
import SectionHeading from "../../components/sectionHeading";
import { sectionsTexts } from "../../props/sectionsTexts";
import RedWords from "../../components/redWords";
import Card from "../../components/cards";
import { campaignsProps } from "../../props/campaignsProps";
import Image from "../../components/image";

export default function Campaigns() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="campaigns">
                <SectionHeading prop={sectionsTexts.campaigns} />
                <div className="section__content">
                    <p className="section__lead">
                        <RedWords prop={"Campaigns"} />
                        &nbsp;&mdash; первая вкладка, которая открывается внутри аккаунта WCM.
                        <br /> Здесь удобно смотреть структуру заведения кампании и&nbsp;основные метрики.
                    </p>
                </div>
                <SectionCover />
                <div className="section__additional-content">
                    <Card prop={campaignsProps.campaigns} />
                    <Card prop={campaignsProps.campaignReport} />
                </div>
            </section>
        </div>
    );
}

function SectionCover() {
    return (
        <div className="section__cover">
            <Image prop={sectionsTexts.campaigns.image} />
            <InfoTrigger />
            <Infoblock />
        </div>
    );
}
