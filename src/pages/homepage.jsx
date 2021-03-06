import React, { useEffect } from "react";
import homescreen from "../images/homescreen.jpg";

export const HomePage = () => {
    useEffect(() => {
        overflowHidden();
    });
    return (
        <div className="content__wrapper" style={{ width: `calc(100% - 300px)` }}>
            <section className="section home-screen" style={{ width: `calc(100vw - 300px)` }}>
                <img className="home-screen__image" src={homescreen} alt="Главная страница" style={{ maxWidth: `calc(100vw - 300px)` }} />
            </section>
        </div>
    );
};

const overflowHidden = () => {
    const page = document.getElementById("page");
    page.style.overflow = "hidden";
};
