import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import MainPage from "@/containers/main/MainPage";
import userRouter from "@/router/user";
import tradeRouter from "@/router/trade";
import strategyRouter from "@/router/strategy";
import logRouter from "@/router/log";
import settingRouter from "@/router/setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      ...userRouter,
      ...tradeRouter,
      ...strategyRouter,
      ...logRouter,
      ...settingRouter,
    ],
  },
]);

export default router;
