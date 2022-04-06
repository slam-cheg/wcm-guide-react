import React from "react";
import { SectionHeadingTitle } from "./sectionHeadingTitle";
import { BackButton } from "../components/backButton";

export const SectionHeading = ({ prop }) => {
    return (
        <div className="section-heading">
            <BackButton />
            <SectionHeadingTitle prop={prop.title} />
        </div>
    );
};
