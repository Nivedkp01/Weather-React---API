import React, { useEffect, useState } from 'react';
import Search from './Search';
import Card from './Card';

function Weather() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const apiKey = '';

    async function fetchWeatherData(search) {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${search}&appid=e003d3d64f5d0d46f9f88f2ba32ee386`);
            const result = await res.json();
            console.log(result);
            setData(result);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchWeatherData('mumbai');
    }, []);

    function handleClick() {
        fetchWeatherData(search);
        setSearch('');
    }

    return (
        <div>
            <Search search={search} setSearch={setSearch} handleClick={handleClick} />
            {!(data.weather && data.weather.length > 0 )?<h1>Please Enter A Valid City</h1>: (
                <Card city={data.name} country={data?.sys?.country} temp={data?.main?.temp} desc={data.weather[0].description} wind={data.wind.speed} humidity={data.main.humidity} />
            )}
        </div>
    );
}

export default Weather;
