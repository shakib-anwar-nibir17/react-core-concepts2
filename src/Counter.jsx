import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const reduceValue = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div style={{ border: "2px solid green", margin: "10px 10px" }}>
      <h3>Counter: {count}</h3>
      <button onClick={add}>Add</button>
      <button onClick={reduceValue}>Reduce</button>
    </div>
  );
}
