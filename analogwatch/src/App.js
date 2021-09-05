import React from 'react';
import SecondArrow from './components/SecondArrow';
import MinuteArrow from './components/MinuteArrow';
import './App.css';
import HourArrow from './components/HourArrow';

function App() {
  
  const [clockForward, setClockForward] = React.useState(true);

  const [seconds, setSeconds] = React.useState(50);

  const [minutes, setMinutes] = React.useState(59);

  const [hours, setHours] = React.useState(11);

  const [currentTime, setCurrentTime ] = React.useState('00:00:00');

  React.useEffect(()=> {
    setClockStart(clockForward);
  }, [])

  function rotateSecondArrow() {
    setClockForward(false)
  }

  function handleFullRoundSecArr(curMin) {
    setMinutes(curMin);
  }

  function handleFullRoundMinArr(curHour) {
    setHours(curHour*5)
  }

  function setClockStart(clockWork) {
    if (clockWork) { 
        setInterval(rotateArrow, 1000);
    }
  }

  let counterSec = 50;
  let currentMinute = 59;
  let currentHour = 11;

  const rotateArrow = () => {
    counterSec += 1; 
    setSeconds(counterSec);
    
    if (counterSec%60 === 0) {
        counterSec = 0;
        currentMinute += 1; // возможно нужно обнулять при 60 мин
        handleFullRoundSecArr(currentMinute);

        if (currentMinute%60 === 0) {
            currentMinute = 0;
            setMinutes(currentMinute)
            currentHour += 1;
            handleFullRoundMinArr(currentHour);
            if (currentHour === 12) {
              currentHour = 0;
              setHours(currentHour)
            }  
        }
    }
    
    console.log(currentHour+':'+currentMinute+':'+counterSec);
    console.log();
    
}

  function showCurrentTime() {
    setCurrentTime(`${hours}:${minutes}:${seconds}`)
  }

  return (
    <div className="page">
      <SecondArrow seconds={seconds} />
      <MinuteArrow  minutes={minutes} />
      <HourArrow hours={hours} />
      <button className="button" onClick={rotateSecondArrow}>Время вперед/назад</button>
      <button className="button-change-time" onClick={showCurrentTime}>Показать текущее</button>
      <p className="current-time">{currentTime}</p>
    </div>
  );
}

export default App;
