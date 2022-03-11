import React, { useEffect } from "react";
import { metricsProps } from "../props/metricsProps";
import { metricsHeadingProps } from "../props/metricsProps";
import {SectionHeading} from "../components/sectionHeading";
import { sectionsTexts } from "../props/sectionsTexts";

export const Metrics = () => {
    useEffect(() => {
        accord();
    });
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="metrics">
                <SectionHeading prop={sectionsTexts.allMetrics} />
                <div className="section__content"></div>
                <ul className="accord">
                    <li className="accord__item">
                        <AccordHeading prop={metricsHeadingProps.basic} />
                        <div className="accord__content">
                            <AccordContentItem prop={metricsProps.basic.impressions} />
                            <AccordContentItem prop={metricsProps.basic.clicks} />
                            <AccordContentItem prop={metricsProps.basic.ctr} />
                            <AccordContentItem prop={metricsProps.basic.uniqueUsers} />
                            <AccordContentItem prop={metricsProps.basic.dailyUniqueUsers} />
                            <AccordContentItem prop={metricsProps.basic.uniqueClicks} />
                            <AccordContentItem prop={metricsProps.basic.dailyUniqueClicks} />
                            <AccordContentItem prop={metricsProps.basic.reachImpressions} />
                            <AccordContentItem prop={metricsProps.basic.reachClicks} />
                            <AccordContentItem prop={metricsProps.basic.uniqueFrequency} />
                            <AccordContentItem prop={metricsProps.basic.dailyUniqueFrequency} />
                        </div>
                    </li>
                    <li className="accord__item">
                        <AccordHeading prop={metricsHeadingProps.video} />
                        <div className="accord__content">
                            <AccordContentItem prop={metricsProps.video.automaticStart} />
                            <AccordContentItem prop={metricsProps.video.videoProgress} />
                            <AccordContentItem prop={metricsProps.video.uniqueVideoProgress} />
                            <AccordContentItem prop={metricsProps.video.completionRate} />
                            <AccordContentItem prop={metricsProps.video.mute} />
                            <AccordContentItem prop={metricsProps.video.unmute} />
                            <AccordContentItem prop={metricsProps.video.closes} />
                            <AccordContentItem prop={metricsProps.video.closeRate} />
                            <AccordContentItem prop={metricsProps.video.videoStart} />
                            <AccordContentItem prop={metricsProps.video.events} />
                        </div>
                    </li>
                    <li className="accord__item">
                        <AccordHeading prop={metricsHeadingProps.conversions} />
                        <div className="accord__content">
                            <AccordContentItem prop={metricsProps.conversion.conversions} />
                            <AccordContentItem prop={metricsProps.conversion.reachConversions} />
                            <AccordContentItem prop={metricsProps.conversion.postClick} />
                            <AccordContentItem prop={metricsProps.conversion.postEvent} />
                            <AccordContentItem prop={metricsProps.conversion.postImpression} />
                            <AccordContentItem prop={metricsProps.conversion.postImpressionVsImpression} />
                            <AccordContentItem prop={metricsProps.conversion.postClickVsClick} />
                            <AccordContentItem prop={metricsProps.conversion.postEventVsEvents} />
                            <AccordContentItem prop={metricsProps.conversion.averageTime} />
                            <AccordContentItem prop={metricsProps.conversion.numberConversions} />
                            <AccordContentItem prop={metricsProps.conversion.postClickContributions} />
                            <AccordContentItem prop={metricsProps.conversion.postEventContributions} />
                        </div>
                    </li>
                    <li className="accord__item">
                        <AccordHeading prop={metricsHeadingProps.visibility} />
                        <div className="accord__content">
                            <AccordContentItem prop={metricsProps.visibility.views} />
                            <AccordContentItem prop={metricsProps.visibility.visibilityRate} />
                            <AccordContentItem prop={metricsProps.visibility.viewsFiveSec} />
                            <AccordContentItem prop={metricsProps.visibility.averageVisibilityTime} />
                            <AccordContentItem prop={metricsProps.visibility.totalVisibilityTime} />
                            <AccordContentItem prop={metricsProps.visibility.videoVisibilityRate} />
                        </div>
                    </li>
                    <li className="accord__item">
                        <AccordHeading prop={metricsHeadingProps.customEvents} />
                        <div className="accord__content">
                            <AccordContentItem prop={metricsProps.customEvents.visibility} />
                            <AccordContentItem prop={metricsProps.customEvents.MRCUndetermined} />
                            <AccordContentItem prop={metricsProps.customEvents.MRCUnviewable} />
                            <AccordContentItem prop={metricsProps.customEvents.MRCViewable} />
                            <AccordContentItem prop={metricsProps.customEvents.sound} />
                            <AccordContentItem prop={metricsProps.customEvents.volume} />
                            <AccordContentItem prop={metricsProps.customEvents.initiallyMuted} />
                            <AccordContentItem prop={metricsProps.customEvents.initiallyUnmuted} />
                            <AccordContentItem prop={metricsProps.customEvents.hearness} />
                            <AccordContentItem prop={metricsProps.customEvents.adVideoStartAudible} />
                            <AccordContentItem prop={metricsProps.customEvents.adVideoStartInaudible} />
                            <AccordContentItem prop={metricsProps.customEvents.adVideoFirstQuartileAudible} />
                            <AccordContentItem prop={metricsProps.customEvents.adVideoFirstQuartileInaudible} />
                            <AccordContentItem prop={metricsProps.customEvents.adVideoMidpointAudible} />
                            <AccordContentItem prop={metricsProps.customEvents.adVideoMidpointInaudible} />
                            <AccordContentItem prop={metricsProps.customEvents.adVideoThirdQuartileAudible} />
                            <AccordContentItem prop={metricsProps.customEvents.adVideoThirdQuartileInaudible} />
                            <AccordContentItem prop={metricsProps.customEvents.adVideoCompleteAudible} />
                            <AccordContentItem prop={metricsProps.customEvents.adVideoCompleteInaudible} />
                            <AccordContentItem prop={metricsProps.customEvents.sizes} />
                            <AccordContentItem prop={metricsProps.customEvents.playerSmallDesktop} />
                            <AccordContentItem prop={metricsProps.customEvents.playerStickyDesktop} />
                            <AccordContentItem prop={metricsProps.customEvents.playerNormalDesktop} />
                            <AccordContentItem prop={metricsProps.customEvents.playerBigDesktop} />
                            <AccordContentItem prop={metricsProps.customEvents.playerHugeDesktop} />
                            <AccordContentItem prop={metricsProps.customEvents.playerSmallMobile} />
                            <AccordContentItem prop={metricsProps.customEvents.playerNormalMobile} />
                            <AccordContentItem prop={metricsProps.customEvents.playerBigMobile} />
                            <AccordContentItem prop={metricsProps.customEvents.playerHugeMobile} />
                            <AccordContentItem prop={metricsProps.customEvents.playerFullscreen} />
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};

