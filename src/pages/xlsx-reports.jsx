import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import { Image } from "../components/image";
import { SectionHeading } from "../components/sectionHeading";
import { Link } from "../components/links";
import { RedWords } from "../components/redWords";

export const XlsxReports = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="xlsx-reports">
                <SectionHeading prop={sectionsTexts.xlsxReports} />
                <div className="section__content">
                    <p className="section__lead">
                        Для выгрузки отчета в&nbsp;формате .xlsx предварительно необходимо настроить{" "}
                        <Link
                            prop={{
                                text: "нужный раздел данных",
                                href: "/campaign-tree",
                            }}
                        />{" "}
                        и&nbsp;вывести набор метрик в&nbsp;интерфейс.
                        <br />
                        <br />
                        Далее для выгрузки отчета необходимо:
                    </p>
                    <ol className="section__list">
                        <li className="section__list-item">
                            Нажать на <RedWords prop={"«Export»"} /> в правом верхнем углу;
                        </li>
                        <li className="section__list-item">Присвоить отчету название;</li>
                        <li className="section__list-item">
                            Выгрузить отчет удобным способом: отчет можно сразу выгрузить в&nbsp;формате .xlsx сразу через кнопку{" "}
                            <RedWords prop={"«Download\u00A0only»"} /> или направить его по&nbsp;адресу электронной почты с&nbsp;помощью кнопки{" "}
                            <RedWords prop={"«Send\u00A0by\u00A0email»"} /> (Если отчет большого объема).
                        </li>
                    </ol>
                    <p className="section__lead">
                        <RedWords prop={"! Отчет уходит на\u00A0почту в\u00A0соответствии с\u00A0учетной записью."} />
                    </p>
                </div>
                <Image prop={sectionsTexts.xlsxReports.image} />
            </section>
        </div>
    );
};
