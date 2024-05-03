const apiKey = 'e003d3d64f5d0d46f9f88f2ba32ee386';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);