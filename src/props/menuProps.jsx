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

export const menuProps = {
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
        submenu: [
            { link: "/campaign-structure", text: "Просмотр структуры кампании" },
            { link: "/campaign-report", text: "Отчет по кампании" },
        ],
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
        name: "Настройка периода и\u00A0метрик",
        submenu: [
            { link: "/settings-period", text: "Настройка периода" },
            { link: "/settings-metrics", text: "Настройка метрик" },
        ],
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
    availableReports: {
        id: "available-reports",
        href: "/available-reports",
        img: auditories,
        name: "Встроенные доступные отчеты",
        submenu: [
            { link: "/auditoria-overlapping", text: "Отчет по пересечению аудиторий" },
            { link: "/friquency-report", text: "Отчет по распределению на\u00A0частоты" },
            { link: "/technology-report", text: "Отчет по технологиям" },
            { link: "/auditoria-report", text: "Отчет по аудитории" },
            { link: "/geo-report", text: "Отчет по географическому распределению" },
        ],
    },
    friquencyReport: {
        id: "fruquency-report",
        href: "/friquency-report",
        img: reportClicks,
        name: "Отчет по распределению показов, кликов, конверсий и\u00A0частоты",
    },
    conversionReport: {
        id: "conversion-report",
        href: "/conversion-report",
        img: conversions,
        name: "Отчет по конверсиям",
        submenu: [
            { link: "/conversions", text: "Основная вкладка «Conversions»" },
            { link: "/conversion-tags", text: "Отчет по\u00A0конверсиям и\u00A0конверсионным тегам" },
        ],
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
