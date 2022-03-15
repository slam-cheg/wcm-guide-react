import React from "react";
import { sectionsTexts } from "../../props/sectionsTexts";
import { Image } from "../../components/image";
import { SectionHeading } from "../../components/sectionHeading";
import { RedWords } from "../../components/redWords";
import { Link } from "../../components/links";

export const SetMetrics = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="settings">
                <SectionHeading prop={sectionsTexts.metrics} />
                <div className="section__content">
                    <p className="section__lead">
                        Для настройки метрики необходимо перейти в&nbsp;меню <RedWords prop={"«Select Metrics»"} />, выбрать{" "}
                        <Link
                            prop={{
                                text: "набор нужных показателей",
                                href: "/metrics",
                            }}
                        />
                        , затем&nbsp;&mdash; нажать на&nbsp;кнопку <RedWords prop={"«Save&Close»"} />. Данные автоматически обновятся
                        в&nbsp;интерфейсе.
                    </p>
                </div>
                <Image prop={sectionsTexts.metrics.image} />
                <div className="section__content">
                    <p className="section__lead">
                        В&nbsp;блоке <RedWords prop={"«Selected Metrics»"} /> отображаются выбранные показатели из&nbsp;левого меню. Их&nbsp;легко
                        удалить из&nbsp;списка выбранных, нажав на&nbsp;значок корзины справа от&nbsp;ранее выбранной метрики.
                    </p>
                </div>
                <Image prop={sectionsTexts.metrics.imageTwo} />
            </section>
        </div>
    );
};
