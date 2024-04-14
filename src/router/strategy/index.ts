import StrategyPage from "@/containers/strategy/StrategyPage";
import { RouteObject } from "react-router-dom";

const strategyRouter: RouteObject[] = [
  {
    path: "/strategy",
    Component: StrategyPage,
  },
];

export default strategyRouter;
