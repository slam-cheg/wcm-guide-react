import React from "react";
import periodMetrics from "../../images/period-metrics.jpg";
import BackButton from "../../components/backButton";

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
            <Cards />
        </div>
    );
}

function Cards() {
    return (
        <>
            <a className="card" href="/settings/period">
                <div className="card_default card_default_deactive">
                    <div className="card__num-wrapper">
                        <span>1</span>
                    </div>
                    <h3 className="card__title">Настройки периода</h3>
                    <p className="card__description">Подпись описание</p>
                    <ul className="card__list">
                        <li className="card__list-item">Рандомный текст</li>
                        <li className="card__list-item">Рандомный текст</li>
                    </ul>
                </div>
            </a>
            <div className="card" id="metrics">
                <div className="card_default card_default_deactive">
                    <div className="card__num-wrapper">
                        <span>2</span>
                    </div>
                    <h3 className="card__title">Настройка метрик</h3>
                    <p className="card__description">Подпись описание</p>
                    <ul className="card__list">
                        <li className="card__list-item">Рандомный текст</li>
                        <li className="card__list-item">Рандомный текст</li>
                    </ul>
                </div>
                <div className="card_hover">
                    <h3 className="card__heading">Настройка метрик</h3>
                    <a className="card__selector" href="/settings/metrics">
                        Как настраивать метрики
                    </a>
                    <a className="card__selector" href="/metrics">
                        Описание метрик
                    </a>
                </div>
            </div>
        </>
    );
}

export default PeriodMetrics;
