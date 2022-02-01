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
import { sidebar } from "..";

function Menu() {
    return (
        <aside className="sidebar sidebar_disabled">
            <ul className="menu">
                <li className="menu__item">
                    <div className="menu__item-container" id="wcm-structure">
                        <a className="menu__link" href="wcm-structure">
                            <div className="menu__ico-wrapper">
                                <img src={obzorStructure} alt="Обзор" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Обзор структуры WCM</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item-container" id="campaigns">
                        <a className="menu__link" href="campaigns.html">
                            <div className="menu__ico-wrapper">
                                <img src={obzorStructure} alt="Обзор" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Campaigns</p>
                            </div>
                        </a>
                    </div>
                    <div className="menu__subitem-container">
                        <div className="menu__subitem">
                            <a href="campaign-structure.html" className="menu__subitem-link">
                                Просмотр структуры кампании
                            </a>
                        </div>
                        <div className="menu__subitem">
                            <a href="campaign-report.html" className="menu__subitem-link">
                                Отчет по кампании
                            </a>
                        </div>
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item-container" id="reporting">
                        <a className="menu__link" href="#">
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
                        <a className="menu__link" href="#">
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
                        <a className="menu__link" href="#">
                            <div className="menu__ico-wrapper">
                                <img src={settingsMetrics} alt="" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Настройка периода и&nbsp;метрик</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item-container" id="xlsx-reports">
                        <a className="menu__link" href="#">
                            <div className="menu__ico-wrapper">
                                <img src={downloadXlsx} alt="" className="menu__ico" />
                            </div>
                            <div className="menu__text-wrapper">
                                <p className="menu__text">Выгрузка отчетов .xlsx и&nbsp;формирование гостевых ссылок</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="menu__item">
                    <div className="menu__item-container" id="auditoria-report">
                        <a className="menu__link" href="#">
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
                        <a className="menu__link" href="#">
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
                        <a className="menu__link" href="#">
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
                        <a className="menu__link" href="#">
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
                        <a className="menu__link" href="#">
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



export default Menu;
