import React from "react";

function Cards() {
    return (
        <>
            <Card prop={propsCards.campaigns} />
            <Card prop={propsCards.creativeLibrary} />
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

function Card({ prop }) {
    return (
        <>
            <CardItem prop={prop} />
            <CardSubmenu prop={prop} />
        </>
    );
}

function CardItem({ prop }) {
    return (
        <div className="card" id={prop.id}>
            <div className="card__num-wrapper">
                <span>{prop.num}</span>
            </div>
            <h3 className="card__title">{prop.title}</h3>
            <p className="card__description">{prop.description}</p>
            <ul className="card__list">
                <li className="card__list-item">{prop.listItemOne}</li>
                <li className="card__list-item">{prop.listItemTwo}</li>
            </ul>
        </div>
    );
}

function CardSubmenu({ prop }) {
    if (prop.href === undefined) {
        return "";
    }
    return (
        <div className="card_hover">
            <a className="card__heading" href={prop.href}>
                {prop.name}
            </a>
            <a className="card__selector" href={prop.href2}>
                {prop.name2}
            </a>
            <a className="card__selector" href={prop.href3}>
                {prop.name3}
            </a>
        </div>
    );
}

const propsCards = {
    campaigns: {
        id: "campaigns",
        num: "1",
        title: "Campaigns",
        description: "Кампании",
        listItemOne: "Первичный мониторинг результатов размещения",
        listItemTwo: "Структура рекламных кампаний",
        href: "/campaigns",
        name: "Campaigns",
        href2: "/campaigns/campaign-structure",
        name2: "Просмотр структуры кампании",
        href3: "/campaigns/campaign-report",
        name3: "Отчет по кампании",
    },
    creativeLibrary: {
        id: "creative-library",
        num: "2",
        title: "Creative library",
        description: "Библиотека креативов",
        listItemOne: "Создание креативов",
        listItemTwo: "Управление креативами (в т.ч. динамическими)",
    },
};

export default Cards;
