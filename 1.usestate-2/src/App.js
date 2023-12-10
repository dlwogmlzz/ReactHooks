import { useState } from 'react';

const heavyWork = () => {
  // 밑의 useState의 초기값을 받아온다. 매번 렌더링 될때마다 불려지기 때문에 비효율적이다.
  console.log('진짜 무거운 작업시, 렌더링 되면 매번 초기값이 출력되기 때문에 함수를 만들어준다.');
  return ['이원우', '이재희'];
}

function App() {
  // input에 넣을 이름을 설정, 렌더링 될때마다 useState안의 값이 출력되기 때문에 안좋음!!!!
  // 그래서 useState에 초기값이 아니라 콜백함수 처리 한다.
  // 함수를 넣어줄때 함수명()을 넣어준다.
  const [names, setNames] = useState(() => {
    // 이렇게 하면 렌더링때 한번만 처리 된다.
    return heavyWork();
  });

  // input안에 무슨 값이 들어있는지 알려주기 위한 state.
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    // e.target.value는 input태그의 value를 의미한다.
    // 사용자가 입력한 값을 넣어주고
    setInput(e.target.value);
  };


  // 버튼클릭, 업로드 처리 함수
  const handleUpload = () => {
    // 새로 업데이트 시킬 값을 콜백함수로 전달하고, return 을 넣어준다.
    setNames((prevState) => {
      // return 값이 새로 전달해줄 state가된다.
      // 'prevState를' 이용해서 이전 값을 담아준다.
      console.log('이전 state: ', prevState);
      return([input, ...prevState]);
    });
  };

  // input state가 사용자의 입력을 받을때마다 어떻게 업데이트 되는지 console.log로 확인한다.
  console.log(input);

  return (
    <div>
      {/* 사용자가 입력할때마다 핸들링해줄 함수를 호출할수 있도록 onChange를 만들어준다. */}
      <input type="text" value={input} onChange={handleInputChange} /> 
      {/* 버튼을 눌러줌으로써 input에 입력한 값이 들어가 있다.  */}
      <button onClick={handleUpload}>Upload</button>
      {/* map으로 names배열을 돌면서 아이템하나하나 마다 p태그를 넣어줌 */}
      { names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
