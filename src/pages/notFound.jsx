import React from "react";
import { sectionsTexts } from "../props/sectionsTexts";
import { SectionHeading } from "../components/sectionHeading";

export class NotFound extends React.Component {
    render() {
        return (
            <div className="section__wrapper">
                <section className="section section__not-homepage" id="xlsx-reports">
                    <SectionHeading prop={sectionsTexts.notFound} />
                    <div className="section__content" style={{ minHeight: "70vh", justifyContent: "center", alignItems: "center" }}>
                        <p className="section__lead" style={{ fontSize: "30px" }}>
                            404 | Not Found
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}
