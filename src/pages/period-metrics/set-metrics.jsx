import React from "react";
import { sectionsTexts } from "../../props/sectionsTexts";
import { Image } from "../../components/image";
import { SectionHeading } from "../../components/sectionHeading";
import { RedWords } from "../../components/redWords";
import { Link } from "../../components/links";

export class SetMetrics extends React.Component {
    render() {
        return (
            <div className="section__wrapper">
                <section className="section section__not-homepage" id="settings">
                    <SectionHeading prop={sectionsTexts.metrics} />
                    <div className="section__content">
                        <p className="section__lead">
                            По&nbsp;умолчанию выставлены метрики показы/клики + конверсии. Необходимо сразу выбрать актуальные для вас метрики, чтобы
                            с&nbsp;самого начала работы с&nbsp;отчетом видеть корректную статистику:
                        </p>
                        <ol className="section__list">
                            <li className="section__list-item">
                                Переходим в&nbsp;меню <RedWords prop={"«Select Metrics»"} />;
                            </li>
                            <li className="section__list-item">В&nbsp;выпадающем меню ставим галочки на&nbsp;нужных метриках;</li>
                            <li className="section__list-item">
                                Кликаем на&nbsp;кнопку &laquo;&raquo;
                                <RedWords prop={"«Save&Close»"} /> для сохранения настроек.
                            </li>
                        </ol>
                        <p className="section__lead">
                            <Link prop={{ text: "Метрики разбиты на 5 групп", href: "/metrics" }} /> для удобства, соответственно меню содержит
                            5&nbsp;закладок.
                        </p>
                        <br />
                        <p className="section__lead">
                            В&nbsp;блоке <RedWords prop={"«Selected Metrics»"} /> отображаются выбранные показатели из&nbsp;левого меню. Их&nbsp;легко
                            удалить из&nbsp;списка выбранных, нажав на&nbsp;значок корзины справа от&nbsp;ранее выбранной метрики.
                        </p>
                    </div>
                    <Image prop={sectionsTexts.metrics.image} />
                </section>
            </div>
        );
    }
}
