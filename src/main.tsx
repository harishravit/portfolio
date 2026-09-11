import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import BlogPage from "./pages/Blog.tsx";
import HomePage from "./pages/HomePage.tsx";
import JourneyPage from "./pages/JourneyPage.tsx";
import ProjectOverview from "./pages/ProjectOverviewPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
const routes = createBrowserRouter(
  [
    // { path: "/", Component: FlashScreenPage },
    {
      element: <App />,
      children: [
        { path: "/", Component: HomePage },
        { path: "/Home", Component: HomePage },
        {
          path: "/projects",
          Component: ProjectsPage,
        },
        {
          path: "project-overview/:content",
          Component: ProjectOverview,
        },
        {
          path: "/journey",
          Component: JourneyPage,
        },
        {
          path: "/blog",
          Component: BlogPage,
        },
      ],
    },
  ],
  { basename: "/portfolio" },
);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routes} />,
);
