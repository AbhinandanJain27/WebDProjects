const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', ()=>{

    const APIKey = 'ebe7bb6dcdaf31397bc610f630462533';
    const city = document.querySelector('.search-box input').value;

    if(city === '' )
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics%appod=${APIKey}`).then(response => response.json()).then (json => {

        if(json.cod === '404'){
            container.style.height='400px';
            weatherBox.style.display='none';
            weatherDetails.style.display='none';
            error404.style.display= 'block';
            error404.classList.add('FadeIn')
            return;
        }

        error404.style.display= 'none';
        error404.classList.remove('FadeIn')

        const image =document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const Humidity = document.querySelector('.weather-details .humidity span');
        const Wind = document.querySelector('.weather-details .wind span');

        switch(json.weather[0].main){
            case 'Clear':
                img.src='Images/clear.png';
                break;
            case 'Rain':
                img.src='Images/rain.png';
                break;
            case 'Snow':
                img.src='Images/snow.png';
                break;
            case 'Clouds':
                img.src='Images/clouds.png.png';
                break;
            case 'Haze':
                img.src='Images/haze.png';
                break; 
            default : 
                img.src=' '
                break;    
        }

        temperature.innerHtml = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        Humidity.innerHTML=`${json.main.Humidity}%`;
        Wind.innerHTML = ` ${parseInt(json.Wind.speed)}Km/hr`;


        weatherBox.style.display = '';
        weatherDetails.style.display='';
        weatherBox.classList.add('fadeIn');
        container.style.height = '590px';


    })
})