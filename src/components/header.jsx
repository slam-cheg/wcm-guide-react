import React from "react";
import logo from "../images/logo.png";

export const Header = () => {
    return (
        <header className="header">
            <HeaderLogoWrapper />
            <HeaderTitleWrapper />
        </header>
    );
};

const HeaderLogoWrapper = () => {
    return (
        <div className="header__logo-wrapper">
            <Logo />
        </div>
    );
};

const Logo = () => {
    return (
        <a href="/" className="header__logo-wrapper">
            <img className="header__logo" src={logo} alt="Weborama" />
        </a>
    );
};

const HeaderTitleWrapper = () => {
    return (
        <div className="header__title-wrapper">
            <p className="header__title">Weborama campaign manager</p>
            <p className="header__description">AD serving solution</p>
        </div>
    );
};
