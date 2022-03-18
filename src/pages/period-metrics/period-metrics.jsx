import React from "react";
import Card from "../../components/cards";
import {SectionHeading} from "../../components/sectionHeading";
import {Image} from "../../components/image";
import { sectionsTexts } from "../../props/sectionsTexts";
import { periodMetricsCardsProps } from "../../props/periodMetricsCardsProps";
import {Link} from "../../components/links";

export const PeriodMetrics = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="settings">
                <SectionHeading prop={sectionsTexts.periodMetrics} />
                <div className="section__content">
                    <p className="section__lead">
                        Для{" "}
                        <Link
                            prop={{
                                text: "настройки периода",
                                href: "/settings-period",
                            }}
                        />{" "}
                        необходимо выбрать меню в правом верхнем углу.
                        <br />
                        Для{" "}
                        <Link
                            prop={{
                                text: "настройки метрики",
                                href: "/settings-metrics",
                            }}
                        />{" "}
                        необходимо перейти в&nbsp;меню Select Metrics.
                    </p>
                </div>
                <Image prop={sectionsTexts.periodMetrics.image} />
                <AddCards />
            </section>
        </div>
    );
};

const AddCards = () => {
    return (
        <div className="section__additional-content">
            <Card prop={periodMetricsCardsProps.period} />
            <Card prop={periodMetricsCardsProps.metrics} />
        </div>
    );
};
