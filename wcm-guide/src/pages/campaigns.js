import React from "react";
import campaigns from "../images/campaigns.jpg";

function Campaigns() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="campaigns">
                <div className="section-heading">
                    <h1 className="section-heading__title">WCM Campaigns (Кампании)</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit totam facere sit consectetur at culpa, quisquam ratione voluptates provident quis mollitia, sequi
                        optio vel amet dolores beatae ab sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit totam facere sit consectetur at culpa, quisquam ratione
                        voluptates provident quis mollitia, sequi optio vel amet dolores beatae ab sint.
                    </p>
                </div>
                <img className="section__image" src={campaigns} alt="Кампании WCM" />
            </section>
        </div>
    );
}

export default Campaigns;
