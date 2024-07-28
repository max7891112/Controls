import { Routes, Route } from "react-router-dom";
import { App } from "../components/App/App";
import { Month } from "../pages/Month/Month";
import { ErrorPage } from "../pages/Error/Error";
import { createContext } from "react";
import { useAppSelector } from "./store/hooks";
export const ProviderRouter = () => {
  const stateContext = createContext({});
  const month = useAppSelector((state) => state.month);
  return (
    <>
      {/* <stateContext.Provider value={month}> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/month" element={<Month />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* </stateContext.Provider> */}
    </>
  );
};
