import Header from "./components/header";
import Menu from "./components/menu";
import HomePage from "./pages/homepage";
import WcmStructure from "./pages/wcm-structure";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="page page__light">
            <Header />
            <main className="content">
                <Router>
                    <Menu />
                    <Routes>
                        <Route exact path="/wcm-guide-react" element={<HomePage />} />
                        <Route path="/wcm-guide-react/wcm-structure" element={<WcmStructure />} />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
