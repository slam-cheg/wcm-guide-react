import React from "react";
import BackButton from "../../components/backButton";
import SectionHeading from "../../components/sectionHeading";
import { sectionsTexts } from "../../props/sectionsTexts";
import Image from "../../components/image";

function CampaignStructure() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="campaigns">
                <SectionHeading prop={sectionsTexts.campaignStructure} />
                <div className="section__content">
                    <p className="section__lead">
                        Здесь удобно смотреть структуру заведения кампании и&nbsp;основные метрики.
                        <br />
                        Выводятся следующие данные по&nbsp;структуре заведения: Название и&nbsp;идентификатор кампаний Площадки, на&nbsp;которых идет
                        размещение и&nbsp;идентификатор.
                        <br />
                        При раскрытии площадок можно увидеть заведенные позиции (Insertions). Активное&nbsp;/ не&nbsp;активное размещение
                    </p>
                </div>
                <Image prop={sectionsTexts.campaignStructure.image} />
            </section>
        </div>
    );
}

export default CampaignStructure;
