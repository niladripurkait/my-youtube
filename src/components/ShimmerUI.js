import React from "react";
import ShimmerUICard from "./ShimmerUICard";

const ShimmerUI = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(8)
        .fill("")
        .map((e, i) => (
          <div key={i} className="h-[289px] m-[9px] mb-8">
            <ShimmerUICard />
          </div>
        ))}
    </div>
  );
};

export default ShimmerUI;
