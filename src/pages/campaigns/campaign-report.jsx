import React from "react";
import { Image } from "../../components/image";
import { SectionHeading } from "../../components/sectionHeading";
import { sectionsTexts } from "../../props/sectionsTexts";
import { Link } from "../../components/links";
import { RedWords, redWords } from "../../components/redWords";

export const CampaignReport = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="campaigns">
                <SectionHeading prop={sectionsTexts.campaignsReport} />
                <div className="section__content">
                    <p className="section__lead">
                        Чтобы попасть в&nbsp;отчет по&nbsp;конкретной кампании в&nbsp;структуре кампании необходимо перейти в&nbsp;<RedWords prop={"«Reporting»"}/>:
                    </p>
                    <ol className="section__list">
                        <li className="section__list-item">
                            Нажать на&nbsp;флажок напротив рекламной кампании (функционал появляется при наведении мышки на&nbsp;необходимую&nbsp;РК);
                        </li>
                        <li className="section__list-item">В&nbsp;выпадающем меню необходимо выбрать <RedWords prop={"«Reporting»"}/>;</li>
                        <li className="section__list-item">Попадаем в&nbsp;подробный отчет по&nbsp;кампании в&nbsp;целом с&nbsp;разбивкой по&nbsp;структуре.</li>
                    </ol>
                    <p className="section__lead">
                        Этот уровень называется <RedWords prop={"«campaign tree»"}/>, так как структура подобна дереву: внутри кампании выделены сайты, внутри
                        сайтов выделены инсершены (формат или отдельный сайт селлера), внутри инсершена можно выделить креативы.
                        <br />
                        Эта структура формируется при заведении кампании, на&nbsp;основании медиаплана
                    </p>
                </div>
                <Image prop={sectionsTexts.campaignsReport.image} />
            </section>
        </div>
    );
};
