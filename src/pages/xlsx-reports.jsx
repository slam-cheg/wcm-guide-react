import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import { Image } from "../components/image";
import { SectionHeading } from "../components/sectionHeading";
import { Link } from "../components/links";

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
                        и&nbsp;вывести набор метрик в&nbsp;интерфейс. Затем&nbsp;&mdash; нажать на&nbsp;кнопку Export, присвоить отчету название
                        и&nbsp;выгрузить его в&nbsp;формате .xlsx сразу, либо настроить его отправку по&nbsp;адресу электронной почты.
                    </p>
                </div>
                <Image prop={sectionsTexts.xlsxReports.image} />
            </section>
        </div>
    );
};
