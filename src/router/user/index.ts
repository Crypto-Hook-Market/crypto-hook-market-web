import LoginPage from "@/containers/user/LoginPage";
import RegisterPage from "@/containers/user/RegisterPage";
import { RouteObject } from "react-router-dom";

const userRouter: RouteObject[] = [
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
];

export default userRouter;
