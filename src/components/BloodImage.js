import React from 'react';
import imgBlood from '../images/blood.png';

const BloodImage = () => {
    return (
        <div className="container">
            <div className="blood" style={{ backgroundImage: `url(${imgBlood})` }} />
        </div>
    );
};

export default BloodImage;
