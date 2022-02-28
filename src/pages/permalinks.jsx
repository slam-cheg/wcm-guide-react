import React from "react";
import permalink from "../images/permalink.png";
import BackButton from "../components/backButton";

function Permalinks() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="permalinks">
                <div className="section-heading">
                    <BackButton />
                    <h1 className="section-heading__title">Формирование гостевых ссылок</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Справа вверху находится кнопка <span className="section__lead_color">&laquo;Permalink&raquo;</span> для получения гостевой
                        ссылки (пермалинка).
                        <br />
                        <br />
                        По&nbsp;клику на&nbsp;<span className="section__lead_color">&laquo;Permalink&raquo;</span> вы&nbsp;получаете &nbsp;&mdash; гостевую ссылку с&nbsp;доступом к&nbsp;отчету. По&nbsp;такой ссылке можно увидеть точно такой&nbsp;же
                        отчет на&nbsp;том&nbsp;же самом уровне, можно менять период.
                        <br />
                        <br />
                        <span className="section__lead_color">Менять метрики или зайти в&nbsp;другой уровень отчета&nbsp;/ в&nbsp;другую кампанию по&nbsp;гостевой ссылке невозможно.</span>
                    </p>
                </div>
                <img className="section__image" src={permalink} alt="гостевая ссылка" />
            </section>
        </div>
    );
}

export default Permalinks;
