import React from 'react';
import '../styles/minuteArrow.css';
import secondArrowImg from '../utils/images/Arrow0.jpg';

function MinuteArrow(props) {

    const [currentAngle, setCurrentAngle] = React.useState({
        transform: "rotate(-90deg)",
        transformOrigin: "0 0"
    });

    React.useEffect(() => {
        setCurrentAngle({
            transform: `rotate(${(-90 + props.minutes*6)}deg)`,
            transformOrigin: "0 0"
        })
    }, [props.minutes])
   
    return (
        <img src={secondArrowImg} alt="minuteArrow" className="minuteArrow" style={currentAngle} />
    );
}

export default MinuteArrow;