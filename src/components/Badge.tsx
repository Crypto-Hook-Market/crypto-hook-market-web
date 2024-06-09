import { useEffect, useState } from "react";

const Badge = ({
  type,
  percent,
}: {
  type?: "up" | "down";
  percent: number;
}) => {
  const [colorClass, setColorClass] = useState("per total");
  const [arrow, setArrow] = useState<string | undefined>();

  useEffect(() => {
    if (type === "up") {
      setColorClass("per up");
      setArrow("@/assets/images/ico_arr_up.png");
    } else if (type === "down") {
      setColorClass("per down");
      setArrow("@/assets/images/ico_arr_down.png");
    }
  }, [type]);

  return (
    <span className={colorClass}>
      <img src={arrow} alt="" />
      {percent}%
    </span>
  );
};

export default Badge;
