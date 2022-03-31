import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

if (document.querySelector(".section") === null) {
    window.location.replace("/not-found")
}