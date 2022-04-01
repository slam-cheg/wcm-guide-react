import React from "react";
import { RedWords } from "../components/redWords";

export const Hint = () => {
    return (
        <div className="hint">
            <p className="hint__text">
                <RedWords prop={"Хитрость"} /> По&nbsp;умолчанию в&nbsp;таблице под графиком отображается не&nbsp;более 10&nbsp;строк с&nbsp;данными.
                Чтобы увидеть больше, в&nbsp;правом нижнем углу под таблицей находим окошко <RedWords prop={"«per page»"} /> и&nbsp;в&nbsp;выпадающем
                списке выбираем значение от&nbsp;10&nbsp;до&nbsp;100
            </p>
        </div>
    );
};
