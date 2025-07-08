import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import SinopsisPage from './pages/SinopsisPage';
import DashboardPage from './pages/DashboardPage';
import PuzzlePage from './pages/PuzzlePage';
import MissionPage from './pages/MissionPage';
import ResultPage from './pages/ResultPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sinopsis" element={<SinopsisPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/puzzle/:missionId" element={<PuzzlePage />} />
      <Route path="/mission/:missionId" element={<MissionPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};

export default AppRoutes;
