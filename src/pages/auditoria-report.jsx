import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import { Image } from "../components/image";
import { SectionHeading } from "../components/sectionHeading";
import { Link } from "../components/links";
import { RedWords } from "../components/redWords";

export const AuditoriaReport = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="auditoria-report">
                <SectionHeading prop={sectionsTexts.auditoriaReport} />
                <div className="section__content">
                    <p className="section__lead" style={{ width: 1000 }}>
                        Для выгрузки отчета по&nbsp;пересечению аудитории необходимо провалится в&nbsp;основную вкладку{" "}
                        <Link
                            prop={{
                                text: "«Reporting»",
                                href: "/reporting",
                            }}
                        />
                        <br />
                        <br />
                        Столбец слева&nbsp;&mdash; это меню уровней и&nbsp;отчетов. В&nbsp;нем выбираем{" "}
                        <Link
                            prop={{
                                text: "«Campaigns»",
                                href: "/campaigns",
                            }}
                        />
                        , чтобы увидеть список кампаний. Необходимо зайти внутрь нужной кампании, кликнув по&nbsp;ней.
                        <br />
                        <br />
                        Зайдя внутрь кампании (кликнув по&nbsp;ней), попадаем в&nbsp;подробный отчет по&nbsp;кампании в&nbsp;целом с&nbsp;разбивкой
                        по&nbsp;структуре. (
                        <Link
                            prop={{
                                text: "«Campaign tree»",
                                href: "/campaign-tree",
                            }}
                        />
                        )
                        <br />
                        <br />
                        Чтобы перейти от&nbsp;уровня{" "}
                        <Link
                            prop={{
                                text: "«Campaign tree»",
                                href: "/campaign-tree",
                            }}
                        />{" "}
                        к&nbsp;отчету по&nbsp;пересечению аудитории необходимо кликнуть на&nbsp;заголовок <RedWords prop={"«view»"} />, который
                        находится над таблицей&nbsp;/ под графиком. По&nbsp;клику на&nbsp;окошко, откроется дополнительное меню с&nbsp;5&nbsp;видами
                        представления данных и&nbsp;дополнительными настройками
                        <br />
                        <br />
                        В&nbsp;дополнительном меню в&nbsp;строке <RedWords prop={"«pivot table»"} /> в&nbsp;окошке select dimension выбираем{" "}
                        <RedWords prop={"«audience overlapping»"} />, кликаем <RedWords prop={"«Apply»"} /> Отчет представляет собой таблицу
                        с&nbsp;наложением пересечения аудитории между сайтами, в&nbsp;процентах
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
};
