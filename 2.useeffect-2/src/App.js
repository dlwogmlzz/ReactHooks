import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      {/* onClick으로 Toggle Timer 버튼이 클릭될때마다 true false로 바뀌는 기능*/}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;
