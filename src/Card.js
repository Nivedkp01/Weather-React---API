import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'; // Import the droplet and wind icons

import './Card.css';

function Card({ city, country, temp, desc, wind, humidity }) {
    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }

    const head = true; // Assuming head is a boolean value

    return (
        <div className='outer'>
            <div className='card'>
                <h4 className={head ? null : 'datee'}>{getCurrentDate()}</h4>
                <h1 className='head'>{city ? city : 'Please Enter A Valid City'} <span>{country}</span></h1>
                <h1 style={{ fontSize: '4rem' }}>{temp} °C</h1>
                <div className='wind'>
                    <h4 style={{ fontSize: '1.5rem' }}>
                        <FontAwesomeIcon icon={faWind} /> {wind} m/s
                    </h4>
                    {desc && <h4 style={{ fontSize: '1.5rem' }}>{desc}</h4>}
                    <h4 style={{ fontSize: '1.5rem' }}>
                        <FontAwesomeIcon icon={faDroplet} /> {humidity} %
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Card;
