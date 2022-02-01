import React from "react";
import firstscreen from "../images/firstscreen.jpg";

function WcmStructure() {
    return (
        <div className="content__wrapper content__wrapper_resized">
            <section className="section first-screen" id="wcm-structure">
                <div className="section-heading">
                    <h2 className="section-heading__title">
                        Интерфейс WCM содержит <span>5 основных вкладок:</span>
                    </h2>
                </div>
                <div className="home-screen__selection"></div>
                <img className="first-screen__image" src={firstscreen} alt="Интерфейс WCM" />

                <div className="section-content">
                    <div className="section-content__card" id="campaigns">
                        <div className="section-content__card_default section-content__card_default_deactive">
                            <div className="section-content__card__num-wrapper">
                                <span>1</span>
                            </div>
                            <h3 className="section-content__card__title">Campaigns</h3>
                            <p className="section-content__card__description">Кампании</p>
                            <ul className="section-content__card__list">
                                <li className="section-content__card__list-item">Первичный мониторинг результатов размещения</li>
                                <li className="section-content__card__list-item">Структура рекламных кампаний</li>
                            </ul>
                        </div>
                        <div className="section-content__card_hover">
                            <a className="section-content__card__heading" href="/campaigns">
                                Campaigns
                            </a>
                            <a className="section-content__card__selector" href="/campaign-structure">
                                Просмотр структуры кампании
                            </a>
                            <a className="section-content__card__selector" href="/campaign-report">
                                Отчет по кампании
                            </a>
                        </div>
                    </div>
                    <div className="section-content__card" id="creative-library">
                        <div className="section-content__card__num-wrapper">
                            <span>2</span>
                        </div>
                        <h3 className="section-content__card__title">Creative library</h3>
                        <p className="section-content__card__description">Библиотека креативов</p>
                        <ul className="section-content__card__list">
                            <li className="section-content__card__list-item">Создание и управление креативами (в т.ч. динамические)</li>
                        </ul>
                    </div>
                    <div className="section-content__card" id="conversions">
                        <div className="section-content__card_default">
                            <div className="section-content__card__num-wrapper">
                                <span>3</span>
                            </div>
                            <h3 className="section-content__card__title">Convertions</h3>
                            <p className="section-content__card__description">Конверсии</p>
                            <ul className="section-content__card__list">
                                <li className="section-content__card__list-item">Создание и управление страницами конверсий</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-content__card" id="reporting">
                        <div className="section-content__card__num-wrapper">
                            <span>4</span>
                        </div>
                        <h3 className="section-content__card__title">Reporting</h3>
                        <p className="section-content__card__description">Кампании</p>
                        <ul className="section-content__card__list">
                            <li className="section-content__card__list-item">Подробный мониторинг размещений</li>
                            <li className="section-content__card__list-item">Создание расширенных отчетов по компании</li>
                        </ul>
                    </div>
                    <div className="section-content__card" id="report-center">
                        <div className="section-content__card__num-wrapper">
                            <span>5</span>
                        </div>
                        <h3 className="section-content__card__title">Report center</h3>
                        <p className="section-content__card__description">Шаблоны отчетов</p>
                        <ul className="section-content__card__list">
                            <li className="section-content__card__list-item">Создание шаблонов отчетов с автоматической отправкой по расписанию</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WcmStructure;
