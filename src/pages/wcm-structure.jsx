import React from "react";
import firstscreen from "../images/firstscreen.jpg";
import BackButton from "../components/backButton";
import Cards from "../components/cards";

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
export { propsCards };
export default WcmStructure;
