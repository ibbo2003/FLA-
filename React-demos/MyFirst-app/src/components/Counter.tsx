import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="primary m-3">Counter App</h1>
      <h3>count : {count}</h3>
      <button
        className="btn btn-primary m-3"
        onClick={() =>
          count < 100 ? setCount(count + 1) : console.log("cannot exceed 100")
        }
      >
        increment
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={() =>
          count == 0
            ? console.log("cannot decrement below 0 ")
            : setCount(count - 1)
        }
      >
        decrement
      </button>
    </>
  );
}
export default Counter;
