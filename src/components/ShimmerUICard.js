import React from "react";

const ShimmerUICard = () => {
  return (
    <div className="flex flex-col h-[289px] w-80">
      <span className="rounded-2xl h-[180px] w-[320px] bg-gray-200"></span>
      <span className="flex items-start mt-3 w-full">
        <div className="flex w-10 ">
          <span className="w-9 h-9 mt-1 rounded-full bg-gray-200"></span>
        </div>

        <span className="ml-2 flex flex-col rounded-sm">
          <span className="h-5 rounded-sm w-[240px] bg-gray-200"></span>
          <span className="mt-2 h-5 rounded-sm w-[150px] bg-gray-200"></span>
        </span>
      </span>
    </div>
  );
};

export default ShimmerUICard;
