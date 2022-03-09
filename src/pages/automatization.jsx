import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import Image from "../components/image";
import SectionHeading from "../components/sectionHeading";
import Link from "../components/links";

const links = {
    text: "Report Center",
    href: "/wcm-structure",
};

function Automatization() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="automatization">
                <SectionHeading prop={sectionsTexts.automatization} />
                <div className="section__content">
                    <p className="section__lead">
                        Для настройки автоматической отправки отчетов на&nbsp;почту необходимо задать параметры его формирования в&nbsp;блоке{" "}
                        <Link prop={links} /> через функцию &laquo;+ New Report&raquo;
                    </p>
                </div>
                <Image prop={sectionsTexts.automatization.image} />
                <div className="section__content">
                    <p className="section__lead">
                        В&nbsp;форме &laquo;Alert me&nbsp;via email when the report is&nbsp;ready&raquo; необходимо настроить адресатов
                    </p>
                </div>
                <Image prop={sectionsTexts.automatization.imageTwo} />
                <div className="section__content">
                    <p className="section__lead">
                        В&nbsp;форме &laquo;Report Content&raquo; необходимо настроить необходимые метрики и&nbsp;детализацию данных.
                    </p>
                </div>
                <Image prop={sectionsTexts.automatization.imageThree} />
                <div className="section__content">
                    <p className="section__lead">
                        В&nbsp;форме &laquo;Preview of&nbsp;final Report&raquo; можно проверить структуру собранного отчета согласно настроенным
                        параметрам в&nbsp;форме &laquo;Report Content&raquo;. Для завершения настройки необходимо кликнуть &laquo;Save
                        &amp;&nbsp;Run&raquo;
                    </p>
                </div>
                <Image prop={sectionsTexts.automatization.imageFour} />
            </section>
        </div>
    );
}

export default Automatization;
