import React from "react";
import Reporting from "../images/Reporting.jpg";
import reportingTwo from "../images/Reporting-two.jpg";

function Reports() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="reporting">
                <div className="section-heading">
                    <h1 className="section-heading__title">Reporting (Отчеты)</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Для просмотра статистики по&nbsp;рекламной кампании необходимо выбрать блок <span className="section__lead_color">Reporting </span>
                        в&nbsp;выпадающем меню. Функционал появляется при наведении мышки на&nbsp;необходимую РК. Затем необходимо кликнуть на&nbsp;флажок и&nbsp;выбрать
                        блок <span className="section__lead_color">Reporting</span>.
                    </p>
                </div>
                <img className="section__image" src={Reporting} alt="отчеты" />
                <div className="section__content">
                    <p className="section__lead">
                        Столбец слева&nbsp;&mdash; это меню уровней и&nbsp;отчетов. В&nbsp;нем выбираем{" "}
                        <a className="section__lead_color" href="/campaigns">
                            Campaigns
                        </a>
                        , чтобы увидеть список кампаний. Можно зайти внутрь кампании, кликнув по&nbsp;ней.
                    </p>
                </div>
                <img className="section__image" src={reportingTwo} alt="отчеты" />
            </section>
        </div>
    );
}

export default Reports;
