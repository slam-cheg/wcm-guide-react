import React from "react";
import { sectionsTexts } from "../../props/sectionsTexts";
import Image from "../../components/image";
import SectionHeading from "../../components/sectionHeading";

function SetMetrics() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="settings">
                <SectionHeading prop={sectionsTexts.metrics} />
                <div className="section__content">
                    <p className="section__lead">
                        Для настройки метрики необходимо перейти в&nbsp;меню Select Metrics, выбрать{" "}
                        <a className="section__lead_color" href="/metrics">
                            набор нужных показателей
                        </a>
                        , затем&nbsp;&mdash; нажать на&nbsp;кнопку Save&amp;Close. Данные автоматически обновятся в&nbsp;интерфейсе.
                    </p>
                </div>
                <Image prop={sectionsTexts.metrics.image} />
                <div className="section__content">
                    <p className="section__lead">
                        Для настройки метрики необходимо перейти в&nbsp;меню Select Metrics, выбрать набор нужных показателй, затем&nbsp;&mdash;
                        нажать на&nbsp;кнопку Save&amp;Close. Данные автоматически обновятся в&nbsp;интерфейсе.
                    </p>
                </div>
                <Image prop={sectionsTexts.metrics.imageTwo} />
            </section>
        </div>
    );
}

export default SetMetrics;
