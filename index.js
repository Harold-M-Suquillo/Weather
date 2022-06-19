// Controller UI
import {SearchModel, WeatherModel} from './js/model.js';
import {View} from './js/view.js';
class Controller{
    constructor(Search, Weather){
        this.search = new SearchModel();
        this.weather = new WeatherModel();
        this.view = new View();


        document.getElementById("submit-btn").addEventListener('click', this.handleSearchInput.bind(this));
    }


    handleSearchInput(e){
        e.preventDefault();
        this.getWeather();       
    }
    
    getWeather(){
        console.log("Entered function")
        this.weather.fetchdata()
       // this.weather.fetchdata();
    }



}

// SET YOUR API KEYS
const PLACES_API_KEY = null;
const WEATHER_API_KEY = null;

// Begin the application
let a = new Controller();







