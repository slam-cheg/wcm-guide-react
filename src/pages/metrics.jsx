import React from "react";
import BackButton from "../components/backButton";

function Metrics() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="metrics">
                <div className="section-heading">
                    <BackButton />
                    <h1 className="section-heading__title">Описание метрик</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit totam facere sit consectetur at culpa, quisquam ratione voluptates
                        provident quis mollitia, sequi optio vel amet dolores beatae ab sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit
                        totam facere sit consectetur at culpa, quisquam ratione voluptates provident quis mollitia, sequi optio vel amet dolores beatae ab sint.
                    </p>
                </div>
                <ul className="accord">
                    <li className="accord__item">
                        <div className="accord__heading">
                            <p className="accord__title">Basic (основные показатели)</p>
                            <div className="accord__arrow">⮟</div>
                        </div>
                        <div className="accord__content">
                            <div className="accord__content-item">
                                <p>Impressions</p>
                                <p>Количество показов рекламного объявления</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Clicks</p>
                                <p>Количество кликов по рекламному объявлению</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Click rate versus impressions (CTR)</p>
                                <p>Отношение кликов к&nbsp;показам рекламного объявления</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Unique users</p>
                                <p>Число уникальных пользователей, увидевших рекламное объявление за&nbsp;все время рекламной кампании</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Daily unique users</p>
                                <p>Число уникальных пользователей, увидевших рекламное объявление за&nbsp;отдельные дни кампании (без учета пересечений между ними)</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Unique clicks</p>
                                <p>Число уникальных пользователей, совершивших клик по&nbsp;рекламному объявлению за&nbsp;все время рекламной кампании</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Daily unique clicks</p>
                                <p>Число уникальных пользователей, совершивших клик по&nbsp;рекламному объявлению за&nbsp;все время рекламной кампании</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Reach impressions</p>
                                <p>
                                    Охват. Общее количество пользователей, которые увидели показ объявления в&nbsp;ходе рекламной кампании. Охват рекламной кампании
                                    меньше чем число показов рекламно гообъявления, т.к. один пользователь может увидеть рекламное объявление неограниченное число раз.
                                </p>
                            </div>
                            <div className="accord__content-item">
                                <p>Reach clicks</p>
                                <p>Общее количество пользователей, которые совершили клик на&nbsp;рекламное объявление</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Unique frequency</p>
                                <p>Частота. Количество показанных объявлений на&nbsp;одного уникального пользователя</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Daily unique frequency</p>
                                <p>
                                    Количество показанных объявлений на&nbsp;одного уникального пользователя (без учета пересечений между пользователями,
                                    взаимодействующими с&nbsp;размещением в&nbsp;различные дни кампании)
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="accord__item">
                        <div className="accord__heading">
                            <p className="accord__title">Video (видео)</p>
                            <div className="accord__arrow">⮟</div>
                        </div>
                        <div className="accord__content">
                            <div className="accord__content-item">
                                <p>Automatic start</p>
                                <p>Количество показов, при которых ролик стартовал автоматически</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Video progress (25%, 50%, 75%, 100%)</p>
                                <p>Количество просмотров определенной части ролика</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Unique video progress (25%, 50%, 75%, 100%)</p>
                                <p>Количество уникальных просмотров определенной части ролика</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Completion rate</p>
                                <p>Отношение количества досмотров ролика до конца (progress 100%) к количеству показов</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Mute</p>
                                <p>Количество действий отключения звука в&nbsp;ролике</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Unmute</p>
                                <p>Количество действий включения звука в&nbsp;ролике</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Closes</p>
                                <p>Количество закрытий ролика по&nbsp;инициативе пользователя</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Close rate</p>
                                <p>Отношение количества закрытий ролика по&nbsp;инициативе пользователя к&nbsp;показам</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Video start (progress 25%, 50%, 75%, 100%) visibility rate</p>
                                <p>
                                    Отношение количества видимых показов в&nbsp;момент старта (определенных частей досмотра) ролика к&nbsp;общему количеству показов,
                                    по&nbsp;которому была определена видимость (видимым считается показ, который находится в&nbsp;зоне видимости пользователя более, чем
                                    на&nbsp;50% своей площади)
                                </p>
                            </div>
                            <div className="accord__content-item">
                                <p>Events</p>
                                <p>Количество событий досмотра ролика</p>
                            </div>
                        </div>
                    </li>
                    <li className="accord__item">
                        <div className="accord__heading">
                            <p className="accord__title">Conversions (конверсии)</p>
                            <div className="accord__arrow">⮟</div>
                        </div>
                        <div className="accord__content">
                            <div className="accord__content-item">
                                <p>Conversions</p>
                                <p>Количество совершенных целевых действий</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Reach conversions</p>
                                <p>Количество пользователей, совершивших целевые действия</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Post-click conversion</p>
                                <p>Конверсии, совершенные после клика по&nbsp;рекламному объявлению</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Post-event conversion</p>
                                <p>Конверсии, совершенные после начала просмотра ролика</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Post-impression conversion</p>
                                <p>Конверсии, совершенные после показа (для пиксельных позиций, в&nbsp;рамках которых не&nbsp;происходит подсчета событий досмотров)</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Post-impression conversion rate versus impressions</p>
                                <p>Отношение количества совершенных post-impression конверсий к&nbsp;показам</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Post-click conversion rate versus clicks</p>
                                <p>Отношение количества совершенных post-click конверсий к&nbsp;кликам</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Post-event conversion rate versus events</p>
                                <p>Отношение количества совершенных post-event конверсий к&nbsp;событиям досмотра ролика</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Average time to&nbsp;conversion (sec)</p>
                                <p>Среднее время до&nbsp;совершения конверсии (в&nbsp;секундах)</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Number of&nbsp;conversions in&nbsp;less than 60&nbsp;minutes</p>
                                <p>Количество конверсий, совершенных в&nbsp;течении 60&nbsp;минут после взаимодействия с&nbsp;рекламным объявлением</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Post-click contributions</p>
                                <p>Количество взаимодействий с&nbsp;размещением до&nbsp;совершения post-click конверсии</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Post-event contributions</p>
                                <p>Количество взаимодействий с&nbsp;размещением до&nbsp;совершения post-event конверсии</p>
                            </div>
                        </div>
                    </li>
                    <li className="accord__item">
                        <div className="accord__heading">
                            <p className="accord__title">Visibility (видимость)</p>
                            <div className="accord__arrow">⮟</div>
                        </div>
                        <div className="accord__content">
                            <div className="accord__content-item">
                                <p>Views</p>
                                <p>Количество видимых показов</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Visibility rate</p>
                                <p>Отношение количества видимых показов к&nbsp;показам рекламного объявления, по&nbsp;которым удалось измерить видимость</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Views 5 sec</p>
                                <p>Количество показов рекламного объявления, когда объявление находилось в&nbsp;зоне видимости более 5&nbsp;секунд</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Average visibility time</p>
                                <p>Среднее время, которое рекламное объявление находилось в&nbsp;зоне видимости</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Total visibility time</p>
                                <p>Общее время, которое рекламное объявление находилось в&nbsp;зоне видимости</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Video (start, progress 25% ,50% ,75% ,100%) visibility rate</p>
                                <p>Процент видимости рекламного объявления на&nbsp;странице при старте, досмотре ролика до&nbsp;25%, 50%, 75%, 100%</p>
                            </div>
                        </div>
                    </li>
                    <li className="accord__item">
                        <div className="accord__heading">
                            <p className="accord__title">Custom events (кастомные события)</p>
                            <div className="accord__arrow">⮟</div>
                        </div>
                        <div className="accord__content">
                            <div className="accord__content-item accord__content-item_subtitle">
                                <p>ВИДИМОСТЬ</p>
                                <p></p>
                            </div>
                            <div className="accord__content-item">
                                <p>MRCUndetermined</p>
                                <p>
                                    Рекламный юнит не&nbsp;может посчитать видимость на&nbsp;странице (см. описание Undetermined выше), соответственно и&nbsp;определение
                                    MRC невозможно
                                </p>
                            </div>
                            <div className="accord__content-item">
                                <p>MRCUnviewable</p>
                                <p>Событие MRC не&nbsp;наступило. При этом рекламный юнит может посчитать видимость на&nbsp;странице</p>
                            </div>
                            <div className="accord__content-item">
                                <p>MRCViewable</p>
                                <p>Событие MRC наступило. Плеер был виден на&nbsp;50% и&nbsp;более втечении 2-х последовательных секунд</p>
                            </div>
                            <div className="accord__content-item accord__content-item_subtitle">
                                <p>ЗВУК</p>
                                <p></p>
                            </div>
                            <div className="accord__content-item">
                                <p>Volume</p>
                                <p>Любое изменение громкости плеера</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Initially muted</p>
                                <p>Звук в&nbsp;ролике изначально отключен, а&nbsp;ролик запущен. (=старт ролика без звука)</p>
                            </div>
                            <div className="accord__content-item">
                                <p>Initially unmuted</p>
                                <p>Звук в&nbsp;ролике по&nbsp;умолчанию включен на&nbsp;старте (=старт ролика со&nbsp;звуком)</p>
                            </div>
                            <div className="accord__content-item accord__content-item_subtitle">
                                <p>СЛЫШИМОСТЬ</p>
                                <p></p>
                            </div>
                            <div className="accord__content-item">
                                <p>AdVideoStartAudible</p>
                                <p>Звук включен на&nbsp;старте ролика</p>
                            </div>
                            <div className="accord__content-item">
                                <p>AdVideoStartInaudible</p>
                                <p>Звук выключен на&nbsp;старте ролика</p>
                            </div>
                            <div className="accord__content-item">
                                <p>AdVideoFirstQuartileAudible</p>
                                <p>Звук включен на&nbsp;первом квартиле ролика</p>
                            </div>
                            <div className="accord__content-item">
                                <p>AdVideoFirstQuartileInaudible</p>
                                <p>Звук выключен на&nbsp;первом квартиле ролика</p>
                            </div>
                            <div className="accord__content-item">
                                <p>AdVideoMidpointAudible</p>
                                <p>Звук включен на&nbsp;втором квартиле ролика</p>
                            </div>
                            <div className="accord__content-item">
                                <p>AdVideoMidpointInaudible</p>
                                <p>Звук выключен на&nbsp;втором квартиле ролика</p>
                            </div>
                            <div className="accord__content-item">
                                <p>AdVideoThirdQuartileAudible</p>
                                <p>Звук включен на&nbsp;третьем квартиле ролика</p>
                            </div>
                            <div className="accord__content-item">
                                <p>AdVideoThirdQuartileInaudible</p>
                                <p>Звук выключен на&nbsp;третьем квартиле ролика</p>
                            </div>
                            <div className="accord__content-item">
                                <p>AdVideoCompleteAudible</p>
                                <p>Звук включен на&nbsp;четвертом квартиле ролика</p>
                            </div>
                            <div className="accord__content-item">
                                <p>AdVideoCompleteInaudible</p>
                                <p>Звук выключен на&nbsp;четвертом квартиле ролика</p>
                            </div>
                            <div className="accord__content-item accord__content-item_subtitle">
                                <p>РАЗМЕР ПЛЕЕРОВ</p>
                                <p></p>
                            </div>
                            <div className="accord__content-item">
                                <p>PlayerSmallDesktop</p>
                                <p>[0, 480]</p>
                            </div>
                            <div className="accord__content-item">
                                <p>PlayerStickyDesktop</p>
                                <p>[400, 480]</p>
                            </div>
                            <div className="accord__content-item">
                                <p>PlayerNormalDesktop</p>
                                <p>[480, 720]</p>
                            </div>
                            <div className="accord__content-item">
                                <p>PlayerBigDesktop</p>
                                <p>[720, 960]</p>
                            </div>
                            <div className="accord__content-item">
                                <p>PlayerHugeDesktop</p>
                                <p>[960, 0]</p>
                            </div>
                            <div className="accord__content-item">
                                <p>PlayerSmallMobile</p>
                                <p>[0, 260]</p>
                            </div>
                            <div className="accord__content-item">
                                <p>PlayerNormalMobile</p>
                                <p>[260, 320]</p>
                            </div>
                            <div className="accord__content-item">
                                <p>PlayerBigMobile</p>
                                <p>[320, 380]</p>
                            </div>
                            <div className="accord__content-item">
                                <p>PlayerHugeMobile</p>
                                <p>[380, 0]</p>
                            </div>
                            <div className="accord__content-item">
                                <p>PlayerFullscreen</p>
                                <p>Запуск проигрывания в&nbsp;фулскрине</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Metrics;
