import MainPage from "@/containers/main/MainPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
  },
]);

export default router;
