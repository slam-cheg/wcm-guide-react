import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import Image from "../components/image";
import SectionHeading from "../components/sectionHeading";
import Link from "../components/links";

const links = {
    text: "Reporting",
    href: "/reporting",
};

function ConversionReport() {
    const styles = {
        marginTop: 10,
    };
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="conversion-report">
                <SectionHeading prop={sectionsTexts.conversionReport} />

                <div className="section__content">
                    <p className="section__lead">
                        При переходе на&nbsp;вкладку Conversion в&nbsp;верхнем меню в&nbsp;интерфейсе WCM появляется список конверсионных тегов,
                        сгенерированных в&nbsp;рамках аккаунта. Верхняя строка меню в&nbsp;списке конверсионных тегов показывает количество конверсий
                        в&nbsp;столбце &laquo;#Conv.&raquo; за&nbsp;указанный период в&nbsp;правом верхнем углу и&nbsp;распределение типа
                        подготовленного тега на&nbsp;формат:
                    </p>
                    <p className="section__lead section__lead_color" style={styles}>
                        IM&nbsp;(image), IM-SSL (image с&nbsp;защищенным протоколом), тоже самое для&nbsp;JS (JavaScript) и&nbsp;JS-SSL (JavaScript
                        с&nbsp;защищенным протоколом). В&nbsp;данный момент по&nbsp;умолчанию мы&nbsp;используем только IM-SSL.
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionReport.image} />

                <div className="section__content">
                    <p className="section__lead">
                        Для просмотра данных по&nbsp;общему количеству конверсий с&nbsp;привязкой к&nbsp;рекламной кампании необходимо перейти
                        в&nbsp;раздел <Link prop={links} /> по&nbsp;РК. В&nbsp;меню Select Metrics в&nbsp;разделе Basic выбрать метрику
                        Conversion&nbsp;&mdash; затем применить условия настройки, нажав кнопку &laquo;Save and close&raquo;.
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionReport.imageTwo} />
                <div className="section__content">
                    <p className="section__lead">
                        Для того, чтобы отобразить статистику по&nbsp;конверсиям на&nbsp;графике, необходимо поставить галочку в&nbsp;левом меню
                        справа от&nbsp;графика.
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionReport.imageThree} />

                <div className="section__content">
                    <p className="section__lead">
                        Для разбивки конверсий по&nbsp;типам необходимо перейти в&nbsp;раздел All conversion types and pages, в&nbsp;блоке Conversion
                        types выбрать необходимый тип конверсии, а&nbsp;Display&nbsp;&mdash; опцию Breakdown by&nbsp;types, предварительно настроив
                        список необходимых тегов в&nbsp;левом меню. Для отображения настроенных параметров нужно кликнуть на&nbsp;&laquo;Save and
                        close&raquo;.
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionReport.imageFour} />
                <div className="section__content">
                    <p className="section__lead">
                        Для просмотра данных по&nbsp;общему количеству конверсий с&nbsp;привязкой к&nbsp;рекламной кампании, но&nbsp;отдельно
                        по&nbsp;конверсионным тегам, необходимо перейти в&nbsp;раздел Convesion pages в&nbsp;левом меню
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionReport.imageFive} />
                <div className="section__content">
                    <p className="section__lead">
                        Для того, чтобы просмотреть, с&nbsp;какой площадки (site/offers) была совершена конверсия, необходимо перейти в&nbsp;раздел
                        Sites под Conversion pages.
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionReport.imageSix} />
                <div className="section__content">
                    <p className="section__lead">
                        Для того, чтобы просмотреть, с&nbsp;какой позиции (insertion) была совершена конверсия, необходимо перейти в&nbsp;раздел
                        Insertions под Conversion pages.
                    </p>
                </div>
                <Image prop={sectionsTexts.conversionReport.imageSeven} />
            </section>
        </div>
    );
}

export default ConversionReport;
