import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NoticePage from "./pages/NoticePage";
import ImpressumPage from "./pages/ImpressumPage";
import PrivacyPage from "./pages/PrivacyPage";
import DatenSchutzPage from "./pages/DatenSchutzPage";
import NotFoundPage from "./pages/NotFoundPage";
import InvestmentPage from "./pages/InvestmentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/notice",
    element: <NoticePage></NoticePage>,
  },
  {
    path: "/impressum",
    element: <ImpressumPage></ImpressumPage>,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
  {
    path: "/datenschutz",
    element: <DatenSchutzPage></DatenSchutzPage>,
  },
  {
    path: "/*",
    element: <NotFoundPage></NotFoundPage>, // NotFound.jsx
  },
  {
    path: "/investment",
    element: <InvestmentPage></InvestmentPage>, // NotFound.jsx
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
