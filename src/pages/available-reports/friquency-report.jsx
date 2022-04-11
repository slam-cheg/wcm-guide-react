import React from "react";
import { sectionsTexts } from "../../props/sectionsTexts";
import { Image } from "../../components/image";
import { SectionHeading } from "../../components/sectionHeading";
import { RedWords } from "../../components/redWords";
import { Link } from "../../components/links";

export class FriquencyReport extends React.Component {
    render() {
        return (
            <div className="section__wrapper">
                <section className="section section__not-homepage" id="available-reports">
                    <SectionHeading prop={sectionsTexts.friquencyReport} />
                    <div className="section__content">
                        <p className="section__lead">
                            Для просмотра данных по&nbsp;распределению показов по&nbsp;частотам с&nbsp;детализацией до&nbsp;уровня площадок размещения
                            необходимо:
                        </p>
                        <ol className="section__list">
                            <li className="section__list-item">
                                Зайти в&nbsp;основную вкладку <Link prop={{ text: "«Reporting»", href: "/reporting" }} />;
                            </li>
                            <li className="section__list-item">
                                Выбираем структурную единицу <Link prop={{ text: "«Campaigns»", href: "/campaigns" }} /> в&nbsp;меню уровней
                                и&nbsp;отчетов (Столбец слева);
                            </li>
                            <li className="section__list-item">
                                Проваливаемся внутри нужной кампании, кликнув по&nbsp;ней (Попадаем в&nbsp;подробный отчет с&nbsp;разбивкой
                                по&nbsp;структуре&nbsp;&mdash; <Link prop={{ text: "«Campaign tree»", href: "/campaign-tree" }} />
                                );
                            </li>
                            <li className="section__list-item">
                                Под графиком&nbsp;/ над таблицей необходимо кликнуть на&nbsp;заголовок <RedWords prop={"«View»"} />
                                &nbsp;&mdash; откроется дополнительное меню с&nbsp;5&nbsp;видами представления данных и&nbsp;дополнительными
                                настройками;
                            </li>
                            <li className="section__list-item">
                                В&nbsp;строке меню <RedWords prop={"«Frequency»"} /> в&nbsp;первом окошке установить{" "}
                                <RedWords prop={"«Impressions»"} /> (настроен по&nbsp;умолчанию);
                            </li>
                            <li className="section__list-item">
                                Во&nbsp;втором окошке выбрать <RedWords prop={"«Unique»"} />;
                            </li>
                            <li className="section__list-item">
                                Кликаем на&nbsp;кнопку <RedWords prop={"«Apply»"} />.
                            </li>
                        </ol>
                    </div>
                    <Image prop={sectionsTexts.friquencyReport.image} />
                    <div className="section__content">
                        <p className="section__lead">
                            Отчет представляет собой таблицу с&nbsp;данными по&nbsp;охвату на&nbsp;частоте.
                            <br /> Инструмент также формирует графическую столбовую диаграмму на&nbsp;месте графика.
                        </p>
                    </div>
                    <Image prop={sectionsTexts.friquencyReport.imageTwo} />
                    <div className="section__content">
                        <p className="section__lead">
                            В&nbsp;инструменте также возможно настроить отображение кликов и&nbsp;конверсий по&nbsp;частотам, для этого необходимо:
                        </p>
                        <ol className="section__list">
                            <li className="section__list-item">
                                В&nbsp;строке меню <RedWords prop={"«Frequency»"} /> в&nbsp;первом окошке установить необходимый показатель
                                из&nbsp;выпадающего меню (Clicks&nbsp;/ Conversions);
                            </li>
                            <li className="section__list-item">
                                Во&nbsp;втором окошке выбрать <RedWords prop={"«Unique»"} />;
                            </li>
                            <li className="section__list-item">
                                Кликаем на&nbsp;кнопку <RedWords prop={"«Apply»"} />.
                            </li>
                        </ol>
                    </div>
                    <Image prop={sectionsTexts.friquencyReport.imageThree} />
                </section>
            </div>
        );
    }
}
