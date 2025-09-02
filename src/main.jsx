import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import ImpressumPage from "./pages/ImpressumPage";
import DataPrivacy from "./pages/DataPricacyPage";
import DataSchutzPage from "./pages/DatenschutzSeite";
import AboutPage from "./pages/AboutPage";
import CompoundInterstPage from "./pages/CompoundInterestPage";
import InflationPage from "./pages/InflationPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
    {
      path: "/",
      element: <></>,
    },
    {
      path: "/legal",
      element: <LegalPage></LegalPage>,
    },
    {
      path: "/impressum",
      element: <ImpressumPage></ImpressumPage>,
    },
    {
      path: "/privacy",
      element: <DataPrivacy></DataPrivacy>,
    },
    {
      path: "/datenschutz",
      element: <DataSchutzPage></DataSchutzPage>,
    },
    {
      path: "/compoundInterest",
      element: <CompoundInterstPage></CompoundInterstPage>,
    },
    {
      path: "/inflation",
      element: <InflationPage></InflationPage>,
    },

    {
      path: "/about",
      element: <AboutPage></AboutPage>,
    },
  ],
  {
    basename: "/finance_wizard/",
  },
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
