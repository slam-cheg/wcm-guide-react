import React from "react";
import { SectionHeading } from "../../components/sectionHeading";
import { sectionsTexts } from "../../props/sectionsTexts";
import { RedWords } from "../../components/redWords";
import Card from "../../components/cards";
import { campaignsProps } from "../../props/campaignsProps";
import { Image } from "../../components/image";

export class Campaigns extends React.Component {
    render() {
        return (
            <div className="section__wrapper">
                <section className="section section__not-homepage" id="campaigns">
                    <SectionHeading prop={sectionsTexts.campaigns} />
                    <div className="section__content">
                        <p className="section__lead">
                            <RedWords prop={"«Campaigns»"} />
                            &nbsp;&mdash; первая вкладка, которая открывается внутри аккаунта WCM.
                            <br /> Здесь удобно смотреть структуру заведения кампании и&nbsp;основные метрики.
                        </p>
                    </div>
                    <Image prop={sectionsTexts.campaigns.image} />
                    <div className="section__additional-content" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                        <Card prop={campaignsProps.campaigns} />
                        <Card prop={campaignsProps.campaignReport} />
                    </div>
                </section>
            </div>
        );
    }
}
