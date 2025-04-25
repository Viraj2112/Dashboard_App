import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page.jsx";
import LoginPage from "./routes/LoginPage";

import "./index.css";
import SignupPage from "./routes/SignupPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wraps all routes with ThemeProvider
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <DashboardPage />,
          },

          {
            path: "/activity",
            element: <h1 className="title">Activity</h1>,
          },
          {
            path: "/library",
            element: <h1 className="title">Library</h1>,
          },
          {
            path: "/security",
            element: <h1 className="title">Security</h1>,
          },
          {
            path: "/schedules",
            element: <h1 className="title">Schedules</h1>,
          },
          {
            path: "/payouts",
            element: <h1 className="title">Payouts</h1>,
          },
          {
            path: "/settings",
            element: <h1 className="title">Settings</h1>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
