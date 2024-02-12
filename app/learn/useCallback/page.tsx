"use client";
import List from "@/app/components/List";
import { useCallback, useMemo, useState } from "react";

const Page = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
const getItemsWithUseCallback = useCallback(() => {
  return [number, number + 1, number + 2];
}, [number]); // useCallback caches the function

  const getItemsWithUseMemo = useMemo(() => {
    return [number, number + 1, number + 2];
  }, [number]); // useMemo caches the result of the function
  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  return (
    <div style={theme}>
      <input
        className="border-[1px] m-2 p-2"
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button
        className="bg-rose-500 text-white p-2 rounded-md hover:bg-rose-600 transition m-2"
        onClick={() => setDark((prev) => !prev)}>
        Toggle Theme
      </button>
      {/* <List getItems={getItemsWithUseMemo} /> The error message indicates that you're trying to pass a value of type number[] to a prop getItems that is expected to be of type () => number[]. */}
      <List getItems={getItemsWithUseCallback} />
    </div>
  );
};

export default Page;
