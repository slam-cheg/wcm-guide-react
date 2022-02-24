import React from "react";
import period from "../../images/period.jpg";
import BackButton from "../../components/backButton";

function SetPeriod() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="settings">
                <div className="section-heading" id="period">
                    <BackButton />
                    <h1 className="section-heading__title">Настройка периода</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        По&nbsp;умолчанию установлен период за&nbsp;последние 10&nbsp;дней. Необходимо сразу выставить необходимый вам период, чтобы
                        с&nbsp;самого начала работы с&nbsp;отчетом видеть корректную статистику.
                        <br />
                        Для настройки периода открывается календарь, в&nbsp;котором можно выбрать кастомный период.
                        <br />
                        А&nbsp;также есть возможность выбора периода по&nbsp;горячим клавишам
                    </p>
                </div>
                <img className="section__image" src={period} alt="выбор периода" />
            </section>
        </div>
    );
}

export default SetPeriod;
