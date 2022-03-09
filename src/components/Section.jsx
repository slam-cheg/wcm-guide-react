import React from "react";
import SectionHeading from "./sectionHeading";
import Image from "./image";


export default function Section({ prop }) {
    return (
        <section className={prop.classes} id={prop.id}>
            <SectionHeading prop={prop} />
            <Image prop={prop.image} />
        </section>
    );
}
