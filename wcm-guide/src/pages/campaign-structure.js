import React from "react";
import campaignStructure from "../images/campaign-structure.jpg";

function CampaignStructure() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="campaigns">
                <div className="section-heading">
                    <h1 className="section-heading__title">Структура кампании</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit totam facere sit consectetur at culpa, quisquam ratione voluptates provident quis mollitia, sequi
                        optio vel amet dolores beatae ab sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit totam facere sit consectetur at culpa, quisquam ratione
                        voluptates provident quis mollitia, sequi optio vel amet dolores beatae ab sint.
                    </p>
                </div>
                <img className="section__image" src={campaignStructure} alt="структура кампании" />
            </section>
        </div>
    );
}

export default CampaignStructure;
