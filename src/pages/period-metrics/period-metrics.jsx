import React from "react";
import Card from "../../components/cards";
import SectionHeading from "../../components/sectionHeading";
import Image from "../../components/image";
import { sectionsTexts } from "../../props/sectionsTexts";
import { periodMetricsCardsProps } from "../../props/periodMetricsCardsProps";
import Link from "../../components/links";

const links = {
    period: {
        text: "настройки метрики",
        href: "/settings/period",
    },
    metrics: {
        text: "настройки периода",
        href: "/settings/metrics",
    },
};

export default function PeriodMetrics() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="settings">
                <SectionHeading prop={sectionsTexts.periodMetrics} />
                <div className="section__content">
                    <p className="section__lead">
                        Для <Link prop={links.period} /> необходимо перейти в&nbsp;меню Select Metrics. <br />
                        Для <Link prop={links.metrics} /> необходимо выбрать меню в правом верхнем углу.
                    </p>
                </div>
                <Image prop={sectionsTexts.periodMetrics.image} />
                <AddCards />
            </section>
        </div>
    );
}

function AddCards() {
    return (
        <div className="section__additional-content">
            <Card prop={periodMetricsCardsProps.period} />
            <Card prop={periodMetricsCardsProps.metrics} />
        </div>
    );
}
