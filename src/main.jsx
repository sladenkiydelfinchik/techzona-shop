import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "./components/MainPage";
import { basePath } from "./shared/BasePath";
import "./shared/styles/reset.css";
import "./shared/styles/static.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: `${basePath}/`,
    element: <MainPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
