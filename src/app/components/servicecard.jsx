import React from 'react';
import "./servicecard.css";

const Servicecard = ({ id, icon, service, text }) => {
    return (
        <div className='servicecard bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl'>
            <div className='titlecont'>
                <div className="imagecontainer">
                    <img src={icon} alt="icon" />
                </div>
                <span>{service}</span>
            </div>
            <p>{text}</p>
        </div>
    );
}

export default Servicecard;
