import React from "react";
import firstscreen from "../images/firstscreen.jpg";
import BackButton from "../components/backButton";

function WcmStructure() {
    return (
        <div className="section__wrapper">
            <section className="section section_not-homepage" id="wcm-structure">
                <div className="section-heading">
                    <BackButton />
                    <h1 className="section-heading__title">
                        Интерфейс WCM содержит <span>5 основных вкладок:</span>
                    </h1>
                </div>
                <img className="section__image section__image_resized" src={firstscreen} alt="Интерфейс WCM" />
                <AdditionalContent />
            </section>
        </div>
    );
}

function AdditionalContent() {
    return (
        <div className="section__additional-content">
            <Cards />
        </div>
    );
}

function Cards() {
    return (
        <>
            <div className="card" id="campaigns">
                <div className="card_default card_default_deactive">
                    <div className="card__num-wrapper">
                        <span>1</span>
                    </div>
                    <h3 className="card__title">Campaigns</h3>
                    <p className="card__description">Кампании</p>
                    <ul className="card__list">
                        <li className="card__list-item">Первичный мониторинг результатов размещения</li>
                        <li className="card__list-item">Структура рекламных кампаний</li>
                    </ul>
                </div>
                <div className="card_hover">
                    <a className="card__heading" href="/campaigns">
                        Campaigns
                    </a>
                    <a className="card__selector" href="/campaigns/campaign-structure">
                        Просмотр структуры кампании
                    </a>
                    <a className="card__selector" href="/campaigns/campaign-report">
                        Отчет по кампании
                    </a>
                </div>
            </div>
            <div className="card" id="creative-library">
                <div className="card__num-wrapper">
                    <span>2</span>
                </div>
                <h3 className="card__title">Creative library</h3>
                <p className="card__description">Библиотека креативов</p>
                <ul className="card__list">
                    <li className="card__list-item">Создание и управление креативами (в т.ч. динамические)</li>
                </ul>
            </div>
            <div className="card" id="conversions">
                <div className="card_default">
                    <div className="card__num-wrapper">
                        <span>3</span>
                    </div>
                    <h3 className="card__title">Convertions</h3>
                    <p className="card__description">Конверсии</p>
                    <ul className="card__list">
                        <li className="card__list-item">Создание и управление страницами конверсий</li>
                    </ul>
                </div>
            </div>
            <div className="card" id="reporting">
                <div className="card__num-wrapper">
                    <span>4</span>
                </div>
                <h3 className="card__title">Reporting</h3>
                <p className="card__description">Кампании</p>
                <ul className="card__list">
                    <li className="card__list-item">Подробный мониторинг размещений</li>
                    <li className="card__list-item">Создание расширенных отчетов по компании</li>
                </ul>
            </div>
            <div className="card" id="report-center">
                <div className="card__num-wrapper">
                    <span>5</span>
                </div>
                <h3 className="card__title">Report center</h3>
                <p className="card__description">Шаблоны отчетов</p>
                <ul className="card__list">
                    <li className="card__list-item">Создание шаблонов отчетов с автоматической отправкой по расписанию</li>
                </ul>
            </div>
        </>
    );
}

export default WcmStructure;
