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
import { AvailableReports } from "./pages/available-reports/available-reports";
import { AuditoriaOverlapping } from "./pages/available-reports/auditoria-overlapping";
import { Permalinks } from "./pages/permalinks";
import { Metrics } from "./pages/metrics";
import { FriquencyReport } from "./pages/available-reports/friquency-report";
import { TechnologyReport } from "./pages/available-reports/technology-report";
import { AuditoriaReport } from "./pages/available-reports/auditoria-report";
import { GeoReport } from "./pages/available-reports/geo-report";
import { ConversionReport } from "./pages/conversion-report/conversion-report";
import { Conversions } from "./pages/conversion-report/conversions";
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
                    <Route path="/available-reports" element={<AvailableReports />} />
                    <Route path="/auditoria-overlapping" element={<AuditoriaOverlapping />} />
                    <Route path="/friquency-report" element={<FriquencyReport />} />
                    <Route path="/technology-report" element={<TechnologyReport />} />
                    <Route path="/auditoria-report" element={<AuditoriaReport />} />
                    <Route path="/geo-report" element={<GeoReport />} />
                    <Route path="/conversion-report" element={<ConversionReport />} />
                    <Route path="/conversions" element={<Conversions />} />
                    <Route path="/metrics" element={<Metrics />} />
                    <Route path="/automatization" element={<Automatization />} />
                    <Route path="/not-found" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
