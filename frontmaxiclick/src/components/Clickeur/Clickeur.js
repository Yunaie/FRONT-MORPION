import React, { useState } from 'react';
import Circle from "../../assets/blackCircle.png";
import "./Clickeur.css";

function Clickeur({ width, style }) {
    const [life, setLife] = useState(0);
    const handleClick = () => setLife(life + 1);

    const clickeurStyle = {
        width: width,
        height: 'auto',
        ...style,
    };

    return (
        <div  onClick={handleClick}>
            <img style={clickeurStyle} src={Circle} alt='clickeur' />
            {life}
        </div>
    );
}

export default Clickeur;
