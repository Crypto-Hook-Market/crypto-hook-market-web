import LoginPage from "@/containers/user/LoginPage";
import RedirectionPage from "@/containers/user/RedirectionPage";
import RegisterPage from "@/containers/user/RegisterPage";
import { RouteObject } from "react-router-dom";

const userRouter: RouteObject[] = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "redirection",
    element: <RedirectionPage />,
  },
];

export default userRouter;
