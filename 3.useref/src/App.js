import React, { useState, useRef } from 'react';

const App = () => { // function App()이랑 똑같음
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log('🌝 state 렌더링...');

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    // Ref안의 값에 접근하려면 countRef.current로 접근하면 된다.
    console.log('Ref: ', countRef.current);
  };

  return (
    <div>
      <p>State: {count}</p>
      
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>      
    </div>
  );
}

export default App;
