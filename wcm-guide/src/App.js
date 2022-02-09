import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import HomePage from "./pages/homepage";
import WcmStructure from "./pages/wcm-structure";
import Campaigns from "./pages/campaigns";
import CampaignStructure from "./pages/campaign-structure";
import CampaignReport from "./pages/campaign-report";
import Reports from "./pages/reports";
import CampaignTree from "./pages/campaign-tree";
import PeriodMetrics from "./pages/period-metrics";

function App() {
    return (
        <div className="page page_light">
            <Header />
            <main className="main">
                <Router>
                    <Menu />
                    <Routes>
                        <Route exact path="/wcm-guide-react" element={<HomePage />} />
                        <Route path="/wcm-guide-react/wcm-structure" element={<WcmStructure />} />
                        <Route path="/wcm-guide-react/campaigns" element={<Campaigns />} />
                        <Route path="/wcm-guide-react/campaign-structure" element={<CampaignStructure />} />
                        <Route path="/wcm-guide-react/campaign-report" element={<CampaignReport />} />
                        <Route path="/wcm-guide-react/reporting" element={<Reports />} />
                        <Route path="/wcm-guide-react/campaign-tree" element={<CampaignTree />} />
                        <Route path="/wcm-guide-react/settings" element={<PeriodMetrics />} />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
