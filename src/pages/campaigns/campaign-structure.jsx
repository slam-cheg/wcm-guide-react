import React from "react";
import campaignStructure from "../../images/campaign-structure.jpg";
import BackButton from "../../components/backButton";

function CampaignStructure() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="campaigns">
                <div className="section-heading">
                    <BackButton />
                    <h1 className="section-heading__title">Структура кампании</h1>
                </div>
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
                <img className="section__image" src={campaignStructure} alt="структура кампании" />
            </section>
        </div>
    );
}

export default CampaignStructure;
