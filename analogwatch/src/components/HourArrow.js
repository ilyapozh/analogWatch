import React from 'react';
import '../styles/hourArrow.css';
import secondArrowImg from '../utils/images/Arrow0.jpg';

function HourArrow(props) {

    const [currentAngle, setCurrentAngle] = React.useState({
        transform: "rotate(-90deg)",
        transformOrigin: "0 0"
    });

    React.useEffect(() => {
        setCurrentAngle({
            transform: `rotate(${(-90 + props.hours*6*5)}deg)`,
            transformOrigin: "0 0"
        })
    }, [props.hours])
   
    return (
        <img src={secondArrowImg} alt="hourArrow" className="hourArrow" style={currentAngle} />
    );
}

export default HourArrow;