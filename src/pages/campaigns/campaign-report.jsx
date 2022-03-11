import React from "react";
import {Image} from "../../components/image";
import {SectionHeading} from "../../components/sectionHeading";
import { sectionsTexts } from "../../props/sectionsTexts";
import {Link} from "../../components/links";

export const CampaignReport = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="campaigns">
                <SectionHeading prop={sectionsTexts.campaignsReport} />
                <div className="section__content">
                    <p className="section__lead">
                        Чтобы попасть в&nbsp;отчет по&nbsp;конкретной кампании в&nbsp;структуре кампании необходимо перейти в&nbsp;Reporting Зайдя
                        внутрь кампании (кликнув на&nbsp;Reporting), попадаем в&nbsp;подробный отчет по&nbsp;кампании в&nbsp;целом с&nbsp;разбивкой
                        по&nbsp;структуре.
                        <br />
                        Этот уровень называется <Link prop={{ text: "«campaign tree»", href: "/campaign-tree" }} />
                        , так как структура подобна дереву: внутри кампании выделены сайты, внутри сайтов выделены инсершны (формат или отдельный сайт
                        селлера), внутри инсершна можно выделить креативы.
                        <br />
                        Эта структура формируется при заведении кампании, на&nbsp;основании медиаплана
                    </p>
                </div>
                <Image prop={sectionsTexts.campaignsReport.image} />
            </section>
        </div>
    );
};
