import { StrictMode} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
  },
  {
    path: "/",
    element: <></>,
  },
  {
    path: "/",
    element: <></>,
  },
  {
    path: "/",
    element: <></>,
  },
  {
    path: "*",
    element: <></>, // NotFound.jsx
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
