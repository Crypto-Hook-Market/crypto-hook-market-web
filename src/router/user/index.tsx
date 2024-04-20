import LoginPage from "@/containers/user/LoginPage";
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
];

export default userRouter;
