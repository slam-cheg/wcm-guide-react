import React from "react";
import metrics from "../../images/metrics.jpg";
import metricsSelected from "../../images/metrics-selected.jpg";
import BackButton from "../../components/backButton";

function SetMetrics() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="settings">
                <div className="section-heading">
                    <BackButton />
                    <h1 className="section-heading__title">Настройка метрик</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Для настройки метрики необходимо перейти в&nbsp;меню Select Metrics, выбрать{" "}
                        <a className="section__lead_color" href="/metrics">
                            набор нужных показателей
                        </a>
                        , затем&nbsp;&mdash; нажать на&nbsp;кнопку Save&amp;Close. Данные автоматически обновятся в&nbsp;интерфейсе.
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

export default SetMetrics;
