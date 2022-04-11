import React from "react";
import { sectionsTexts } from "../../props/sectionsTexts";
import { SectionHeading } from "../../components/sectionHeading";
import { RedWords } from "../../components/redWords";
import { Link } from "../../components/links";
import { Image } from "../../components/image";

export class AuditoriaOverlapping extends React.Component {
    render() {
        return (
            <div className="section__wrapper">
                <section className="section section__not-homepage" id="available-reports">
                    <SectionHeading prop={sectionsTexts.auditoriaOverlapping} />
                    <div className="section__content">
                        <p className="section__lead">Для выгрузки отчета по&nbsp;пересечению аудитории необходимо:</p>
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
                                Под графиком&nbsp;/ над таблицей необходимо кликнуть на&nbsp;заголовок &laquo;View&raquo;&nbsp;&mdash; откроется
                                дополнительное меню с&nbsp;5&nbsp;видами представления данных и&nbsp;дополнительными настройками;
                            </li>
                            <li className="section__list-item">
                                В&nbsp;строке меню <RedWords prop={"«Pivot Table»"} /> в&nbsp;окошке select dimension выбираем{" "}
                                <RedWords prop={"«Audience Overlapping»"} />;
                            </li>
                            <li className="section__list-item">
                                Кликаем на&nbsp;кнопку <RedWords prop={"«Apply»"} />.
                            </li>
                        </ol>
                    </div>

                    <Image prop={sectionsTexts.auditoriaOverlapping.image} />
                    <div className="section__content">
                        <p className="section__lead">
                            Отчет представляет собой таблицу с&nbsp;наложением пересечения аудитории между сайтами в&nbsp;процентах.
                        </p>
                    </div>

                    <Image prop={sectionsTexts.auditoriaOverlapping.imageTwo} />
                </section>
            </div>
        );
    }
}
