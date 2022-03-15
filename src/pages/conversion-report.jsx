import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import {Image} from "../components/image";
import {SectionHeading} from "../components/sectionHeading";
import {Link} from "../components/links";
import {RedWords} from "../components/redWords";

export const ConversionReport = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="conversion-report">
                <SectionHeading prop={sectionsTexts.conversionReport} />

                <div className="section__content">
                    <p className="section__lead">
                        При переходе на&nbsp;вкладку <RedWords prop={"«Conversion»"} /> в&nbsp;верхнем меню в&nbsp;интерфейсе WCM появляется список
                        конверсионных тегов, сгенерированных в&nbsp;рамках аккаунта. Верхняя строка меню в&nbsp;списке конверсионных тегов показывает
                        количество конверсий в&nbsp;столбце <RedWords prop={"«#Conv.»"} /> за&nbsp;указанный период в&nbsp;правом верхнем углу
                        и&nbsp;распределение типа подготовленного тега на&nbsp;формат:
                        <br />
                        <br />
                        <RedWords
                            prop={
                                "IM\u00A0(image), IM-SSL (image с\u00A0защищенным протоколом), тоже самое для\u00A0JS (JavaScript) и\u00A0JS-SSL (JavaScript с\u00A0защищенным протоколом). В\u00A0данный момент по\u00A0умолчанию мы\u00A0используем только IM-SSL."
                            }
                        />
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionReport.image} />

                <div className="section__content">
                    <p className="section__lead">
                        Для просмотра данных по&nbsp;общему количеству конверсий с&nbsp;привязкой к&nbsp;рекламной кампании необходимо перейти
                        в&nbsp;раздел{" "}
                        <Link
                            prop={{
                                text: "«Reporting»",
                                href: "/reporting",
                            }}
                        />{" "}
                        по&nbsp;РК. В&nbsp;меню <RedWords prop={"«Select Metrics»"} /> в&nbsp;разделе <RedWords prop={"«Basic»"} /> выбрать метрику{" "}
                        <RedWords prop={"«Conversions»"} />
                        &nbsp;&mdash; затем применить условия настройки, нажав кнопку <RedWords prop={"«Save\u00A0&\u00A0close»"} />.
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionReport.imageTwo} />
                <div className="section__content">
                    <p className="section__lead">
                        Для того, чтобы отобразить статистику по&nbsp;конверсиям на&nbsp;графике, <br />
                        необходимо поставить галочку в&nbsp;левом меню справа от&nbsp;графика.
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionReport.imageThree} />

                <div className="section__content">
                    <p className="section__lead">
                        Для разбивки конверсий по&nbsp;типам необходимо перейти в&nbsp;раздел <RedWords prop={"«All conversion types and pages»"} />,
                        в&nbsp;блоке <RedWords prop={"«Conversion types»"} /> выбрать необходимый тип конверсии, а&nbsp;
                        <RedWords prop={"«Display»"} />
                        &nbsp;&mdash; опцию <RedWords prop={"«Breakdown by\u00A0types»"} />, предварительно настроив список необходимых тегов
                        в&nbsp;левом меню. Для отображения настроенных параметров нужно кликнуть на&nbsp;
                        <RedWords prop={"«Save\u00A0&\u00A0close»"} />.
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionReport.imageFour} />
                <div className="section__content">
                    <p className="section__lead">
                        Для просмотра данных по&nbsp;общему количеству конверсий с&nbsp;привязкой к&nbsp;рекламной кампании, но&nbsp;отдельно
                        по&nbsp;конверсионным тегам, необходимо перейти в&nbsp;раздел <RedWords prop={"«Conversion pages»"} /> в&nbsp;левом меню
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionReport.imageFive} />
                <div className="section__content">
                    <p className="section__lead">
                        Для того, чтобы просмотреть, с&nbsp;какой площадки (<RedWords prop={"«site/offers»"} />) была совершена конверсия, необходимо
                        перейти в&nbsp;раздел <RedWords prop={"«Sites»"} /> под <RedWords prop={"«Conversion pages»"} />.
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionReport.imageSix} />
                <div className="section__content">
                    <p className="section__lead">
                        Для того, чтобы просмотреть, с&nbsp;какой позиции (<RedWords prop={"«insertion»"} />) была совершена конверсия, необходимо
                        перейти в&nbsp;раздел <RedWords prop={"«Insertions»"} /> под <RedWords prop={"«Conversion pages»"} />.
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionReport.imageSeven} />
            </section>
        </div>
    );
};
