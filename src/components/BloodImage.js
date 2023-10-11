import React from 'react';
import imgBlood from '../images/blood.png'; // Reemplaza con la ruta correcta de tu imagen

const BloodImage = () => {
    return (
        <div className="container">
            <div className="blood" style={{ backgroundImage: `url(${imgBlood})` }} />
        </div>
    );
};

export default BloodImage;
