import { useState } from 'react';

function App() {

  // 시간을 나타내는 컴포넌트
  const [time, setTime] = useState(1);

  // 버튼 클릭으로 시간을 올리는 함수
  const handleClick = () => {
    // 조금더 시계 다운 기능 추가
    let newTime;
    // time이 12시가 되거나 12시보다 높아지면(13시가 되면) newTime에 1을 넣어주고, 13시 시점에 1로 바뀌게 만듦
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    // 여기서 setTime으로 newTime(time + 1)을 넣어주면서 시간을 출력함.
    setTime(newTime);
  }

  console.log('업데이트');
  
  return (
    <div>
      <span>현재 시각: {time}시 </span>
      {/* 버튼을 누를때 마다 화면이 렌더링 된다. */}
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
