import SettingPage from "@/containers/setting/SettingPage";
import { RouteObject } from "react-router-dom";

const settingRouter: RouteObject[] = [
  {
    path: "/setting",
    Component: SettingPage,
  },
];

export default settingRouter;
