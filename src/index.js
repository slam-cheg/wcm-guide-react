import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

if (document.querySelector(".section") === null) {
    window.location.replace("/not-found")
}

if (document.location.pathname === "/wcm-structure") {
    document.querySelector("#page").style.overflow = "hidden";
}