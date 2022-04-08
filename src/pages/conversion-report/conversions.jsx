import React from "react";
import { sectionsTexts } from "../../props/sectionsTexts";
import { Image } from "../../components/image";
import { SectionHeading } from "../../components/sectionHeading";
import { RedWords } from "../../components/redWords";

export class Conversions extends React.Component {
    render() {
        return (
            <div className="section__wrapper">
                <section className="section section__not-homepage" id="conversion-report">
                    <SectionHeading prop={sectionsTexts.conversions} />
                    <div className="section__content">
                        <p className="section__lead">
                            При переходе на&nbsp;вкладку <RedWords prop={"«Conversion»"} />
                            в&nbsp;верхнем меню в&nbsp;интерфейсе WCM появляется список конверсионных тегов, сгенерированных в&nbsp;рамках аккаунта.
                            Верхняя строка меню в&nbsp;списке конверсионных тегов показывает количество конверсий в&nbsp;столбце{" "}
                            <RedWords prop={"«#Conv.»"} /> за&nbsp;указанный период в&nbsp;правом верхнем углу и&nbsp;распределение типа
                            подготовленного тега на&nbsp;формат:
                        </p>
                        <br />
                        <p className="section__lead">
                            <RedWords
                                prop={
                                    "IM (image), IM-SSL (image с защищенным протоколом), тоже самое для JS (JavaScript) и JS-SSL (JavaScript с защищенным протоколом). В данный момент по умолчанию мы используем только IM-SSL."
                                }
                            />
                        </p>
                    </div>
                    <Image prop={sectionsTexts.conversions.image} />
                </section>
            </div>
        );
    }
}
