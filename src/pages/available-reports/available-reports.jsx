import React from "react";
import { SectionContent } from "../../components/SectionContent";
import { sectionsTexts } from "../../props/sectionsTexts";
// import { Image } from "../../components/image";
// import { SectionHeading } from "../../components/sectionHeading";
// import { Link } from "../../components/links";
// import { RedWords } from "../../components/redWords";
import Card from "../../components/cards";
import { availableReportsCardsProps } from "../../props/availableReportsCardsProps";

export const AvailableReports = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="auditoria-report">
                <SectionContent prop={sectionsTexts.availableReports} />
                <div className="section__additional-content">
                    <Card prop={availableReportsCardsProps.auditoriaReport} />
                    <Card prop={availableReportsCardsProps.friquencyReport} />
                </div>
            </section>
        </div>
    );
};
