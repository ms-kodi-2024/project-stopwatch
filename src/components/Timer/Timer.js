import React from 'react';
import styles from './Timer.module.scss';

const Timer = ({ time }) => {
  const formatTime = (milliseconds) => {
    const ms = milliseconds % 1000;
    const totalSeconds = Math.floor(milliseconds / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(ms).padStart(1, '0')}`;
  };

  return (
    <div className={styles.timer}>
      {formatTime(time)}
    </div>
  );
}

export default Timer;
