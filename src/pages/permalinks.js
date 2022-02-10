import React from "react";
import permalink from "../images/permalink.png";

function Permalinks() {
    return (
        <div className="section__wrapper">
            <section className="section section__not-homepage" id="permalinks">
                <div className="section-heading">
                    <h1 className="section-heading__title">Формирование гостевых ссылок</h1>
                </div>
                <div className="section__content">
                    <p className="section__lead">
                        Для формирования гостевой ссылки необходимо предварительно настроить{" "}
                        <a className="section__lead_color" href="/campaign-tree">
                            нужный раздел данных
                        </a>{" "}
                        и&nbsp;вывести набор метрик в&nbsp;интерфейс. Затем&nbsp;&mdash; нажать на&nbsp;кнопку <span className="section__lead_color">Permalink</span>.
                        Инструмент сгенерирует гостевую ссылку&nbsp;&mdash; при переходе по&nbsp;ней можно менять только период отображения данных, функционал выбора
                        метрик, перехода в&nbsp;другие разделы данных при такой форме доступа к&nbsp;статистике невозможен.
                    </p>
                </div>
                <img className="section__image" src={permalink} alt="структура кампании" />
            </section>
        </div>
    );
}

export default Permalinks;
