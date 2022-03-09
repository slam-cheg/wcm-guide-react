import React from "react";
import SectionHeading from "../components/sectionHeading";
import { sectionsTexts } from "../props/sectionsTexts";
import Image from "../components/image";
import Link from "../components/links";

const style = {
    maxHeight: "auto",
};

const links = {
    text: "Campaigns",
    href: "/campaigns",
};

const redWords = {
    reporting: "Reporting ",
};

export default function Reports() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="reporting">
                <SectionHeading prop={sectionsTexts.reports} />
                <div className="section__grid-block">
                    <div className="section__content">
                        <p className="section__lead">
                            Для просмотра статистики по&nbsp;рекламной кампании необходимо выбрать блок{" "}
                            <span className="section__lead_color">Reporting </span>
                            в&nbsp;выпадающем меню. Функционал появляется при наведении мышки на&nbsp;необходимую РК. Затем необходимо кликнуть
                            на&nbsp;флажок и&nbsp;выбрать блок <span className="section__lead_color">Reporting</span>.
                        </p>
                    </div>
                    <Image prop={sectionsTexts.reports.image} style={style} />
                </div>
                <div className="section__grid-block">
                    <Image prop={sectionsTexts.reports.imageTwo} style={style} />
                    <div className="section__content">
                        <p className="section__lead">
                            Столбец слева&nbsp;&mdash; это меню уровней и&nbsp;отчетов. В&nbsp;нем выбираем <Link prop={links} />, чтобы увидеть
                            список кампаний. Можно зайти внутрь кампании, кликнув по&nbsp;ней.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
