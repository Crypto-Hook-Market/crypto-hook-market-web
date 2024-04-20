import SettingPage from "@/containers/setting/SettingPage";
import { RouteObject } from "react-router-dom";

const settingRouter: RouteObject[] = [
  {
    path: "setting",
    element: <SettingPage />,
  },
];

export default settingRouter;
