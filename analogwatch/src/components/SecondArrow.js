import React from 'react';
import '../styles/secondArrow.css';
import secondArrowImg from '../utils/images/Arrow0.jpg';

function SecondArrow(props) {

    const [currentAngle, setCurrentAngle] = React.useState({
        transform: "rotate(-90deg)",
        transformOrigin: "0 0"
    });

    function handleFullRoundSecArr(curMin) {
        props.fullRoundSecArr(curMin);
    }

    function handleFullRoundMinArr(curHour) {
        props.fullRoundMinArr(curHour);
    }

    React.useEffect(()=> {
        setClockStart(props.clockWork);
    }, [])

    let counterSec = 50;
    let currentMinute = 59;
    let currentHour = 0;

    const rotateArrow = () => {
        counterSec += 1; 
        setCurrentAngle({
            transform: `rotate(${(-90 + counterSec*6)}deg)`,
            transformOrigin: "0 0"
        })
        
        if (counterSec%60 === 0) {
            
            currentMinute += 1; // возможно нужно обнулять при 60 мин
            handleFullRoundSecArr(currentMinute);

            if (currentMinute%60 === 0) {
                currentHour += 1;
                handleFullRoundMinArr(currentHour);
            }
        }
        
        // console.log(counterSec);
        // console.log(currentMinute);
    }

    function setClockStart(clockWork) {
        if (clockWork) { 
            setInterval(rotateArrow, 1000);
        }
    }
   
    return (
        <img src={secondArrowImg} alt="secondArrow" className="secondArrow" style={currentAngle} />
    );
}

export default SecondArrow;