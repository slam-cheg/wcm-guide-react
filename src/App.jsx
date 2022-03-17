import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { HomePage } from "./pages/homepage";
import { WcmStructure } from "./pages/wcm-structure";
import { Campaigns } from "./pages/campaigns/campaigns";
import { CampaignStructure } from "./pages/campaigns/campaign-structure";
import { CampaignReport } from "./pages/campaigns/campaign-report";
import { Reports } from "./pages/reports";
import { CampaignTree } from "./pages/campaign-tree";
import { PeriodMetrics } from "./pages/period-metrics/period-metrics";
import { XlsxReports } from "./pages/xlsx-reports";
import { SetMetrics } from "./pages/period-metrics/set-metrics";
import { SetPeriod } from "./pages/period-metrics/set-period";
import { AuditoriaReport } from "./pages/auditoria-report";
import { Permalinks } from "./pages/permalinks";
import { Metrics } from "./pages/metrics";
import { ViewsReport } from "./pages/views-report";
import { ConversionReport } from "./pages/conversion-report";
import { Automatization } from "./pages/automatization";
import { NotFound } from "./pages/notFound";

function App() {
    return (
        <div className="page page_light">
            <Header />
            <div className="main">
                <Menu />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/wcm-structure" element={<WcmStructure />} />
                    <Route path="/campaigns" element={<Campaigns />} />
                    <Route path="/campaign-structure" element={<CampaignStructure />} />
                    <Route path="/campaign-report" element={<CampaignReport />} />
                    <Route path="/reporting" element={<Reports />} />
                    <Route path="/campaign-tree" element={<CampaignTree />} />
                    <Route path="/settings" element={<PeriodMetrics />} />
                    <Route path="/settings-period" element={<SetPeriod />} />
                    <Route path="/settings-metrics" element={<SetMetrics />} />
                    <Route path="/xlsx-reports" element={<XlsxReports />} />
                    <Route path="/permalinks" element={<Permalinks />} />
                    <Route path="/auditoria-report" element={<AuditoriaReport />} />
                    <Route path="/views-report" element={<ViewsReport />} />
                    <Route path="/conversion-report" element={<ConversionReport />} />
                    <Route path="/metrics" element={<Metrics />} />
                    <Route path="/automatization" element={<Automatization />} />
                    <Route path="/not-found" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
