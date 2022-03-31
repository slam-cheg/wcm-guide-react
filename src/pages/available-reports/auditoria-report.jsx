import React from "react";
import { sectionsTexts } from "../../props/sectionsTexts";
import { Image } from "../../components/image";
import { SectionHeading } from "../../components/sectionHeading";
import { RedWords } from "../../components/redWords";
import { Link } from "../../components/links";
import BoldText from "../../components/boldText";

export const AuditoriaReport = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="available-reports">
                <SectionHeading prop={sectionsTexts.auditoriaReport} />
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
                            В&nbsp;меню откроется дополнительный уровень с&nbsp;возможностью выбора <RedWords prop={"«Audience»"} />;
                        </li>
                        <li className="section__list-item">
                            После клика по <RedWords prop={"«Audience»"} /> будет возможность выбрать из&nbsp;выпадающего списка один из&nbsp;трех
                            вариантов:
                            <ul className="section__list">
                                <li className="section__list-item">
                                    <BoldText prop={"Gender"} />
                                    &nbsp;&mdash; распределение данных по полу;
                                </li>
                                <li className="section__list-item">
                                    <BoldText prop={"Age"} />
                                    &nbsp;&mdash; распределение данных по возрасту;
                                </li>
                                <li className="section__list-item">
                                    <BoldText prop={"Clusters"} />
                                    &nbsp;&mdash; распределение данных по интересам.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <Image />
                <div className="section__content">
                    <p className="section__lead">
                        Внутри закладки Audience в&nbsp;закладке My&nbsp;Audiences доступен отчет по&nbsp;тем аудиторным сегментам, которые
                        вы&nbsp;сами сформировали. <br /> Внутри Weborama Audience Manager (доступно при использовании DMP Weborama).
                    </p>
                </div>
                <Image />
            </section>
        </div>
    );
};
