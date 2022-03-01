import React from "react";
import obzorStructure from "../images/obzorStructure.svg";
import reporting from "../images/reporting.svg";
import campaignTree from "../images/campaignTree.svg";
import settingsMetrics from "../images/settingsMetrics.svg";
import downloadXlsx from "../images/downloadXlsx.svg";
import auditories from "../images/auditories.svg";
import reportClicks from "../images/reportClicks.svg";
import conversions from "../images/conversions.svg";
import automatization from "../images/automatization.svg";
import metricsDescr from "../images/metricsDescr.svg";
import icon from "../images/campaigns.svg";
import links from "../images/links.svg";

function Menu() {
    return (
        <aside className="sidebar">
            <ul className="menu">
                <MenuItem prop={props.wcmStructure} />
                <MenuItem prop={props.campaigns} />
                <MenuItem prop={props.reporting} />
                <MenuItem prop={props.campaignTree} />
                <MenuItem prop={props.settings} />
                <MenuItem prop={props.xlsxReports} />
                <MenuItem prop={props.permalinks} />
                <MenuItem prop={props.auditoriaReport} />
                <MenuItem prop={props.viewsReport} />
                <MenuItem prop={props.conversionReport} />
                <MenuItem prop={props.automatization} />
                <MenuItem prop={props.metrics} />
            </ul>
        </aside>
    );
}

function MenuItem({ prop }) {
    return (
        <li className="menu__item">
            <div className="menu__item-container" id={prop.id}>
                <a className="menu__link" href={prop.href}>
                    <div className="menu__ico-wrapper">
                        <img src={prop.img} alt={prop.name} className="menu__ico" />
                    </div>
                    <div className="menu__text-wrapper">
                        <p className="menu__text">{prop.name}</p>
                    </div>
                </a>
            </div>
        </li>
    );
}
function MenuItemWithSubmenu({ prop }, { prop2 }) {
    console.log(document.querySelector(".menu__subitem-container"));
    return (
        <li className="menu__item">
            <div className="menu__item-container" id={prop.id}>
                <a className="menu__link" href={prop.href}>
                    <div className="menu__ico-wrapper">
                        <img src={prop.img} alt={prop.name} className="menu__ico" />
                    </div>
                    <div className="menu__text-wrapper">
                        <p className="menu__text">{prop.name}</p>
                    </div>
                </a>
            </div>
            <div className="menu__subitem-container">
                <div className="menu__subitem">
                    <a href={prop2.href} className="menu__subitem-link">
                        {prop2.name}
                    </a>
                </div>
                <div className="menu__subitem">
                    <a href={prop2.href2} className="menu__subitem-link">
                        {prop2.name2}
                    </a>
                </div>
            </div>
        </li>
    );
}

const props = {
    wcmStructure: {
        id: "wcm-structure",
        href: "/wcm-structure",
        img: obzorStructure,
        name: "Обзор структуры WCM",
    },
    campaigns: {
        id: "campaigns",
        href: "/campaigns",
        img: icon,
        name: "Campaigns",
    },
    reporting: {
        id: "reporting",
        href: "/reporting",
        img: reporting,
        name: "Reporting",
    },
    campaignTree: {
        id: "campaign-tree",
        href: "/campaign-tree",
        img: campaignTree,
        name: "Campaign tree",
    },
    settings: {
        id: "settings",
        href: "/settings",
        img: settingsMetrics,
        name: "Настройка периода и метрик",
    },
    xlsxReports: {
        id: "xlsx-reports",
        href: "/xlsx-reports",
        img: downloadXlsx,
        name: "Выгрузка отчетов .xlsx",
    },
    permalinks: {
        id: "permalinks",
        href: "/permalinks",
        img: links,
        name: "Формирование гостевых ссылок",
    },
    auditoriaReport: {
        id: "auditoria-report",
        href: "/auditoria-report",
        img: auditories,
        name: "Отчет по пересечению аудитории",
    },
    viewsReport: {
        id: "views-report",
        href: "/views-report",
        img: reportClicks,
        name: "Отчет по распределению показов, кликов, конверсий и частоты",
    },
    conversionReport: {
        id: "conversion-report",
        href: "/conversion-report",
        img: conversions,
        name: "Отчет по конверсиям",
    },
    automatization: {
        id: "automatization",
        href: "/automatization",
        img: automatization,
        name: "Автоматизация выгрузки отчетов",
    },
    metrics: {
        id: "metrics",
        href: "/metrics",
        img: metricsDescr,
        name: "Описание метрик",
    },
};

const subitemProps = {
    campaigns: {
        href: "/campaigns/campaign-structure",
        name: "Просмотр структуры кампании",
        href2: "/campaigns/campaign-report",
        name2: "Отчет по кампании",
    },
    settings: {
        href: "/settings/period",
        name: "Настройка периода",
        href2: "/settings/metrics",
        name2: "Настройка метрик",
    },
};

export default Menu;
