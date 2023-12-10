import React, { useEffect } from 'react'

const Timer = (props) => {

	useEffect( () => {
		// 콜백함수가 1초마다 한번씩 반복됨
		const timer = setInterval(() => {
			console.log('타이머가 돌아가는 중입니다...');
		}, 1000);

		// 타이머를 종료한다.
		return () => {
			// clearInterval로 종료시킴
			clearInterval(timer);
			console.log('타이머가 종료되었습니다.');
		};
	}, [] );

	return (
		<div>
			<span>타이머를 시작합니다. 콘솔을 보세요!</span>
		</div>
	)
};

export default Timer;
