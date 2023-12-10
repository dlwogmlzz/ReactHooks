import React, { useEffect,useRef } from 'react';

function App() {
  // 화면이 렌더링 뙜을때 input창에 자동으로 focus되게 하기
  // inputRef안에 input엘리먼트가 들어가야하기 때문에 초기값을 빈칸으로 만듦
  const InputRef = useRef();

  useEffect(() => {
    // console.log(InputRef);
    // 렌더링후, input자동 포커스
    InputRef.current.focus();
  }, []);
  
  const login = () => {
    alert(`환영합니다. ${InputRef.current.value}`)
    // 입력한 값 출력후, 다시 input 포커스하기
    InputRef.current.focus();
  }

  return (
    <div>
      <input ref={InputRef} type="text" placeholder="username" />
      {/* 로그인 버튼을 누르면 팝업으로 input에서 입력한 값 출력 */}
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default App;
