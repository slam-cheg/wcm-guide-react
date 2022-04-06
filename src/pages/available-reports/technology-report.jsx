import React from "react";
import { sectionsTexts } from "../../props/sectionsTexts";
import { Image } from "../../components/image";
import { SectionHeading } from "../../components/sectionHeading";
import { RedWords } from "../../components/redWords";
import { Link } from "../../components/links";
import { BoldText } from "../../components/boldText";

export class TechnologyReport extends React.Component {
    render() {
        return (
            <div className="section__wrapper">
                <section className="section section__not-homepage" id="available-reports">
                    <SectionHeading prop={sectionsTexts.technologyReport} />
                    <div className="section__content">
                        <p className="section__lead">
                            Для просмотра отчета по&nbsp;техническим параметрам, т.е.&nbsp;в&nbsp;разбивке размещения по&nbsp;Девайсам,
                            по&nbsp;Операционным системам, по&nbsp;Браузерам, по&nbsp;интернет провайдерам, необходимо:
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
                                В&nbsp;меню отчетов и&nbsp;уровней слева выбираем уровень <RedWords prop={"«Sites/Offers»"} />;
                            </li>
                            <li className="section__list-item">
                                В&nbsp;меню откроется дополнительный уровень с&nbsp;возможностью выбора <RedWords prop={"«Technologies»"} />;
                            </li>
                            <li className="section__list-item">
                                После клика по <RedWords prop={"«Technologies»"} /> будет возможность выбрать из&nbsp;выпадающего списка один
                                из&nbsp;четырех вариантов:
                                <ul className="section__list">
                                    <li className="section__list-item">
                                        <BoldText prop={"Browsers"} />
                                        &nbsp;&mdash; распределение данных по доступным Браузерам;
                                    </li>
                                    <li className="section__list-item">
                                        <BoldText prop={"Operating Systems"} />
                                        &nbsp;&mdash; распределение данных по&nbsp;доступным операционным системам;
                                    </li>
                                    <li className="section__list-item">
                                        <BoldText prop={"Devices"} />
                                        &nbsp;&mdash; распределение данных по&nbsp;доступным девайсам;
                                    </li>
                                    <li className="section__list-item">
                                        <BoldText prop={"Internet Service Providers"} />
                                        &nbsp;&mdash; распределение данных по&nbsp;доступным Интернет провайдерам.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <Image />
                </section>
            </div>
        );
    }
}
