import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import { Image } from "../components/image";
import { SectionHeading } from "../components/sectionHeading";
import { RedWords } from "../components/redWords";
import { Hint } from "../components/hint";
import { HintBtn } from "../components/hintBtn";

export const CampaignTree = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="campaign-tree">
                <SectionHeading prop={sectionsTexts.campaignTree} />
                <div className="section__content">
                    <Hint />
                    <HintBtn />
                    <p className="section__lead">
                        При переходе в&nbsp;блок статистических показателей по&nbsp;рекламной кампании данные отображаются в&nbsp;режиме{" "}
                        <RedWords prop={"«Campaign\u00A0Tree»"} /> (дерево кампании), так как структура подобна дереву: внутри кампании выделены
                        сайты, внутри сайтов выделены инсершны (формат или отдельный сайт селлера), внутри инсершна можно выделить креатив. Эта
                        структура формируется при заведении кампании на&nbsp;основании медиаплана.
                    </p>
                </div>
                <Image prop={sectionsTexts.campaignTree.image} />
            </section>
        </div>
    );
};

function hint() {}
