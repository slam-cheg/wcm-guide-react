import React from "react";
import auditoriaReport from "../images/auditoria-report.jpg";
import auditoriaReportTwo from "../images/auditoria-report-two.jpg";
import BackButton from "../components/backButton";

function AuditoriaReport() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="auditoria-report">
                <div className="section-heading">
                    <BackButton />
                    <h1 className="section-heading__title">Отчет по пересечению аудитории</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Для просмотра данных по&nbsp;пересечению аудитории в&nbsp;дополнительном меню в&nbsp;строке pivot table, в&nbsp;окошке select dimension выбираем
                        &laquo;Audience Overlapping&raquo;, кликаем &laquo;Apply&raquo;.
                    </p>
                </div>
                <img className="section__image" src={auditoriaReport} alt="структура кампании" />
                <div className="section__content">
                    <p className="section__lead">Отчет представляет собой таблицу с&nbsp;наложением пересечения аудитории между сайтами, в&nbsp;процентах.</p>
                </div>
                <img className="section__image" src={auditoriaReportTwo} alt="структура кампании" />
            </section>
        </div>
    );
}

export default AuditoriaReport;
