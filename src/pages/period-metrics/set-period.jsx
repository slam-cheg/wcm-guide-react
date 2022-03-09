import React from "react";
import { sectionsTexts } from "../../props/sectionsTexts";
import Image from "../../components/image";
import SectionHeading from "../../components/sectionHeading";

function SetPeriod() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="settings">
                <SectionHeading prop={sectionsTexts.period} />
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
                <Image prop={sectionsTexts.period.image} />
            </section>
        </div>
    );
}

export default SetPeriod;
