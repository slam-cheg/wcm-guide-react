import React from "react";
import {SectionHeading} from "./sectionHeading";
import {Image} from "./image";

export const SectionContent = ({ prop }) => {
    return (
        <>
            <SectionHeading prop={prop} />
            <Image prop={prop.image} />
        </>
    );
};
