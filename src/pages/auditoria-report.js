import React from "react";
import permalink from "../images/permalink.png";
import exportSettings from "../images/export-settings.jpg";

function AuditoriaReport() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="auditoria-report">
                <div className="section-heading">
                    <h1 className="section-heading__title">Отчет по пересечению аудитории</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Для просмотра данных по&nbsp;пересечению аудитории в&nbsp;дополнительном меню в&nbsp;строке pivot table, в&nbsp;окошке select dimension выбираем
                        &laquo;Audience Overlapping&raquo;, кликаем &laquo;Apply&raquo;.
                    </p>
                </div>
                <img className="section__image" src={permalink} alt="структура кампании" />
                <div className="section-heading">
                    <h2 className="section-heading__title">выгрузка отчетов .xlsx</h2>
                </div>
                <div className="section__content">
                    <p className="section__lead">Отчет представляет собой таблицу с&nbsp;наложением пересечения аудитории между сайтами, в&nbsp;процентах.</p>
                </div>
                <img className="section__image" src={exportSettings} alt="структура кампании" />
            </section>
        </div>
    );
}

export default AuditoriaReport;
