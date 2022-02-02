import React from "react";
import logo from "../images/logo.png";

function Header() {
    return (
        <header className="header">
            <HeaderLogoWrapper />
            <HeaderTitleWrapper />
        </header>
    );
}

function HeaderLogoWrapper() {
    return (
        <div className="header__logo-wrapper">
            <Logo />
        </div>
    );
}

function Logo() {
    return (
        <a href="/wcm-guide-react" className="header__logo-wrapper">
            <img className="header__logo" src={logo} alt="Weborama" />
        </a>
    );
}

function HeaderTitleWrapper() {
    return (
        <div className="header__title-wrapper">
            <p className="header__title">Weborama campaign manager</p>
            <p className="header__description">AD serving solution</p>
        </div>
    );
}

export default Header;
