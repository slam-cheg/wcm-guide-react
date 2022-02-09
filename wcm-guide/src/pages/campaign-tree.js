import React from "react";
import campaignTree from "../images/campaign-tree.jpg";

function CampaignTree() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="campaign-tree">
                <div className="section-heading">
                    <h1 className="section-heading__title">Campaign tree</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Зайдя внутрь кампании (кликнув по&nbsp;ней), попадаем в&nbsp;подробный отчет по&nbsp;кампании в&nbsp;целом с&nbsp;разбивкой по&nbsp;структуре Этот
                        уровень называется
                        <span className="section__lead_color"> &laquo;campaign tree&raquo;</span>, так как структура подобна дереву: внутри кампании выделены сайты,
                        внутри сайтов выделены инсершны (формат или отдельный сайт селлера), внутри инсершна можно выделить креативы Эта структура формируется при
                        заведении кампании, на&nbsp;основании медиаплана
                    </p>
                </div>
                <img className="section__image" src={campaignTree} alt="campaign tree" />
                <div className="section__content">
                    <p className="section__lead">
                        <span className="section__lead_color">Хитрость</span>:<br />
                        По&nbsp;умолчанию в&nbsp;таблице под графиком отображается не&nbsp;более 10&nbsp;строк с&nbsp;данными. Чтобы увидеть больше, в&nbsp;правом нижнем
                        углу под таблицей находим окошко
                        <span className="section__lead_color"> &laquo;per page&raquo;</span> и&nbsp;в&nbsp;выпадающем списке выбираем значение
                        от&nbsp;10&nbsp;до&nbsp;100.
                    </p>
                </div>
                <img className="section__image" src={campaignTree} alt="campaign tree" />
            </section>
        </div>
    );
}

export default CampaignTree;
