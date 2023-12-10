import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);
  // 올려버튼을 눌렀을때 화면이 몇번 렌더링 되었는지 알기
  // const [renderCount, setRenderCount] = useState(1);
  const renderCount = useRef(0);

  // 끊임없는 렌더링 무한 에러에 빠진다...
  // useEffect(() => {
  //   console.log('렌더링!!!');
  //   setRenderCount(renderCount + 1);
  // });

  // useRef로 에러를 없앰.
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log('렌더링 수: ', renderCount.current);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
}

export default App;
