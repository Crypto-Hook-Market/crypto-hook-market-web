import LogPage from "@/containers/log/LogPage";
import { RouteObject } from "react-router-dom";

const logRouter: RouteObject[] = [
  {
    path: "/log",
    Component: LogPage,
  },
];

export default logRouter;
