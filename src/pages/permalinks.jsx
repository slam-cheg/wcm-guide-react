import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import { Image } from "../components/image";
import { SectionHeading } from "../components/sectionHeading";
import { RedWords } from "../components/redWords";
import { Link } from "../components/links";

export class Permalinks extends React.Component {
    render() {
        return (
            <div className="section__wrapper">
                <section className="section section__not-homepage" id="permalinks">
                    <SectionHeading prop={sectionsTexts.permalinks} />
                    <div className="section__content">
                        <p className="section__lead">
                            Для предоставления гостевого доступа к&nbsp;интерфейсу предварительно необходимо настроить{" "}
                            <Link
                                prop={{
                                    text: "нужный\u00A0раздел\u00A0данных",
                                    href: "/campaign-tree",
                                }}
                            />{" "}
                            и&nbsp;вывести <Link prop={{ text: "набор метрик", href: "/metrics" }} /> в&nbsp;интерфейсе.
                            <br />
                            По&nbsp;гостевой ссылке можно увидеть точно такой&nbsp;же отчет на&nbsp;том&nbsp;же самом уровне, можно менять период.
                        </p>
                        <ol className="section__list">
                            <li className="section__list-item">
                                Кликаем на функцию <RedWords prop={"«Permalink»"} /> в правом верхнем углу;
                            </li>
                            <li className="section__list-item">Копируем Short URL из&nbsp;появившегося окна;</li>
                            <li className="section__list-item">
                                Нажимаем <RedWords prop={"«Close»"} />.
                            </li>
                        </ol>
                        <p className="section__lead">
                            <RedWords
                                prop={
                                    "«Менять метрики или зайти в\u00A0другой уровень отчета\u00A0/ в\u00A0другую кампанию по\u00A0гостевой ссылке невозможно»"
                                }
                            />
                            .
                        </p>
                    </div>
                    <Image prop={sectionsTexts.permalinks.image} />
                </section>
            </div>
        );
    }
}
