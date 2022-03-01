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
                <MenuListItem prop={props.wcmStructure} />
                <MenuListItem prop={props.campaigns} />
                <MenuListItem prop={props.reporting} />
                <MenuListItem prop={props.campaignTree} />
                <MenuListItem prop={props.settings} />
                <MenuListItem prop={props.xlsxReports} />
                <MenuListItem prop={props.permalinks} />
                <MenuListItem prop={props.auditoriaReport} />
                <MenuListItem prop={props.viewsReport} />
                <MenuListItem prop={props.conversionReport} />
                <MenuListItem prop={props.automatization} />
                <MenuListItem prop={props.metrics} />
            </ul>
        </aside>
    );
}

function MenuListItem({ prop }) {
    return (
        <li className="menu__item">
            <MenuItem prop={prop} />
            <Submenu prop={prop} />
        </li>
    );
}

function MenuItem({ prop }) {
    return (
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
    );
}

function Submenu({ prop }) {
    if (prop.href2 === undefined) {
        return null;
    }
    return (
        <div className="menu__subitem-container">
            <div className="menu__subitem">
                <a href={prop.href2} className="menu__subitem-link">
                    {prop.name2}
                </a>
            </div>
            <div className="menu__subitem">
                <a href={prop.href3} className="menu__subitem-link">
                    {prop.name3}
                </a>
            </div>
        </div>
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
        href2: "/campaigns/campaign-structure",
        name2: "Просмотр структуры кампании",
        href3: "/campaigns/campaign-report",
        name3: "Отчет по кампании",
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
        href2: "/settings/period",
        name2: "Настройка периода",
        href3: "/settings/metrics",
        name3: "Настройка метрик",
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

export default Menu;
