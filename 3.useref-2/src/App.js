import React, { useState, useRef } from 'react';

// 함수가 불릴때마다 전체 코드가 초기화돼서 다시 렌더링됨
const App = () => {
  // 화면을 업데이트, 렌더링 시켜줄 state를 추가한다.
  const [renderer, setRenderer] = useState(0);
  // Ref는 아무리 렌더링이 되도 값을 유지한다.(Mount부터 Unmount까지)
  const countRef = useRef(0);

  // 일반변수는 함수가 렌더링 될때마다 계속 0으로 초기화
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref: ', countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log('var: ', countVar);
  };

  // 함수가 블리면 현재 Ref안에 있는 값과 variable, 변수에 있는 값을 출력해준다.
  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  }


  return (
    <div>
      <p>Ref: {countRef.current}</p>      
      <p>Var: {countVar}</p>
      {/* 렌더링 역할 버튼추가 */}
      <button onClick={doRendering}>렌더!!!</button>
      <button onClick={increaseRef}>Ref 올려</button>    
      <button onClick={increaseVar}>Var 올려</button> 
      <button onClick={printResults}>Ref Var 값 출력</button>
    </div>
  );
}

export default App;
