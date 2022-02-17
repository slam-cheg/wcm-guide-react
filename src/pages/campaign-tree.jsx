import React from "react";
import campaignTree from "../images/campaign-tree.jpg";
import BackButton from "../components/backButton";

function CampaignTree() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="campaign-tree">
                <div className="section-heading">
                    <BackButton />
                    <h1 className="section-heading__title">Campaign tree</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        При переходе в&nbsp;блок статистических показателей по&nbsp;рекламной кампании данные отображаются в&nbsp;режиме
                        <span className="section__lead_color"> &laquo;Campaign Tree&raquo; </span>
                        (Дерево кампании), так как структура подобна дереву: внутри кампании выделены сайты, внутри сайтов выделены инсершны (формат или отдельный сайт
                        селлера), внутри инсершна можно выделить креатив. Эта структура формируется при заведении кампании на&nbsp;основании медиаплана.
                    </p>
                </div>
                <img className="section__image" src={campaignTree} alt="campaign tree" />
            </section>
        </div>
    );
}

export default CampaignTree;
