import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import ImpressumPage from "./pages/ImpressumPage";
import DataPrivacy from "./pages/DataPricacyPage";
import DataSchutzPage from "./pages/DatenschutzSeite";

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
