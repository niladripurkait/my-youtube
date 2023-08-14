import React from "react";

const Button = ({ name, clicked, index }) => {
  return (
    <>
      <div
        className={`h-8 w-auto mx-2 px-3 flex whitespace-nowrap justify-center items-center rounded-lg text-sm    cursor-pointer bg-gray-100  ${
          clicked === index
            ? "bg-gray-950 text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        {name}
      </div>
    </>
  );
};

export default Button;
