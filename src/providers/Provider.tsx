import { Routes, Route } from "react-router-dom";
import { App } from "../components/App/App";
import { Month } from "../pages/Month/Month";
import { ErrorPage } from "../pages/Error/Error";
import { Year } from "../pages/Year/Year";
import { Life } from "../pages/Life/Life";
export const ProviderRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/month" element={<Month />} />
        <Route path="/year" element={<Year />} />
        <Route path="/life" element={<Life />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
