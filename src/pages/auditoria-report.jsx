import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import Image from "../components/image";
import SectionHeading from "../components/sectionHeading";
import Link from "../components/links";

const links = {
    reporting: {
        text: "Reporting",
        href: "/reporting",
    },
    campaignStructure: {
        text: "Campaign Structure",
        href: "/campaigns/campaign-structure",
    },
    campaignTree: {
        text: "Campaign tree",
        href: "/campaign-tree",
    },
};

const styles = {
    width: 1000,
};

function AuditoriaReport() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="auditoria-report">
                <SectionHeading prop={sectionsTexts.auditoriaReport} />
                <div className="section__content">
                    <p className="section__lead" style={styles}>
                        <Link prop={links.reporting} />
                        &nbsp;&#10230; <Link prop={links.campaignStructure} />
                        &nbsp;&#10230; <Link prop={links.campaignTree} />
                        &nbsp;&#10230; View &nbsp;&#10230; Pivot table&nbsp;&#10230; Audience overlapping
                        <br />
                        <br />
                        Для выгрузки отчета по&nbsp;пересечению аудитории необходимо провалится в&nbsp;основную вкладку{" "}
                        <Link prop={links.reporting} />
                        <br />
                        <br />
                        Столбец слева&nbsp;&mdash; это меню уровней и&nbsp;отчетов. В&nbsp;нем выбираем Campaigns, чтобы увидеть список кампаний.
                        Необходимо зайти внутрь нужной кампании, кликнув по&nbsp;ней.
                        <br />
                        <br />
                        Зайдя внутрь кампании (кликнув по&nbsp;ней), попадаем в&nbsp;подробный отчет по&nbsp;кампании в&nbsp;целом с&nbsp;разбивкой
                        по&nbsp;структуре. (
                        <Link prop={links.campaignTree} />
                        )
                        <br />
                        <br />
                        Чтобы перейти от&nbsp;уровня campaign tree к&nbsp;отчету по&nbsp;пересечению аудитории необходимо кликнуть на&nbsp;заголовок
                        &laquo;View&raquo;, который находится над таблицей&nbsp;/ под графиком По&nbsp;клику на&nbsp;окошко, откроется дополнительное
                        меню с&nbsp;5&nbsp;видами представления данных и&nbsp;дополнительными настройками
                        <br />
                        <br />
                        В&nbsp;дополнительном меню в&nbsp;строке pivot table в&nbsp;окошке select dimension выбираем &laquo;Audience
                        Overlapping&raquo;, кликаем &laquo;Apply&raquo; Отчет представляет собой таблицу с&nbsp;наложением пересечения аудитории между
                        сайтами, в&nbsp;процентах
                    </p>
                </div>
                <Image prop={sectionsTexts.auditoriaReport.image} />
                <div className="section__content">
                    <p className="section__lead">
                        Отчет представляет собой таблицу с&nbsp;наложением пересечения аудитории между сайтами, в&nbsp;процентах.
                    </p>
                </div>
                <Image prop={sectionsTexts.auditoriaReport.imageTwo} />
            </section>
        </div>
    );
}

export default AuditoriaReport;
