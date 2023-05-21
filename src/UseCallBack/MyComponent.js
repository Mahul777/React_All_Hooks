import React, { useState, useCallback } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // memoize increment function using useCallback
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default MyComponent;