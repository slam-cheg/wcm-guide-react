export const metricsProps = {
    basic: {
        impressions: {
            metric: "Impressions",
            description: "Количество показов рекламного объявления",
        },
        clicks: {
            metric: "Clicks",
            description: "Количество кликов по рекламному объявлению",
        },
        ctr: {
            metric: "Click rate versus impressions (CTR)",
            description: "Отношение кликов к показам рекламного объявления",
        },
        uniqueUsers: {
            metric: "Unique users",
            description: "Число уникальных пользователей, увидевших рекламное объявление за все время рекламной кампании",
        },
        dailyUniqueUsers: {
            metric: "Daily unique users",
            description:
                "Число уникальных пользователей, увидевших рекламное объявление за отдельные дни кампании (без учета пересечений между ними)",
        },
        uniqueClicks: {
            metric: "Unique clicks",
            description: "Число уникальных пользователей, совершивших клик по рекламному объявлению за все время рекламной кампании",
        },
        dailyUniqueClicks: {
            metric: "Daily unique clicks",
            description: "Число уникальных пользователей, совершивших клик по рекламному объявлению за все время рекламной кампании",
        },
        reachImpressions: {
            metric: "Reach impressions",
            description:
                "Охват. Общее количество пользователей, которые увидели показ объявления в ходе рекламной кампании. Охват рекламной кампании меньше чем число показов рекламно гообъявления, т.к. один пользователь может увидеть рекламное объявление неограниченное число раз.",
        },
        reachClicks: {
            metric: "Reach clicks",
            description: "Общее количество пользователей, которые совершили клик на рекламное объявление",
        },
        uniqueFrequency: {
            metric: "Unique frequency",
            description: "Частота. Количество показанных объявлений на одного уникального пользователя",
        },
        dailyUniqueFrequency: {
            metric: "Daily unique frequency",
            description:
                "Количество показанных объявлений на одного уникального пользователя (без учета пересечений между пользователями, взаимодействующими с размещением в различные дни кампании)",
        },
    },
    video: {
        automaticStart: {
            metric: "Automatic start",
            description: "Количество показов, при которых ролик стартовал автоматически",
        },
        videoProgress: {
            metric: "Video progress (25%, 50%, 75%, 100%)",
            description: "Количество просмотров определенной части ролика",
        },
        uniqueVideoProgress: {
            metric: "Unique video progress (25%, 50%, 75%, 100%)",
            description: "Количество уникальных просмотров определенной части ролика",
        },
        completionRate: {
            metric: "Completion rate",
            description: "Отношение количества досмотров ролика до конца (progress 100%) к количеству показов",
        },
        mute: {
            metric: "Mute",
            description: "Количество действий отключения звука в ролике",
        },
        unmute: {
            metric: "Unmute",
            description: "Количество действий включения звука в ролике",
        },
        closes: {
            metric: "Closes",
            description: "Количество закрытий ролика по инициативе пользователя",
        },
        closeRate: {
            metric: "Close rate",
            description: "Отношение количества закрытий ролика по инициативе пользователя к показам",
        },
        videoStart: {
            metric: "Video start (progress 25%, 50%, 75%, 100%) visibility rate",
            description:
                "Отношение количества видимых показов в момент старта (определенных частей досмотра) ролика к общему количеству показов, по которому была определена видимость (видимым считается показ, который находится в зоне видимости пользователя более, чем на 50% своей площади)",
        },
        events: {
            metric: "Events",
            description: "Количество событий досмотра ролика",
        },
    },
    conversion: {
        conversions: {
            metric: "Conversions",
            description: "Количество совершенных целевых действий",
        },
        reachConversions: {
            metric: "Reach conversions",
            description: "Количество пользователей, совершивших целевые действия",
        },
        postClick: {
            metric: "Post-click conversion",
            description: "Конверсии, совершенные после клика по рекламному объявлению",
        },
        postEvent: {
            metric: "Post-event conversion",
            description: "Конверсии, совершенные после начала просмотра ролика",
        },
        postImpression: {
            metric: "Post-impression conversion",
            description: "Конверсии, совершенные после показа (для пиксельных позиций, в рамках которых не происходит подсчета событий досмотров)",
        },
        postImpressionVsImpression: {
            metric: "Post-impression conversion rate versus impressions",
            description: "Отношение количества совершенных post-impression конверсий к показам",
        },
        postClickVsClick: {
            metric: "Post-click conversion rate versus clicks",
            description: "Отношение количества совершенных post-click конверсий к кликам",
        },
        postEventVsEvents: {
            metric: "Post-event conversion rate versus events",
            description: "Отношение количества совершенных post-event конверсий к событиям досмотра ролика",
        },
        averageTime: {
            metric: "Average time to conversion (sec)",
            description: "Среднее время до совершения конверсии (в секундах)",
        },
        numberConversions: {
            metric: "Number of conversions in less than 60 minutes",
            description: "Количество конверсий, совершенных в течении 60 минут после взаимодействия с рекламным объявлением",
        },
        postClickContributions: {
            metric: "Post-click contributions",
            description: "Количество взаимодействий с размещением до совершения post-click конверсии",
        },
        postEventContributions: {
            metric: "Post-event contributions",
            description: "Количество взаимодействий с размещением до совершения post-event конверсии",
        },
    },
    visibility: {
        views: {
            metric: "Views",
            description: "Количество видимых показов",
        },
        visibilityRate: {
            metric: "Visibility rate",
            description: "Отношение количества видимых показов к показам рекламного объявления, по которым удалось измерить видимость",
        },
        viewsFiveSec: {
            metric: "Views 5 sec",
            description: "Отношение количества видимых показов к показам рекламного объявления, по которым удалось измерить видимость",
        },
        averageVisibilityTime: {
            metric: "Average visibility time",
            description: "Среднее время, которое рекламное объявление находилось в зоне видимости",
        },
        totalVisibilityTime: {
            metric: "Total visibility time",
            description: "Общее время, которое рекламное объявление находилось в зоне видимости",
        },
        videoVisibilityRate: {
            metric: "Video (start, progress 25% ,50% ,75% ,100%) visibility rate",
            description: "Процент видимости рекламного объявления на странице при старте, досмотре ролика до 25%, 50%, 75%, 100%",
        },
    },
    customEvents: {
        visibility: {
            metric: "ВИДИМОСТЬ",
            description: "",
            color: "#c1002a",
        },
        MRCUndetermined: {
            metric: "MRCUndetermined",
            description:
                "Рекламный юнит не может посчитать видимость на странице (см. описание Undetermined выше), соответственно и определение MRC невозможно",
        },
        MRCUnviewable: {
            metric: "MRCUnviewable",
            description: "Событие MRC не наступило. При этом рекламный юнит может посчитать видимость на странице",
        },
        MRCViewable: {
            metric: "MRCViewable",
            description: "Событие MRC наступило. Плеер был виден на 50% и более втечении 2-х последовательных секунд",
        },
        sound: {
            metric: "ЗВУК",
            description: "",
            color: "#c1002a",
        },
        volume: {
            metric: "Volume",
            description: "Любое изменение громкости плеера",
        },
        initiallyMuted: {
            metric: "Initially muted",
            description: "Звук в ролике изначально отключен, а ролик запущен. (=старт ролика без звука)",
        },
        initiallyUnmuted: {
            metric: "Initially unmuted",
            description: "Звук в ролике по умолчанию включен на старте (=старт ролика со звуком)",
        },
        hearness: {
            metric: "СЛЫШИМОСТЬ",
            description: "",
            color: "#c1002a",
        },
        adVideoStartAudible: {
            metric: "AdVideoStartAudible",
            description: "Звук включен на старте ролика",
        },
        adVideoStartInaudible: {
            metric: "AdVideoStartInaudible",
            description: "Звук выключен на старте ролика",
        },
        adVideoFirstQuartileAudible: {
            metric: "AdVideoFirstQuartileAudible",
            description: "Звук включен на первом квартиле ролика",
        },
        adVideoFirstQuartileInaudible: {
            metric: "AdVideoFirstQuartileInaudible",
            description: "Звук выключен на первом квартиле ролика",
        },
        adVideoMidpointAudible: {
            metric: "AdVideoMidpointAudible",
            description: "Звук включен на втором квартиле ролика",
        },
        adVideoMidpointInaudible: {
            metric: "AdVideoMidpointInaudible",
            description: "Звук выключен на втором квартиле ролика",
        },
        adVideoThirdQuartileAudible: {
            metric: "AdVideoThirdQuartileAudible",
            description: "Звук включен на третьем квартиле ролика",
        },
        adVideoThirdQuartileInaudible: {
            metric: "AdVideoThirdQuartileInaudible",
            description: "Звук выключен на третьем квартиле ролика",
        },
        adVideoCompleteAudible: {
            metric: "AdVideoCompleteAudible",
            description: "Звук включен на четвертом квартиле ролика",
        },
        adVideoCompleteInaudible: {
            metric: "AdVideoCompleteInaudible",
            description: "Звук выключен на четвертом квартиле ролика",
        },
        sizes: {
            metric: "РАЗМЕР ПЛЕЕРОВ",
            description: "",
            color: "#c1002a",
        },
        playerSmallDesktop: {
            metric: "PlayerSmallDesktop",
            description: "[0, 480]",
        },
        playerStickyDesktop: {
            metric: "PlayerStickyDesktop",
            description: "[400, 480]",
        },
        playerNormalDesktop: {
            metric: "PlayerNormalDesktop",
            description: "[480, 720]",
        },
        playerBigDesktop: {
            metric: "PlayerBigDesktop",
            description: "[720, 960]",
        },
        playerHugeDesktop: {
            metric: "PlayerHugeDesktop",
            description: "[960, 0]",
        },
        playerSmallMobile: {
            metric: "PlayerSmallMobile",
            description: "[0, 260]",
        },
        playerNormalMobile: {
            metric: "PlayerNormalMobile",
            description: "[260, 320]",
        },
        playerBigMobile: {
            metric: "PlayerBigMobile",
            description: "[320, 380]",
        },
        playerHugeMobile: {
            metric: "PlayerHugeMobile",
            description: "[380, 0]",
        },
        playerFullscreen: {
            metric: "PlayerFullscreen",
            description: "Запуск проигрывания в фулскрине",
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
