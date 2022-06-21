# Weather Application

## Project description
This application allows users to input a location and then recieve a 3 day forecast for that location. Info displayed includes max/min temperature, forecast description and a relevant weather image.

## Built with
- HTML
- CSS
- Boostrap
- Javascript
- Google Places API
- WeatherAPI

## Requirements
The only requirements needed is a Google Places API key and a Weather API key.

## How to obtain API keys
To obtain API keys you need to sign up with the links provided 

| Google Places      | WeatherAPI |
| ----------- | ----------- |
| Free $200 monthly credit     | Free       |
| https://mapsplatform.google.com/   |  https://www.weatherapi.com/        |

## Getting Started
 ```bash
 git clone https://github.com/Harold-M-Suquillo/WeatherApp.git
 cd WeatherApp
 ```  
Once in the weather app directory you are going to have to modify index.html and index.js

### in index.html
you are going to have to look for this script element located at line (38 - 40)
 ```html
<script
    src="https://maps.googleapis.com/maps/api/js?key=<PLACES-API-KEY>&libraries=places">
</script>
  ```
Replace <PLACES-API-KEY> with the key provided to you from Google.
  
  ### in index.js
  You are going to have to look for the line of code (line 6).
  ```javascript
  const WEATHER_API_KEY = 'WEATHER API KEY';
  ```
  Replace 'WEATHER API KEY' with your key from WeatherAPI
Once these two steps are completed you can open index.html in the browser
  
## How to use
First you can start to input a location in the searchbar. Autcomplete will begin to display relevant options. Once you see the location in the options provided, click on that option and then press submit.
**NOTE: if you do not select an option from the dropdown, and just input and submit a location it will NOT work.**
