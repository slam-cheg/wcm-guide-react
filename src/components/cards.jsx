import React from "react";

function Cards() {
    return (
        <>
            <Card prop={propsCards.campaigns} />
            <Card prop={propsCards.creativeLibrary} />
            <Card prop={propsCards.conversions} />
            <Card prop={propsCards.reporting} />
            <Card prop={propsCards.reportCenter} />
        </>
    );
}

export default Cards;

function Card({ prop }) {
    return <CardItem prop={prop} />;
}

function CardItem({ prop }) {
    return (
        <a className="card" id={prop.id} href={prop.cardLink}>
            <div className="card__num-wrapper">
                <span>{prop.num}</span>
            </div>
            <h3 className="card__title">{prop.title}</h3>
            <p className="card__description">{prop.description}</p>
            <ul className="card__list">
                <li className="card__list-item">{prop.listItemOne}</li>
                <li className="card__list-item">{prop.listItemTwo}</li>
            </ul>
            <CardSubmenu prop={prop} />
        </a>
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
    conversions: {
        id: "conversions",
        num: "3",
        title: "Convertions",
        description: "Конверсии",
        listItemOne: "Создание страниц конверсий",
        listItemTwo: "Управление страницами конверсий",
    },
    reporting: {
        id: "reporting",
        num: "4",
        title: "Reporting",
        description: "Отчеты",
        listItemOne: "Подробный мониторинг размещений",
        listItemTwo: "Создание расширенных отчетов по компании",
        cardLink: "/reporting",
    },
    reportCenter: {
        id: "report-center",
        num: "5",
        title: "Report center",
        description: "Шаблоны отчетов",
        listItemOne: "Создание шаблонов отчетов",
        listItemTwo: "Автоматическая отправка отчетов по расписанию",
        cardLink: "/automatization",
    },
};
