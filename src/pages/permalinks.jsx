import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import Image from "../components/image";
import SectionHeading from "../components/sectionHeading";
import RedWords from "../components/redWords";

const redWords = {
    text: "Permalink",
    textTwo: "Менять метрики или зайти в\u00A0другой уровень отчета\u00A0/ в\u00A0другую кампанию по\u00A0гостевой ссылке невозможно."
}

function Permalinks() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="permalinks">
                <SectionHeading prop={sectionsTexts.permalinks} />
                <div className="section__content">
                    <p className="section__lead">
                        Справа вверху находится кнопка <RedWords prop={redWords.text} /> для получения гостевой
                        ссылки (пермалинка).
                        <br />
                        <br />
                        По&nbsp;клику на&nbsp;<RedWords prop={redWords.text} /> вы&nbsp;получаете &nbsp;&mdash;
                        гостевую ссылку с&nbsp;доступом к&nbsp;отчету. По&nbsp;такой ссылке можно увидеть точно такой&nbsp;же отчет
                        на&nbsp;том&nbsp;же самом уровне, можно менять период.
                        <br />
                        <br />
                        <RedWords prop={redWords.textTwo} />
                    </p>
                </div>
                <Image prop={sectionsTexts.permalinks.image} />
            </section>
        </div>
    );
}

export default Permalinks;
