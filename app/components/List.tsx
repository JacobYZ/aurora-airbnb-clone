import { useEffect, useState } from "react";

interface ListProps {
  getItems: () => number[]; // adjust the return type based on your actual data
}

const List: React.FC<ListProps> = ({ getItems }) => {
  const [items, setItems] = useState<number[]>([]);
  useEffect(() => {
    setItems(getItems());
    console.log("updating items");
  }, [getItems]);
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
};

export default List;
