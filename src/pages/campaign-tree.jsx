import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import Image from "../components/image";
import SectionHeading from "../components/sectionHeading";

function CampaignTree() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="campaign-tree">
                <SectionHeading prop={sectionsTexts.campaignTree} />
                <div className="section__content">
                    <p className="section__lead">
                        При переходе в&nbsp;блок статистических показателей по&nbsp;рекламной кампании данные отображаются в&nbsp;режиме
                        <span className="section__lead_color"> &laquo;Campaign&nbsp;Tree&raquo; </span>
                        (Дерево кампании), так как структура подобна дереву: внутри кампании выделены сайты, внутри сайтов выделены инсершны (формат
                        или отдельный сайт селлера), внутри инсершна можно выделить креатив. Эта структура формируется при заведении кампании
                        на&nbsp;основании медиаплана.
                    </p>
                </div>
                <Image prop={sectionsTexts.campaignTree.image} />
            </section>
        </div>
    );
}

export default CampaignTree;
