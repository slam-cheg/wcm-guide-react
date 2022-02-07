import React from "react";
import Reporting from "../images/Reporting.jpg";

function Reports() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="reporting">
                <div className="section-heading">
                    <h1 className="section-heading__title">Отчеты</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        <span className="section__lead_color">Reporting</span> &mdash;&nbsp;вкладка со&nbsp;статистикой по&nbsp;размещению и&nbsp;всеми отчетами&nbsp;По умолчанию тут представлены все
                        проекты, заведенные внутри аккаунта (список проектов в&nbsp;таблице под графиком) Можно зайти внутрь проекта, кликнув по&nbsp;нему
                    </p>
                </div>
                <img className="section__image" src={Reporting} alt="отчеты" />
            </section>
        </div>
    );
}

export default Reports;
