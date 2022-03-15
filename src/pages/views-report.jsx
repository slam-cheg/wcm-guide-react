import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import { Image } from "../components/image";
import { SectionHeading } from "../components/sectionHeading";
import { RedWords } from "../components/redWords";

export const ViewsReport = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="views-report">
                <SectionHeading prop={sectionsTexts.viewsReport} />
                <div className="section__content">
                    <p className="section__lead">
                        Для просмотра данных по&nbsp;распределению показов по&nbsp;частотам с&nbsp;детализацией до&nbsp;уровня площадок размещения
                        необходимо в&nbsp;дополнительном меню, в&nbsp;строке <RedWords prop={"«Frequency»"} />, в&nbsp;первом окошке установить{" "}
                        <RedWords prop={"«Impressions»"} /> (так&nbsp;же настроен по&nbsp;умолчанию) и&nbsp;во&nbsp;втором&nbsp;&mdash;{" "}
                        <RedWords prop={"«unique»"} />. Кликаем <RedWords prop={"«Apply»"} />.
                    </p>
                </div>
                <Image prop={sectionsTexts.viewsReport.image} />
                <div className="section__content">
                    <p className="section__lead">
                        Отчет представляет собой таблицу с&nbsp;данными по&nbsp;охвату на&nbsp;частоте. Инструмент также формирует графическую
                        столбовую диаграмму.
                    </p>
                </div>
                <Image prop={sectionsTexts.viewsReport.imageTwo} />
                <div className="section__content">
                    <p className="section__lead">
                        В&nbsp;инструменте также возможно настроить отображение кликов и&nbsp;конверсий по&nbsp;частотам, выбрав в&nbsp;блок{" "}
                        <RedWords prop={"«Frequency»"} /> необходимый показатель из&nbsp;выпадающего меню
                    </p>
                </div>
                <Image prop={sectionsTexts.viewsReport.imageThree} />
            </section>
        </div>
    );
};
