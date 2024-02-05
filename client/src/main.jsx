import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import SingleVideo from "./pages/video/SingleVideo.jsx";
import AddVideo from "./pages/add/AddVideo.jsx";
import EditVideo from "./pages/edit/EditVideo.jsx";

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/videos/:videoId",
        element: <SingleVideo />,
      },
      {
        path: "/videos/add",
        element: <AddVideo />,
      },
      {
        path: "/videos/edit/:videoId",
        element: <EditVideo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
