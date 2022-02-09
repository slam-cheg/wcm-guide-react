import React from "react";
import period from "../images/period.jpg";
import metrics from "../images/metrics.jpg";
import metricsSelected from "../images/metrics-selected.jpg";

function PeriodMetrics() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="settings">
                <div className="section-heading" id="period">
                    <h1 className="section-heading__title">Настройка периода</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Данные в&nbsp;<span className="section__lead_color">инструменте WCM</span> доступны в&nbsp;режиме real-time. Для просмотра стстистики
                        за&nbsp;определенный период его необходимо настроить в&nbsp;панели управления периодом&nbsp;&mdash; в&nbsp;правом верхнем углу, и&nbsp;затем
                        нажать кнопку Apply. Максимально возможный период просмотра статистики&nbsp;&mdash; один год.
                    </p>
                </div>
                <img className="section__image" src={period} alt="выбор периода" />
                <div className="section-heading" id="metrics">
                    <h2 className="section-heading__title">Настройка метрик</h2>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Для настройки метрики необходимо перейти в&nbsp;меню Select Metrics, выбрать набор нужных показателй, затем&nbsp;&mdash; нажать на&nbsp;кнопку
                        Save&amp;Close. Данные автоматически обновятся в&nbsp;интерфейсе.
                    </p>
                </div>
                <img className="section__image" src={metrics} alt="настройка метрик" />
                <div className="section__content">
                    <p className="section__lead">
                        Для настройки метрики необходимо перейти в&nbsp;меню Select Metrics, выбрать набор нужных показателй, затем&nbsp;&mdash; нажать на&nbsp;кнопку
                        Save&amp;Close. Данные автоматически обновятся в&nbsp;интерфейсе.
                    </p>
                </div>
                <img className="section__image" src={metricsSelected} alt="настройка метрик" />
            </section>
        </div>
    );
}

export default PeriodMetrics;
