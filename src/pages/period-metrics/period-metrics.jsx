import React from "react";
import periodMetrics from "../../images/period-metrics.jpg";
import BackButton from "../../components/backButton";
import Card from "../../components/cards";
import { periodMetricsCardsProps } from "../../props/periodMetricsCardsProps";

function PeriodMetrics() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="settings">
                <div className="section-heading">
                    <BackButton />
                    <h1 className="section-heading__title">Настройка периода и метрик</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Для{" "}
                        <a className="section__lead_color" href="/settings/period">
                            настройки метрики
                        </a>{" "}
                        необходимо перейти в&nbsp;меню Select Metrics. <br />
                        Для{" "}
                        <a className="section__lead_color" href="/settings/metrics">
                            настройки периода
                        </a>{" "}
                        необходимо выбрать меню в правом верхнем углу.
                    </p>
                </div>
                <img className="section__image" src={periodMetrics} alt="настройка периода метрик" />
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

export default PeriodMetrics;
