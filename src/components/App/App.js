import React, { useState, useEffect } from 'react';
import Timer from '../Timer/Timer.js';
import styles from './App.module.scss';
  
const App = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  useEffect(() => {
    return () => stopTimer();
  }, []);

  return (
		<div className={styles.container}>
			<Timer time={time} />
			<div>
				<button className={styles.button} onClick={startTimer}>Start</button>
				<button className={styles.button} onClick={stopTimer}>Stop</button>
				<button className={styles.button} onClick={resetTimer}>Reset</button>
			</div>
		</div>
	);
};

export default App;
