export const metricsProps = {
    basic: {
        impressions: {
            metric: "Impressions",
            description: "Количество показов рекламного объявления",
            style: {
                fontWeight: 600,
            },
        },
        clicks: {
            metric: "Clicks",
            description: "Количество кликов по рекламному объявлению",
            style: {
                fontWeight: 600,
            },
        },
        ctr: {
            metric: "Click rate versus impressions (CTR)",
            description: "Отношение кликов к показам рекламного объявления",
            style: {
                fontWeight: 600,
            },
        },
        uniqueUsers: {
            metric: "Unique users",
            description: "Число уникальных пользователей, увидевших рекламное объявление за все время рекламной кампании",
            style: {
                fontWeight: 600,
            },
        },
        dailyUniqueUsers: {
            metric: "Daily unique users",
            description:
                "Число уникальных пользователей, увидевших рекламное объявление за отдельные дни кампании (без учета пересечений между ними)",
            style: {
                fontWeight: 600,
            },
        },
        uniqueClicks: {
            metric: "Unique clicks",
            description: "Число уникальных пользователей, совершивших клик по рекламному объявлению за все время рекламной кампании",
            style: {
                fontWeight: 600,
            },
        },
        dailyUniqueClicks: {
            metric: "Daily unique clicks",
            description: "Число уникальных пользователей, совершивших клик по рекламному объявлению за все время рекламной кампании",
            style: {
                fontWeight: 600,
            },
        },
        reachImpressions: {
            metric: "Reach impressions",
            description:
                "Охват. Общее количество пользователей, которые увидели показ объявления в ходе рекламной кампании. Охват рекламной кампании меньше чем число показов рекламно гообъявления, т.к. один пользователь может увидеть рекламное объявление неограниченное число раз.",
            style: {
                fontWeight: 600,
            },
        },
        reachClicks: {
            metric: "Reach clicks",
            description: "Общее количество пользователей, которые совершили клик на рекламное объявление",
            style: {
                fontWeight: 600,
            },
        },
        uniqueFrequency: {
            metric: "Unique frequency",
            description: "Частота. Количество показанных объявлений на одного уникального пользователя",
            style: {
                fontWeight: 600,
            },
        },
        dailyUniqueFrequency: {
            metric: "Daily unique frequency",
            description:
                "Количество показанных объявлений на одного уникального пользователя (без учета пересечений между пользователями, взаимодействующими с размещением в различные дни кампании)",
            style: {
                fontWeight: 600,
            },
        },
    },
    video: {
        automaticStart: {
            metric: "Automatic start",
            description: "Количество показов, при которых ролик стартовал автоматически",
            style: {
                fontWeight: 600,
            },
        },
        videoProgress: {
            metric: "Video progress (25%, 50%, 75%, 100%)",
            description: "Количество просмотров определенной части ролика",
            style: {
                fontWeight: 600,
            },
        },
        uniqueVideoProgress: {
            metric: "Unique video progress (25%, 50%, 75%, 100%)",
            description: "Количество уникальных просмотров определенной части ролика",
            style: {
                fontWeight: 600,
            },
        },
        completionRate: {
            metric: "Completion rate",
            description: "Отношение количества досмотров ролика до конца (progress 100%) к количеству показов",
            style: {
                fontWeight: 600,
            },
        },
        mute: {
            metric: "Mute",
            description: "Количество действий отключения звука в ролике",
            style: {
                fontWeight: 600,
            },
        },
        unmute: {
            metric: "Unmute",
            description: "Количество действий включения звука в ролике",
            style: {
                fontWeight: 600,
            },
        },
        closes: {
            metric: "Closes",
            description: "Количество закрытий ролика по инициативе пользователя",
            style: {
                fontWeight: 600,
            },
        },
        closeRate: {
            metric: "Close rate",
            description: "Отношение количества закрытий ролика по инициативе пользователя к показам",
            style: {
                fontWeight: 600,
            },
        },
        videoStart: {
            metric: "Video start (progress 25%, 50%, 75%, 100%) visibility rate",
            style: {
                fontWeight: 600,
            },
            description:
                "Отношение количества видимых показов в момент старта (определенных частей досмотра) ролика к общему количеству показов, по которому была определена видимость (видимым считается показ, который находится в зоне видимости пользователя более, чем на 50% своей площади)",
            style: {
                fontWeight: 600,
            },
        },
        events: {
            metric: "Events",
            description: "Количество событий досмотра ролика",
            style: {
                fontWeight: 600,
            },
        },
    },
    conversion: {
        conversions: {
            metric: "Conversions",
            description: "Количество совершенных целевых действий",
            style: {
                fontWeight: 600,
            },
        },
        reachConversions: {
            metric: "Reach conversions",
            description: "Количество пользователей, совершивших целевые действия",
            style: {
                fontWeight: 600,
            },
        },
        postClick: {
            metric: "Post-click conversion",
            description: "Конверсии, совершенные после клика по рекламному объявлению",
            style: {
                fontWeight: 600,
            },
        },
        postEvent: {
            metric: "Post-event conversion",
            description: "Конверсии, совершенные после начала просмотра ролика",
            style: {
                fontWeight: 600,
            },
        },
        postImpression: {
            metric: "Post-impression conversion",
            description: "Конверсии, совершенные после показа (для пиксельных позиций, в рамках которых не происходит подсчета событий досмотров)",
            style: {
                fontWeight: 600,
            },
        },
        postImpressionVsImpression: {
            metric: "Post-impression conversion rate versus impressions",
            description: "Отношение количества совершенных post-impression конверсий к показам",
            style: {
                fontWeight: 600,
            },
        },
        postClickVsClick: {
            metric: "Post-click conversion rate versus clicks",
            description: "Отношение количества совершенных post-click конверсий к кликам",
            style: {
                fontWeight: 600,
            },
        },
        postEventVsEvents: {
            metric: "Post-event conversion rate versus events",
            description: "Отношение количества совершенных post-event конверсий к событиям досмотра ролика",
            style: {
                fontWeight: 600,
            },
        },
        averageTime: {
            metric: "Average time to conversion (sec)",
            description: "Среднее время до совершения конверсии (в секундах)",
            style: {
                fontWeight: 600,
            },
        },
        numberConversions: {
            metric: "Number of conversions in less than 60 minutes",
            description: "Количество конверсий, совершенных в течении 60 минут после взаимодействия с рекламным объявлением",
            style: {
                fontWeight: 600,
            },
        },
        postClickContributions: {
            metric: "Post-click contributions",
            description: "Количество взаимодействий с размещением до совершения post-click конверсии",
            style: {
                fontWeight: 600,
            },
        },
        postEventContributions: {
            metric: "Post-event contributions",
            description: "Количество взаимодействий с размещением до совершения post-event конверсии",
            style: {
                fontWeight: 600,
            },
        },
    },
    visibility: {
        views: {
            metric: "Views",
            description: "Количество видимых показов",
            style: {
                fontWeight: 600,
            },
        },
        visibilityRate: {
            metric: "Visibility rate",
            description: "Отношение количества видимых показов к показам рекламного объявления, по которым удалось измерить видимость",
            style: {
                fontWeight: 600,
            },
        },
        viewsFiveSec: {
            metric: "Views 5 sec",
            description: "Отношение количества видимых показов к показам рекламного объявления, по которым удалось измерить видимость",
            style: {
                fontWeight: 600,
            },
        },
        averageVisibilityTime: {
            metric: "Average visibility time",
            description: "Среднее время, которое рекламное объявление находилось в зоне видимости",
            style: {
                fontWeight: 600,
            },
        },
        totalVisibilityTime: {
            metric: "Total visibility time",
            description: "Общее время, которое рекламное объявление находилось в зоне видимости",
            style: {
                fontWeight: 600,
            },
        },
        videoVisibilityRate: {
            metric: "Video (start, progress 25% ,50% ,75% ,100%) visibility rate",
            description: "Процент видимости рекламного объявления на странице при старте, досмотре ролика до 25%, 50%, 75%, 100%",
            style: {
                fontWeight: 600,
            },
        },
    },
    customEvents: {
        visibility: {
            metric: "ВИДИМОСТЬ",
            description: "",
            style: {
                fontWeight: 600,
                color: "#c1002a",
            },
        },
        MRCUndetermined: {
            metric: "MRCUndetermined",
            description:
                "Рекламный юнит не может посчитать видимость на странице (см. описание Undetermined выше), соответственно и определение MRC невозможно",
            style: {
                fontWeight: 600,
            },
        },
        MRCUnviewable: {
            metric: "MRCUnviewable",
            description: "Событие MRC не наступило. При этом рекламный юнит может посчитать видимость на странице",
            style: {
                fontWeight: 600,
            },
        },
        MRCViewable: {
            metric: "MRCViewable",
            description: "Событие MRC наступило. Плеер был виден на 50% и более втечении 2-х последовательных секунд",
            style: {
                fontWeight: 600,
            },
        },
        sound: {
            metric: "ЗВУК",
            description: "",
            style: {
                fontWeight: 600,
                color: "#c1002a",
            },
        },
        volume: {
            metric: "Volume",
            description: "Любое изменение громкости плеера",
            style: {
                fontWeight: 600,
            },
        },
        initiallyMuted: {
            metric: "Initially muted",
            description: "Звук в ролике изначально отключен, а ролик запущен. (=старт ролика без звука)",
            style: {
                fontWeight: 600,
            },
        },
        initiallyUnmuted: {
            metric: "Initially unmuted",
            description: "Звук в ролике по умолчанию включен на старте (=старт ролика со звуком)",
            style: {
                fontWeight: 600,
            },
        },
        hearness: {
            metric: "СЛЫШИМОСТЬ",
            description: "",
            style: {
                fontWeight: 600,
                color: "#c1002a",
            },
        },
        adVideoStartAudible: {
            metric: "AdVideoStartAudible",
            description: "Звук включен на старте ролика",
            style: {
                fontWeight: 600,
            },
        },
        adVideoStartInaudible: {
            metric: "AdVideoStartInaudible",
            description: "Звук выключен на старте ролика",
            style: {
                fontWeight: 600,
            },
        },
        adVideoFirstQuartileAudible: {
            metric: "AdVideoFirstQuartileAudible",
            description: "Звук включен на первом квартиле ролика",
            style: {
                fontWeight: 600,
            },
        },
        adVideoFirstQuartileInaudible: {
            metric: "AdVideoFirstQuartileInaudible",
            description: "Звук выключен на первом квартиле ролика",
            style: {
                fontWeight: 600,
            },
        },
        adVideoMidpointAudible: {
            metric: "AdVideoMidpointAudible",
            description: "Звук включен на втором квартиле ролика",
            style: {
                fontWeight: 600,
            },
        },
        adVideoMidpointInaudible: {
            metric: "AdVideoMidpointInaudible",
            description: "Звук выключен на втором квартиле ролика",
            style: {
                fontWeight: 600,
            },
        },
        adVideoThirdQuartileAudible: {
            metric: "AdVideoThirdQuartileAudible",
            description: "Звук включен на третьем квартиле ролика",
            style: {
                fontWeight: 600,
            },
        },
        adVideoThirdQuartileInaudible: {
            metric: "AdVideoThirdQuartileInaudible",
            description: "Звук выключен на третьем квартиле ролика",
            style: {
                fontWeight: 600,
            },
        },
        adVideoCompleteAudible: {
            metric: "AdVideoCompleteAudible",
            description: "Звук включен на четвертом квартиле ролика",
            style: {
                fontWeight: 600,
            },
        },
        adVideoCompleteInaudible: {
            metric: "AdVideoCompleteInaudible",
            description: "Звук выключен на четвертом квартиле ролика",
            style: {
                fontWeight: 600,
            },
        },
        sizes: {
            metric: "РАЗМЕР ПЛЕЕРОВ",
            description: "",
            style: {
                fontWeight: 600,
                color: "#c1002a",
            },
        },
        playerSmallDesktop: {
            metric: "PlayerSmallDesktop",
            description: "[0, 480]",
            style: {
                fontWeight: 600,
            },
        },
        playerStickyDesktop: {
            metric: "PlayerStickyDesktop",
            description: "[400, 480]",
            style: {
                fontWeight: 600,
            },
        },
        playerNormalDesktop: {
            metric: "PlayerNormalDesktop",
            description: "[480, 720]",
            style: {
                fontWeight: 600,
            },
        },
        playerBigDesktop: {
            metric: "PlayerBigDesktop",
            description: "[720, 960]",
            style: {
                fontWeight: 600,
            },
        },
        playerHugeDesktop: {
            metric: "PlayerHugeDesktop",
            description: "[960, 0]",
            style: {
                fontWeight: 600,
            },
        },
        playerSmallMobile: {
            metric: "PlayerSmallMobile",
            description: "[0, 260]",
            style: {
                fontWeight: 600,
            },
        },
        playerNormalMobile: {
            metric: "PlayerNormalMobile",
            description: "[260, 320]",
            style: {
                fontWeight: 600,
            },
        },
        playerBigMobile: {
            metric: "PlayerBigMobile",
            description: "[320, 380]",
            style: {
                fontWeight: 600,
            },
        },
        playerHugeMobile: {
            metric: "PlayerHugeMobile",
            description: "[380, 0]",
            style: {
                fontWeight: 600,
            },
        },
        playerFullscreen: {
            metric: "PlayerFullscreen",
            description: "Запуск проигрывания в фулскрине",
            style: {
                fontWeight: 600,
            },
        },
    },
};

export const metricsHeadingProps = {
    basic: {
        title: "Basic (основные показатели)",
        arrow: "⮟",
    },
    video: {
        title: "Video (видео)",
        arrow: "⮟",
    },
    conversions: {
        title: "Conversions (конверсии)",
        arrow: "⮟",
    },
    visibility: {
        title: "Visibility (видимость)",
        arrow: "⮟",
    },
    customEvents: {
        title: "Custom events (кастомные события)",
        arrow: "⮟",
    },
};

export const color = {
    red: "#c1002a",
};
