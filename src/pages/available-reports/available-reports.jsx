import React from "react";
import { SectionContent } from "../../components/SectionContent";
import { sectionsTexts } from "../../props/sectionsTexts";
import Card from "../../components/cards";
import { availableReportsCardsProps } from "../../props/availableReportsCardsProps";

export const AvailableReports = () => {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="available-reports">
                <SectionContent prop={sectionsTexts.availableReports} />
                <div className="section__additional-content">
                    <Card prop={availableReportsCardsProps.overlappingReport} />
                    <Card prop={availableReportsCardsProps.friquencyReport} />
                    <Card prop={availableReportsCardsProps.technologyReport} />
                    <Card prop={availableReportsCardsProps.auditoriaReport} />
                    <Card prop={availableReportsCardsProps.geoReport} />
                </div>
            </section>
        </div>
    );
};
