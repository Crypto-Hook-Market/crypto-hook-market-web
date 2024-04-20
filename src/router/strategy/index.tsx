import StrategyPage from "@/containers/strategy/StrategyPage";
import { RouteObject } from "react-router-dom";

const strategyRouter: RouteObject[] = [
  {
    path: "strategy",
    element: <StrategyPage />,
  },
];

export default strategyRouter;