const AccordContentItem = ({ prop }) => {
    return (
        <div className="accord__content-item">
            <p style={prop.style}>{prop.metric}</p>
            <p>{prop.description}</p>
        </div>
    );
};

const AccordHeading = ({ prop }) => {
    return (
        <div className="accord__heading">
            <p className="accord__title">{prop.title}</p>
            <div className="accord__arrow">{prop.arrow}</div>
        </div>
    );
};

const accord = () => {
    const accord = document.querySelector(".accord");
    const accordItems = accord.querySelectorAll(".accord__item");
    accord.addEventListener("click", (event) => {
        const accordItem = event.target.closest(".accord__item");
        const accordHeader = accordItem.querySelector(".accord__heading");
        const accordContent = accordItem.querySelector(".accord__content");
        if (accordContent.classList.contains("accord__content_opened")) {
            accordContent.classList.remove("accord__content_opened");
            accordHeader.classList.remove("accord__heading_opened");
        } else {
            accordItems.forEach((item) => {
                if (item.querySelector(".accord__content").classList.contains("accord__content_opened")) {
                    item.querySelector(".accord__content").classList.remove("accord__content_opened");
                    item.querySelector(".accord__heading").classList.remove("accord__heading_opened");
                }
            });
            accordContent.classList.add("accord__content_opened");
            accordHeader.classList.add("accord__heading_opened");
        }
    });
};
