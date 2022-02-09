import React from "react";
import period from "../images/period.jpg";
import metrics from "../images/metrics.jpg";

function PeriodMetrics() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="settings">
                <div className="section-heading">
                    <h1 className="section-heading__title">Настройка периода</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        <span className="section__lead_color">Период</span>: <br />
                        По&nbsp;умолчанию установлен период за&nbsp;последние 10&nbsp;дней. Необходимо сразу выставить необходимый вам период, чтобы с&nbsp;самого начала
                        работы с&nbsp;отчетом видеть корректную статистику.
                    </p>
                </div>
                <img className="section__image" src={period} alt="выбор периода" />
                <div className="section-heading">
                    <h1 className="section-heading__title">Настройка метрик</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        <span className="section__lead_color">Метрики</span>: <br />
                        По&nbsp;умолчанию выставлены метрики показы/клики + конверсии Необходимо сразу выбрать актуальные для вас метрики, чтобы с&nbsp;самого начала
                        работы с&nbsp;отчетом видеть корректную статистику
                    </p>
                </div>
                <img className="section__image" src={metrics} alt="настройка метрик" />
            </section>
        </div>
    );
}

export default PeriodMetrics;
