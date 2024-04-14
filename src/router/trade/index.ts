import TradePage from "@/containers/trade/TradePage";
import { RouteObject } from "react-router-dom";

const tradeRouter: RouteObject[] = [
  {
    path: "/trade",
    Component: TradePage,
  },
];

export default tradeRouter;
