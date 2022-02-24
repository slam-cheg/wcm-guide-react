import React from "react";
import campaignReport from "../../images/campaign-report.jpg";
import BackButton from "../../components/backButton";

function CampaignReport() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="campaigns">
                <div className="section-heading">
                    <BackButton />
                    <h1 className="section-heading__title">Отчет по кампании</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Чтобы попасть в&nbsp;отчет по&nbsp;конкретной кампании в&nbsp;структуре кампании необходимо перейти в&nbsp;Reporting Зайдя
                        внутрь кампании (кликнув на&nbsp;Reporting), попадаем в&nbsp;подробный отчет по&nbsp;кампании в&nbsp;целом с&nbsp;разбивкой
                        по&nbsp;структуре.
                        <br />
                        Этот уровень называется{" "}
                        <a className="section__lead_color" href="/campaign-tree">
                            &laquo;campaign tree&raquo;
                        </a>
                        , так как структура подобна дереву: внутри кампании выделены сайты, внутри сайтов выделены инсершны (формат или отдельный сайт
                        селлера), внутри инсершна можно выделить креативы.
                        <br />
                        Эта структура формируется при заведении кампании, на&nbsp;основании медиаплана
                    </p>
                </div>
                <img className="section__image" src={campaignReport} alt="отчет по кампании" />
            </section>
        </div>
    );
}

export default CampaignReport;
