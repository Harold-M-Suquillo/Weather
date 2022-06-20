// Controller UI
import {SearchModel, WeatherModel} from './js/model.js';
import {View} from './js/view.js';

// SET YOUR API KEYS
const PLACES_API_KEY = null;
const WEATHER_API_KEY = '5acdfa352226498c98955739221706';

class Controller{
    constructor(PLACES_API_KEY, WEATHER_API_KEY){
        this.view = new View();
        this.search = new SearchModel();
        this.weather = new WeatherModel(WEATHER_API_KEY);
        document.getElementById("submit-btn").addEventListener('click', this.handleRequest.bind(this));     // User Clicks for data
    }
    _searchRequest(){
        return this.search.onPlaceChanged();
    }
    _weatherRequest(){
        return this.weather.fetchdata(SearchModel.place);
    }
    _handleUI(data){
        //console.log(this);
        this.view.CreateAndDisplay(data);
    }
    handleRequest(e){
        e.preventDefault();

        //let coordinates = this._searchRequest();    // Get Weather Coordinates
        let promise = this._weatherRequest();       // Get Weather Data
        promise.then(this._handleUI.bind(this));    // Handle UI
    }
}

// Begin the application
let a = new Controller(PLACES_API_KEY, WEATHER_API_KEY);

