import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import Image from "../components/image";
import SectionHeading from "../components/sectionHeading";

function Permalinks() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="permalinks">
                <SectionHeading prop={sectionsTexts.permalinks} />
                <div className="section__content">
                    <p className="section__lead">
                        Справа вверху находится кнопка <span className="section__lead_color">&laquo;Permalink&raquo;</span> для получения гостевой
                        ссылки (пермалинка).
                        <br />
                        <br />
                        По&nbsp;клику на&nbsp;<span className="section__lead_color">&laquo;Permalink&raquo;</span> вы&nbsp;получаете &nbsp;&mdash;
                        гостевую ссылку с&nbsp;доступом к&nbsp;отчету. По&nbsp;такой ссылке можно увидеть точно такой&nbsp;же отчет
                        на&nbsp;том&nbsp;же самом уровне, можно менять период.
                        <br />
                        <br />
                        <span className="section__lead_color">
                            Менять метрики или зайти в&nbsp;другой уровень отчета&nbsp;/ в&nbsp;другую кампанию по&nbsp;гостевой ссылке невозможно.
                        </span>
                    </p>
                </div>
                <Image prop={sectionsTexts.permalinks.image} />
            </section>
        </div>
    );
}

export default Permalinks;
