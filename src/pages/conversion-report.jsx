import React from "react";
import BackButton from "../components/backButton";
import conversionReport from "../images/conversion-report.jpg";
import conversionReportTwo from "../images/conversion-report-two.jpg";
import conversionReportThree from "../images/conversion-report-three.jpg";
import conversionReportFour from "../images/conversion-report-four.jpg";
import conversionReportFive from "../images/conversion-report-five.jpg";
import conversionReportSix from "../images/conversion-report-six.jpg";
import conversionReportSeven from "../images/conversion-report-seven.jpg";

function ConversionReport() {
    const styles = {
        marginTop: 10,
    };
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="conversion-report">
                <div className="section-heading">
                    <BackButton />
                    <h1 className="section-heading__title">Отчеты по конверсиям</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        При переходе на&nbsp;вкладку Conversion в&nbsp;верхнем меню в&nbsp;интерфейсе WCM появляется список конверсионных тегов, сгенерированных
                        в&nbsp;рамках аккаунта. Верхняя строка меню в&nbsp;списке конверсионных тегов показывает количество конверсий в&nbsp;столбце &laquo;#Conv.&raquo;
                        за&nbsp;указанный период в&nbsp;правом верхнем углу и&nbsp;распределение типа подготовленного тега на&nbsp;формат:
                    </p>
                    <p className="section__lead section__lead_color" style={styles}>
                        IM&nbsp;(image), IM-SSL (image с&nbsp;защищенным протоколом), тоже самое для&nbsp;JS (JavaScript) и&nbsp;JS-SSL (JavaScript с&nbsp;защищенным
                        протоколом). В&nbsp;данный момент по&nbsp;умолчанию мы&nbsp;используем только IM-SSL.
                    </p>
                </div>
                <img className="section__image" src={conversionReport} alt="отчеты по конверсиям" />
                <div className="section__content">
                    <p className="section__lead">
                        Для просмотра данных по&nbsp;общему количеству конверсий с&nbsp;привязкой к&nbsp;рекламной кампании необходимо перейти в&nbsp;раздел Reporting
                        по&nbsp;РК. В&nbsp;меню Select Metrics в&nbsp;разделе Basic выбрать метрику Conversion&nbsp;&mdash; затем применить условия настройки, нажав
                        кнопку &laquo;Save and close&raquo;.
                    </p>
                </div>
                <img className="section__image" src={conversionReportTwo} alt="отчеты по конверсиям" />
                <div className="section__content">
                    <p className="section__lead">
                        Для того, чтобы отобразить статистику по&nbsp;конверсиям на&nbsp;графике, необходимо поставить галочку в&nbsp;левом меню справа от&nbsp;графика.
                    </p>
                </div>
                <img className="section__image" src={conversionReportThree} alt="отчеты по конверсиям" />
                <div className="section__content">
                    <p className="section__lead">
                        Для разбивки конверсий по&nbsp;типам необходимо перейти в&nbsp;раздел All conversion types and pages, в&nbsp;блоке Conversion types выбрать
                        необходимый тип конверсии, а&nbsp;Display&nbsp;&mdash; опцию Breakdown by&nbsp;types, предварительно настроив список необходимых тегов
                        в&nbsp;левом меню. Для отображения настроенных параметров нужно кликнуть на&nbsp;&laquo;Save and close&raquo;.
                    </p>
                </div>
                <img className="section__image" src={conversionReportFour} alt="отчеты по конверсиям" />
                <div className="section__content">
                    <p className="section__lead">
                        Для просмотра данных по&nbsp;общему количеству конверсий с&nbsp;привязкой к&nbsp;рекламной кампании, но&nbsp;отдельно по&nbsp;конверсионным тегам,
                        необходимо перейти в&nbsp;раздел Convesion pages в&nbsp;левом меню
                    </p>
                </div>
                <img className="section__image" src={conversionReportFive} alt="отчеты по конверсиям" />
                <div className="section__content">
                    <p className="section__lead">
                        Для того, чтобы просмотреть, с&nbsp;какой площадки (site/offers) была совершена конверсия, необходимо перейти в&nbsp;раздел Sites под Conversion
                        pages.
                    </p>
                </div>
                <img className="section__image" src={conversionReportSix} alt="отчеты по конверсиям" />
                <div className="section__content">
                    <p className="section__lead">
                        Для того, чтобы просмотреть, с&nbsp;какой позиции (insertion) была совершена конверсия, необходимо перейти в&nbsp;раздел Insertions под Conversion
                        pages.
                    </p>
                </div>
                <img className="section__image" src={conversionReportSeven} alt="отчеты по конверсиям" />
            </section>
        </div>
    );
}

export default ConversionReport;
