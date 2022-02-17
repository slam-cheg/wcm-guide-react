import React from "react";
import exportSettings from "../images/export-settings.jpg";
import BackButton from "../components/backButton";

function XlsxReports() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="xlsx-reports">
                <div className="section-heading">
                    <BackButton />
                    <h1 className="section-heading__title">выгрузка отчетов .xlsx</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Для выгрузки отчета в&nbsp;формате .xlsx предварительно необходимо настроить{" "}
                        <a className="section__lead_color" href="/campaign-tree">
                            нужный раздел данных
                        </a>{" "}
                        и&nbsp;вывести набор метрик в&nbsp;интерфейс. Затем&nbsp;&mdash; нажать на&nbsp;кнопку Export, присвоить отчету название и&nbsp;выгрузить его
                        в&nbsp;формате .xlsx сразу, либо настроить его отправку по&nbsp;адресу электронной почты.
                    </p>
                </div>
                <img className="section__image" src={exportSettings} alt="структура кампании" />
            </section>
        </div>
    );
}

export default XlsxReports;
