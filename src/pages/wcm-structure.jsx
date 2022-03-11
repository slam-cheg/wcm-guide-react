import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import SectionContent from "../components/SectionContent";
import Card from "../components/cards";
import { wcmStructureCardsProps } from "../props/wcmStructureCardsProps";

export const WcmStructure = () => {
    return (
        <div className="section__wrapper">
            <section className={sectionsTexts.wcmStructure.classes} id={sectionsTexts.wcmStructure.id}>
                <SectionContent prop={sectionsTexts.wcmStructure} />
                <div className="section__additional-content">
                    <Card prop={wcmStructureCardsProps.campaigns} />
                    <Card prop={wcmStructureCardsProps.creativeLibrary} />
                    <Card prop={wcmStructureCardsProps.conversions} />
                    <Card prop={wcmStructureCardsProps.reporting} />
                    <Card prop={wcmStructureCardsProps.reportCenter} />
                </div>
            </section>
        </div>
    );
};
