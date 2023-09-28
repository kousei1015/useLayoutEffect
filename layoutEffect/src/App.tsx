import React, { useState, useLayoutEffect, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(999);

  // こちらの方は最初から画面内に0が表示される
  useLayoutEffect(() => {
    setCount(0);
  }, []);

  // こちらの方は画面に999という数値が表示された後に、0になる
  // useEffect(() => {
  //   setCount(0);
  // }, []);

  
  
  return <div>{count}</div>;
};

export default App;
