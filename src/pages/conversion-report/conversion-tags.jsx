import React from "react";
import { sectionsTexts } from "../../props/sectionsTexts";
import { Image } from "../../components/image";
import { SectionHeading } from "../../components/sectionHeading";
import { RedWords } from "../../components/redWords";
import { Link } from "../../components/links";

export const ConversionTags = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="conversion-report">
                <SectionHeading prop={sectionsTexts.conversionTags} />
                <div className="section__content">
                    <p className="section__lead">
                        Чтобы вывести в&nbsp;отчет данные по&nbsp;конверсиям с&nbsp;привязкой к&nbsp;рекламной кампании необходимо:
                    </p>
                    <ol className="section__list">
                        <li className="section__list-item">
                            Зайти в&nbsp;основную вкладку <Link prop={{ text: "«Reporting»", href: "/reporting" }} />
                        </li>
                        <li className="section__list-item">
                            Выбирать структурную единицу <Link prop={{ text: "«Campaigns»", href: "/campaigns" }} /> в&nbsp;меню уровней
                            и&nbsp;отчетов (Столбец слева);
                        </li>
                        <li className="section__list-item">
                            Провалиться внутри нужно кампании, кликнув по ней (Попадаем в подробный отчет с разбивкой по структуре –{" "}
                            <RedWords prop={"«Campaign tree»"} />
                            );
                        </li>
                        <li className="section__list-item">
                            Зайти в&nbsp;меню <RedWords prop={"«Select Metrics»"} /> в&nbsp;левом углу над графиком;
                        </li>
                        <li className="section__list-item">
                            В&nbsp;разделе <RedWords prop={"«Basic»"} /> выбрать метрику <RedWords prop={"«Conversions»"} /> и&nbsp;необходимы набор
                            дополнительных метрик в&nbsp;разделе <RedWords prop={"«Performance»"} />;
                        </li>
                        <li className="section__list-item">
                            Нажать <RedWords prop={"«Save & Close»"} /> для применения выбранных условий.
                        </li>
                    </ol>
                </div>
                <Image prop={sectionsTexts.conversionTags.image} />

                <div className="section__content">
                    <p className="section__lead">
                        Для того, чтобы отобразить статистику по&nbsp;конверсиям на&nbsp;графике, необходимо поставить галочку в&nbsp;правом меню
                        справа от&nbsp;графика.
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionTags.imageTwo} />

                <div className="section__content">
                    <p className="section__lead">Для разбивки конверсий по&nbsp;типам необходимо:</p>
                    <ol className="section__list">
                        <li className="section__list-item">
                            Провалиться в&nbsp;меню <RedWords prop={"«All conversion types and pages»"} /> в&nbsp;левом углу над графиком;
                        </li>
                        <li className="section__list-item">
                            В&nbsp;блоке <RedWords prop={"«Conversion types»"} /> выбрать необходимый тип конверсии;
                        </li>
                        <li className="section__list-item">
                            Ниже в&nbsp;этом&nbsp;же блоке в&nbsp;разделе <RedWords prop={"«Display»"} /> выбираем опцию{" "}
                            <RedWords prop={"«Breakdown by types»"} />, предварительно настроив список необходимых тегов в&nbsp;правом меню;
                        </li>
                        <li className="section__list-item">
                            Кликнуть на&nbsp;
                            <RedWords prop={"«Save & Close»"} /> для отображения настроенных параметров.
                        </li>
                    </ol>
                </div>
                <Image prop={sectionsTexts.conversionTags.imageThree} />

                <div className="section__content">
                    <p className="section__lead">
                        Для просмотра данных по&nbsp;общему количеству конверсий без привязки к&nbsp;рекламной кампании, но&nbsp;отдельно
                        по&nbsp;конверсионным тегам, необходимо:
                    </p>
                    <ol className="section__list">
                        <li className="section__list-item">
                            Перейти в&nbsp;раздел <RedWords prop={"«Conversion pages»"} /> в&nbsp;левом меню.
                        </li>
                    </ol>
                </div>
                <Image prop={sectionsTexts.conversionTags.imageFour} />

                <div className="section__content">
                    <p className="section__lead">
                        Для того, чтобы просмотреть конверсии с&nbsp;детализацией по&nbsp;тегам и&nbsp;с&nbsp;привязкой к&nbsp;любой
                        из&nbsp;структурных единиц (Проектам&nbsp;/ Каналам&nbsp;/ Кампаниям и&nbsp;т.&nbsp;д.) необходимо:
                    </p>
                    <ol className="section__list">
                        <li className="section__list-item">
                            В&nbsp;разделе под <RedWords prop={"«Conversion pages»"} /> выбрать необходимую структурную единицу, например,
                            <RedWords prop={"«Sites/Offers»"} />.
                        </li>
                    </ol>
                </div>
                <Image prop={sectionsTexts.conversionTags.imageFive} />
            </section>
        </div>
    );
};
