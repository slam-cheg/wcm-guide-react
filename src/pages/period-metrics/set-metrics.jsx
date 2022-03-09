import React from "react";
import { sectionsTexts } from "../../props/sectionsTexts";
import Image from "../../components/image";
import SectionHeading from "../../components/sectionHeading";
import RedWords from "../../components/redWords";
import Link from "../../components/links";

const links = {
    text: "набор нужных показателей",
    href: "/metrics",
};

const redWords = {
    text: "Select Metrics",
    textTwo: "Save&Close",
};

function SetMetrics() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="settings">
                <SectionHeading prop={sectionsTexts.metrics} />
                <div className="section__content">
                    <p className="section__lead">
                        Для настройки метрики необходимо перейти в&nbsp;меню Select Metrics, выбрать <Link prop={links} />, затем&nbsp;&mdash; нажать
                        на&nbsp;кнопку <RedWords prop={redWords.textTwo} />. Данные автоматически обновятся в&nbsp;интерфейсе.
                    </p>
                </div>
                <Image prop={sectionsTexts.metrics.image} />
                <div className="section__content">
                    <p className="section__lead">
                        Для настройки метрики необходимо перейти в&nbsp;меню <RedWords prop={redWords.text} />, выбрать набор нужных показателй,
                        затем&nbsp;&mdash; нажать на&nbsp;кнопку <RedWords prop={redWords.textTwo} />. Данные автоматически обновятся
                        в&nbsp;интерфейсе.
                    </p>
                </div>
                <Image prop={sectionsTexts.metrics.imageTwo} />
            </section>
        </div>
    );
}

export default SetMetrics;
