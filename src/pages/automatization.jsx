import React from "react";
import automatization from "../images/automatization.jpg";
import automatizationTwo from "../images/automatization-two.jpg";
import automatizationThree from "../images/automatization-three.jpg";
import automatizationFour from "../images/automatization-four.jpg";
import BackButton from "../components/backButton";

function Automatization() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="automatization">
                <div className="section-heading">
                    <BackButton />
                    <h1 className="section-heading__title">Автоматизация отчетов</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Для настройки автоматической отправки отчетов на&nbsp;почту необходимо задать параметры его формирования в&nbsp;блоке <a className="section__lead_color" href="/wcm-structure">Report Center</a> через функцию
                        &laquo;+ New Report&raquo;
                    </p>
                </div>
                <img className="section__image" src={automatization} alt="автоматизация отчетов" />
                <div className="section__content">
                    <p className="section__lead">В&nbsp;форме &laquo;Alert me&nbsp;via email when the report is&nbsp;ready&raquo; необходимо настроить адресатов</p>
                </div>
                <img className="section__image" src={automatizationTwo} alt="отчеты" />
                <div className="section__content">
                    <p className="section__lead">В&nbsp;форме &laquo;Report Content&raquo; необходимо настроить необходимые метрики и&nbsp;детализацию данных.</p>
                </div>
                <img className="section__image" src={automatizationThree} alt="отчеты" />
                <div className="section__content">
                    <p className="section__lead">
                        В&nbsp;форме &laquo;Preview of&nbsp;final Report&raquo; можно проверить структуру собранного отчета согласно настроенным параметрам в&nbsp;форме
                        &laquo;Report Content&raquo;. Для завершения настройки необходимо кликнуть &laquo;Save &amp;&nbsp;Run&raquo;
                    </p>
                </div>
                <img className="section__image" src={automatizationFour} alt="отчеты" />
            </section>
        </div>
    );
}

export default Automatization;
