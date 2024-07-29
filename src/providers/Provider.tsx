import { Routes, Route } from "react-router-dom";
import { App } from "../components/App/App";
import { Month } from "../pages/Month/Month";
import { ErrorPage } from "../pages/Error/Error";
export const ProviderRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/month" element={<Month />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
