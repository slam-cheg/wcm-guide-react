import React, { useEffect } from "react";
import { RedWords } from "../components/redWords";

export const Hint = () => {
    useEffect(() => {
        const hint = document.querySelector(".hint");
        const hintBtn = document.querySelector(".hint__button");
        hintBtn.addEventListener("click", () => {
            hint.classList.remove("hint_visible");
        });
        setTimeout(() => {
            hint.classList.add("hint_visible");
        }, 3000);
    });
    return (
        <div className="hint">
            <div className="hint__btn-wrapper">
                <button className="hint__button">&times;</button>
            </div>
            <p className="hint__text">
                <RedWords prop={"Хитрость"} />:<br /> По&nbsp;умолчанию в&nbsp;таблице под графиком отображается не&nbsp;более 10&nbsp;строк
                с&nbsp;данными. Чтобы увидеть больше, в&nbsp;правом нижнем углу под таблицей находим окошко <RedWords prop={"«per page»"} />{" "}
                и&nbsp;в&nbsp;выпадающем списке выбираем значение от&nbsp;10&nbsp;до&nbsp;100
            </p>
        </div>
    );
};
