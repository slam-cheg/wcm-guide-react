import React from "react";
import viewsReport from "../images/views-report.jpg";
import auditoriaReportTwo from "../images/auditoria-report-two.jpg";
import viewsReportThree from "../images/views-report-three.jpg";
import BackButton from "../components/backButton";

function ViewsReport() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="views-report">
                <div className="section-heading">
                    <BackButton />
                    <h1 className="section-heading__title">Отчет по распределению показов, кликов, конверсий и&nbsp;частоты</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Для просмотра данных по&nbsp;распределению показов по&nbsp;частотам с&nbsp;детализацией до&nbsp;уровня площадок размещения необходимо
                        в&nbsp;дополнительном меню, в&nbsp;строке Frequency, в&nbsp;первом окошке установить Impressions (так&nbsp;же настроен по&nbsp;умолчанию)
                        и&nbsp;во&nbsp;втором&nbsp;&mdash; unique. Кликаем &laquo;Apply&raquo;
                    </p>
                </div>
                <img className="section__image" src={viewsReport} alt="отчет по распределению показов" />
                <div className="section__content">
                    <p className="section__lead">
                        Отчет представляет собой таблицу с&nbsp;данными по&nbsp;охвату на&nbsp;частоте. Инструмент также формирует графическую столбовую диаграмму.
                    </p>
                </div>
                <img className="section__image" src={auditoriaReportTwo} alt="отчет по распределению показов" />
                <div className="section__content">
                    <p className="section__lead">
                        В&nbsp;инструменте также возможно настроить отображение кликов и&nbsp;конверсий по&nbsp;частотам, выбрав в&nbsp;блок Frequency необходимый
                        показатель из&nbsp;выпадающего меню
                    </p>
                </div>
                <img className="section__image" src={viewsReportThree} alt="отчет по распределению показов" />
            </section>
        </div>
    );
}

export default ViewsReport;
