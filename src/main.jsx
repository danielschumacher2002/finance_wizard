import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import NoticePage from "./pages/NoticePage";
import ImpressumPage from "./pages/ImpressumPage";
import PrivacyPage from "./pages/PrivacyPage";
import DatenSchutzPage from "./pages/DatenSchutzPage";
import NotFoundPage from "./pages/NotFoundPage";
import InvestmentPage from "./pages/InvestmentPage";
import HomePage from "./pages/HomePage";
import InflationPage from "./pages/InflationPage";

const router = createBrowserRouter([
  {
    path: "/finance_wizard",
    element: <HomePage></HomePage>,
  },
  {
    path: "/finance_wizard/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/finance_wizard/notice",
    element: <NoticePage></NoticePage>,
  },
  {
    path: "/finance_wizard/impressum",
    element: <ImpressumPage></ImpressumPage>,
  },
  {
    path: "/finance_wizard/privacy",
    element: <PrivacyPage />,
  },
  {
    path: "/finance_wizard/datenschutz",
    element: <DatenSchutzPage></DatenSchutzPage>,
  },
  {
    path: "/finance_wizard/investment",
    element: <InvestmentPage></InvestmentPage>,
  },
  {
    path: "/finance_wizard/inflation",
    element: <InflationPage></InflationPage>,
  },
  {
    path: "/finance_wizard/*",
    element: <NotFoundPage></NotFoundPage>, // NotFound.jsx
  },

  /*
   {
    path: "/inflation",
    element: <></>, // NotFound.jsx
  },
   {
    path: "/credit",
    element: <></>, // NotFound.jsx
  },
  */
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
