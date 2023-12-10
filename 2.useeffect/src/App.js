import React, { useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountupdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // // 렌더링 될때마다 매번 실행됨 - 렌더링 이후
  // useEffect( () => {
  //   // ...
  //   console.log('렌더링!!✨');
  // } );

  // // 마운팅 + count가 변경될때만 실행.
  // useEffect( () => {
  //   // ...
  //   console.log('count변화, 렌더링!!✨');
  // }, [count]);

  // // 마운팅 + name이 변경될때만 실행.
  // useEffect( () => {
  //   // ...
  //   console.log('name변화, 렌더링!!✨');
  // }, [name]);

  useEffect( () => {
    // 이안의 코드는 맨처음 마운팅, 렌더링 될때만 실행된다.
    console.log('마운팅 🌍');
  }, []);

  return (
    <div>
      <button onClick={handleCountupdate}>Update</button>
      <span>count: {count} </span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}

export default App;
