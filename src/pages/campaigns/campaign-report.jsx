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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit totam facere sit consectetur at culpa, quisquam ratione voluptates
                        provident quis mollitia, sequi optio vel amet dolores beatae ab sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit
                        totam facere sit consectetur at culpa, quisquam ratione voluptates provident quis mollitia, sequi optio vel amet dolores beatae ab sint.
                    </p>
                </div>
                <img className="section__image" src={campaignReport} alt="отчет по кампании" />
            </section>
        </div>
    );
}

export default CampaignReport;
