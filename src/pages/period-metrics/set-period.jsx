import React from "react";
import { sectionsTexts } from "../../props/sectionsTexts";
import { Image } from "../../components/image";
import { SectionHeading } from "../../components/sectionHeading";
import { RedWords } from "../../components/redWords";

export const SetPeriod = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="settings">
                <SectionHeading prop={sectionsTexts.period} />
                <div className="section__content">
                    <p className="section__lead">
                        По&nbsp;умолчанию установлен период за&nbsp;последние 10&nbsp;дней. Необходимо сразу выставить необходимый вам период, чтобы
                        с&nbsp;самого начала работы с&nbsp;отчетом видеть корректную статистику:
                    </p>
                    <ol className="section__list">
                        <li className="section__list-item">Открываем календарь в&nbsp;правом верхнем углу;</li>
                        <li className="section__list-item">Выбираем нужный период;</li>
                        <li className="section__list-item">Кликаем на&nbsp;кнопку <RedWords prop={"«Apply»"}/> для сохранения выбранного периода.</li>
                    </ol>
                    <p className="section__lead">
                        Через календарь можно выбрать кастомный период или один из&nbsp;периодов по&nbsp;горячим клавишам.
                    </p>
                </div>
                <Image prop={sectionsTexts.period.image} />
            </section>
        </div>
    );
};
