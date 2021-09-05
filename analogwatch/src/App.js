import React from 'react';
import SecondArrow from './components/SecondArrow';
import MinuteArrow from './components/MinuteArrow';
import './App.css';
import HourArrow from './components/HourArrow';

function App() {
  
  const [clockForward, setClockForward] = React.useState(true);

  const [minutes, setMinutes] = React.useState(59);

  const [hours, setHours] = React.useState(5*11);

  const [currentTime, setCurrentTime ] = React.useState('00:00:00');

  function rotateSecondArrow() {
    setClockForward(false)
  }

  function handleFullRoundSecArr(curMin) {
    setMinutes(curMin);
  }

  function handleFullRoundMinArr(curHour) {
    setHours(curHour*5)
  }

  function showCurrentTime() {
    // console.log(hours);
    // console.log(minute);
    // console.log(sec);
  }

  return (
    <div className="page">
      <SecondArrow clockWork={clockForward} fullRoundSecArr={handleFullRoundSecArr} fullRoundMinArr={handleFullRoundMinArr} />
      <MinuteArrow  minutes={minutes} />
      <HourArrow hours={hours} />
      <button className="button" onClick={rotateSecondArrow}>Время вперед/назад</button>
      <button className="button-change-time" onClick={showCurrentTime}>Показать текущее</button>
      <p className="current-time">{currentTime}</p>
    </div>
  );
}

export default App;
