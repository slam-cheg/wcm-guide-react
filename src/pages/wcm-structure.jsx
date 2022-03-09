import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import Section from "../components/Section";
import Card from "../components/cards";
import { wcmStructureCardsProps } from "../props/wcmStructureCardsProps";

export default function WcmStructure() {
    return (
        <div class="section__wrapper">
            <Section prop={sectionsTexts.wcmStructure}>
                <div className="section__additional-content">
                    <Card prop={wcmStructureCardsProps.campaigns} />
                    <Card prop={wcmStructureCardsProps.creativeLibrary} />
                    <Card prop={wcmStructureCardsProps.conversions} />
                    <Card prop={wcmStructureCardsProps.reporting} />
                    <Card prop={wcmStructureCardsProps.reportCenter} />
                </div>
            </Section>
        </div>
    );
}
