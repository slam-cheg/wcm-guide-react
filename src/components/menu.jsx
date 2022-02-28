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
                <li className="menu__item">
                    <div className="menu__item-container" id="campaigns">
                        <a className="menu__link" href="/campaigns">
                            <div className="menu__ico-wrapper">
                                <img src={icon} alt="Обзор" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Campaigns</p>
                            </div>
                        </a>
                    </div>
                    <div className="menu__subitem-container">
                        <div className="menu__subitem">
                            <a href="/campaigns/campaign-structure" className="menu__subitem-link">
                                Просмотр структуры кампании
                            </a>
                        </div>
                        <div className="menu__subitem">
                            <a href="/campaigns/campaign-report" className="menu__subitem-link">
                                Отчет по кампании
                            </a>
                        </div>
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item-container" id="reporting">
                        <a className="menu__link" href="/reporting">
                            <div className="menu__ico-wrapper">
                                <img src={reporting} alt="Отчеты" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Reporting</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item-container" id="campaign-tree">
                        <a className="menu__link" href="/campaign-tree">
                            <div className="menu__ico-wrapper">
                                <img src={campaignTree} alt="Древо" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Campaign tree</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item-container" id="settings">
                        <a className="menu__link" href="/settings">
                            <div className="menu__ico-wrapper">
                                <img src={settingsMetrics} alt="" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Настройка периода и&nbsp;метрик</p>
                            </div>
                        </a>
                    </div>
                    <div className="menu__subitem-container">
                        <div className="menu__subitem">
                            <a href="/settings/period" className="menu__subitem-link">
                                Настройка периода
                            </a>
                        </div>
                        <div className="menu__subitem">
                            <a href="/settings/metrics" className="menu__subitem-link">
                                Настройка метрик
                            </a>
                        </div>
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item-container" id="xlsx-reports">
                        <a className="menu__link" href="/xlsx-reports">
                            <div className="menu__ico-wrapper">
                                <img src={downloadXlsx} alt="" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Выгрузка отчетов .xlsx</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item-container" id="permalinks">
                        <a className="menu__link" href="/permalinks">
                            <div className="menu__ico-wrapper">
                                <img src={links} alt="" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Формирование гостевых ссылок</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item-container" id="auditoria-report">
                        <a className="menu__link" href="/auditoria-report">
                            <div className="menu__ico-wrapper">
                                <img src={auditories} alt="" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Отчет по пересечению аудитории</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item-container" id="views-report">
                        <a className="menu__link" href="/views-report">
                            <div className="menu__ico-wrapper">
                                <img src={reportClicks} alt="" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Отчет по распределению показов, кликов, конверсий и&nbsp;частоты</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item-container" id="conversion-report">
                        <a className="menu__link" href="/conversion-report">
                            <div className="menu__ico-wrapper">
                                <img src={conversions} alt="" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Отчет по конверсиям</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item-container" id="automatization">
                        <a className="menu__link" href="/automatization">
                            <div className="menu__ico-wrapper">
                                <img src={automatization} alt="" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Автоматизация выгрузки отчетов</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item-container" id="metrics">
                        <a className="menu__link" href="/metrics">
                            <div className="menu__ico-wrapper">
                                <img src={metricsDescr} alt="" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Описание метрик</p>
                            </div>
                        </a>
                    </div>
                </li>
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
function SubmenuItem() {
    
}

const props = {
    wcmStructure: {
        id: "wcm-structure",
        href: "/wcm-structure",
        img: obzorStructure,
        name: "Обзор структуры WCM",
    },
};

export default Menu;
