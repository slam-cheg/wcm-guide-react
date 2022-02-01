import Header from "./components/header";
import Menu from "./components/menu";
import HomePage from "./pages/homepage";
import WcmStructure from "./pages/wcm-structure";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { additionalURL } from "./components/menu";

function App() {
    return (
        <div className="page page__light">
            <Header />
            <main className="content">
                <Router>
                    <Menu />
                    <Routes>
                        <Route exact path={"/"} element={<HomePage />} />
                        <Route path={"/wcm-structure"} element={<WcmStructure />} />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
