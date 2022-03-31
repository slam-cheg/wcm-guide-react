import React from "react";
import { sectionsTexts } from "../../props/sectionsTexts";
import { Image } from "../../components/image";
import { SectionHeading } from "../../components/sectionHeading";
import { RedWords } from "../../components/redWords";
import { Link } from "../../components/links";
import BoldText from "../../components/boldText";

export const GeoReport = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="available-reports">
                <SectionHeading prop={sectionsTexts.geoReport} />
                <div className="section__content">
                    <ol className="section__list">
                        <li className="section__list-item">
                            Зайти в&nbsp;основную вкладку <Link prop={{ text: "«Reporting»", href: "/reporting" }} />;
                        </li>
                        <li className="section__list-item">
                            Выбираем структурную единицу <Link prop={{ text: "«Campaigns»", href: "/campaigns" }} /> в&nbsp;меню уровней
                            и&nbsp;отчетов (Столбец слева);
                        </li>
                        <li className="section__list-item">
                            В&nbsp;меню отчетов и&nbsp;уровней слева выбираем уровень <RedWords prop={"«Sites/Offers»"} />;
                        </li>
                        <li className="section__list-item">
                            В&nbsp;меню откроется дополнительный уровень с&nbsp;возможностью выбора <RedWords prop={"«Geographic»"} />;
                        </li>
                        <li className="section__list-item">
                            После клика по <RedWords prop={"«Geographic»"} /> будет возможность выбрать из&nbsp;выпадающего списка один из&nbsp;двух
                            вариантов:
                            <ul className="section__list">
                                <li className="section__list-item">
                                    <BoldText prop={"Country"} />
                                    &nbsp;&mdash; распределение данных по странам;
                                </li>
                                <li className="section__list-item">
                                    <BoldText prop={"Regions"} />
                                    &nbsp;&mdash; распределение данных по макрорегионам России.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <Image />
            </section>
        </div>
    );
};
