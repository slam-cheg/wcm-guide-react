import React from "react";
import { sectionsTexts } from "../../props/sectionsTexts";
import { SectionContent } from "../../components/SectionContent";
import { Card } from "../../components/cards";
import { conversionReportCardProps } from "../../props/conversionReportCardProps";

export class ConversionReport extends React.Component {
    render() {
        return (
            <div className="section__wrapper">
                <section className="section section__not-homepage" id="conversion-report">
                    <SectionContent prop={sectionsTexts.conversionReport} />
                    <div className="section__additional-content">
                        <Card prop={conversionReportCardProps.conversions} />
                        <Card prop={conversionReportCardProps.conversionTags} />
                    </div>
                </section>
            </div>
        );
    }
}
