import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import Image from "../components/image";
import SectionHeading from "../components/sectionHeading";
import Link from "../components/links";
import RedWords from "../components/redWords";

function Automatization() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="automatization">
                <SectionHeading prop={sectionsTexts.automatization} />
                <div className="section__content">
                    <p className="section__lead">
                        Для настройки автоматической отправки отчетов на&nbsp;почту необходимо задать параметры его формирования в&nbsp;блоке{" "}
                        <Link
                            prop={{
                                text: "Report Center",
                                href: "/wcm-structure",
                            }}
                        />{" "}
                        через функцию <RedWords prop={"«+ New Report»"} />
                    </p>
                </div>
                <Image prop={sectionsTexts.automatization.image} />
                <div className="section__content">
                    <p className="section__lead">
                        В&nbsp;форме <RedWords prop={"«Alert me via email when the report is ready»"} /> необходимо настроить адресатов
                    </p>
                </div>
                <Image prop={sectionsTexts.automatization.imageTwo} />
                <div className="section__content">
                    <p className="section__lead">
                        В&nbsp;форме <RedWords prop={"«Report Content»"} /> необходимо настроить необходимые метрики и&nbsp;детализацию данных.
                    </p>
                </div>
                <Image prop={sectionsTexts.automatization.imageThree} />
                <div className="section__content">
                    <p className="section__lead">
                        В&nbsp;форме &laquo;Preview of&nbsp;final Report&raquo; можно проверить структуру собранного отчета согласно настроенным
                        параметрам в&nbsp;форме <RedWords prop={"«Report Content»"} />. Для завершения настройки необходимо кликнуть{" "}
                        <RedWords prop={"«Save\u00A0&\u00A0Run»"} />
                    </p>
                </div>
                <Image prop={sectionsTexts.automatization.imageFour} />
            </section>
        </div>
    );
}

export default Automatization;
