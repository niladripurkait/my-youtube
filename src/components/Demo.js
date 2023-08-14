import React, { useMemo, useState } from "react";
import { prime } from "../utils/helper";

const Demo = () => {
  const [number, setNumber] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  console.log("Rendering...");

  const nth_prime = useMemo(() => {
    console.log("Calculating n-th prime...");
    return prime(number);
  }, [number]);

  console.log(darkMode);
  return (
    <>
      <div
        className={
          "p-2 m-2 border border-black w-96 h-96 flex flex-col " +
          (darkMode && "bg-gray-600")
        }
      >
        <div>
          <input
            type="number"
            className="border border-black w-full h-5"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <span className="font-bold w-full h-5">N-th Prime : {nth_prime}</span>
        </div>
        <div>
          <button
            className="bg-green-200 w-full h-10"
            onClick={() => setDarkMode(!darkMode)}
          >
            Toggle
          </button>
        </div>
      </div>
    </>
  );
};

export default Demo;
