import React from "react";
import period from "../../images/period.jpg";

function SetPeriod() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="settings">
                <div className="section-heading" id="period">
                    <h1 className="section-heading__title">Настройка периода</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Данные в&nbsp;<span className="section__lead_color">инструменте WCM</span> доступны в&nbsp;режиме real-time. Для просмотра стстистики
                        за&nbsp;определенный период его необходимо настроить в&nbsp;панели управления периодом&nbsp;&mdash; в&nbsp;правом верхнем углу, и&nbsp;затем
                        нажать кнопку Apply. Максимально возможный период просмотра статистики&nbsp;&mdash; один год.
                    </p>
                </div>
                <img className="section__image" src={period} alt="выбор периода" />
            </section>
        </div>
    );
}

export default SetPeriod;
