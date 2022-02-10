import React from "react";

function Metrics() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="metrics">
                <div className="section-heading">
                    <h1 className="section-heading__title">Описание метрик</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit totam facere sit consectetur at culpa, quisquam ratione voluptates
                        provident quis mollitia, sequi optio vel amet dolores beatae ab sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit
                        totam facere sit consectetur at culpa, quisquam ratione voluptates provident quis mollitia, sequi optio vel amet dolores beatae ab sint.
                    </p>
                </div>
                <ul className="accord">
                    <li className="accord__item">
                        <div className="accord__heading">
                            <h4 className="accord__title">Basic (основные показатели)</h4>
                            <div className="accord__arrow">⮟</div>
                        </div>
                        <div className="accord__content">
                            <div className="accord__content-item">
                                <p>Рандомный текст</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Рандомный текст</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Рандомный текст</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Рандомный текст</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Рандомный текст</p>
                            </div>
                        </div>
                    </li>
                    <li className="accord__item">
                        <div className="accord__heading">
                            <h4 className="accord__title">Basic (основные показатели)</h4>
                            <div className="accord__arrow">⮟</div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Metrics;
