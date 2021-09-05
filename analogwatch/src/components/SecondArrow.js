import React from 'react';
import '../styles/secondArrow.css';
import secondArrowImg from '../utils/images/Arrow0.jpg';

function SecondArrow(props) {

    const [currentAngle, setCurrentAngle] = React.useState({
        transform: "rotate(-90deg)",
        transformOrigin: "0 0"
    });

    React.useEffect(() => {
        setCurrentAngle({
            transform: `rotate(${(-90 + props.seconds*6)}deg)`,
            transformOrigin: "0 0"
        })
    }, [props.seconds])

      
    return (
        <img src={secondArrowImg} alt="secondArrow" className="secondArrow" style={currentAngle} />
    );
}

export default SecondArrow;