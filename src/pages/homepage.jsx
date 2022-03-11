import React from "react";
import homescreen from "../images/homescreen.jpg";

export const HomePage = () => {
    return (
        <div className="content__wrapper">
            <section className="section home-screen">
                <img className="home-screen__image" src={homescreen} alt="Главная страница" />
            </section>
        </div>
    );
};
