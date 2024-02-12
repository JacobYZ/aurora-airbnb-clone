"use client";
import { useState, useMemo, use, useEffect } from "react";
function slowFunction(num: number) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

const Page = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]); // useMemo caches the result of slowFunction
  const theme = useMemo(
    () => ({
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    }),
    [dark]
  ); // useMemo caches the result of the theme object
  useEffect(() => {
    console.log("Theme changed");
  }, [theme]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button
        className="bg-rose-500 text-white p-2 rounded-md hover:bg-rose-600 transition m-2"
        onClick={() => setDark((prev) => !prev)}>
        Change Theme
      </button>
      <div style={theme}>{doubleNumber}</div>
    </>
  );
};

export default Page;
