// Controller UI
import {SearchModel, WeatherModel} from './js/model.js';
import {View} from './js/view.js';

// SET YOUR API KEY
const WEATHER_API_KEY = 'WEATHER API KEY';

class Controller{
    constructor(WEATHER_API_KEY){
        this.view = new View();
        this.search = new SearchModel();
        this.weather = new WeatherModel(WEATHER_API_KEY);
        document.getElementById("submit-btn").addEventListener('click', this.handleRequest.bind(this));     // User Clicks for weather info
    }

    // Get Weather Coordinates
    _searchRequest(){
        return this.search.onPlaceChanged();
    }

    // Get Weather Data
    _weatherRequest(coordinates){
        return this.weather.fetchdata(coordinates);
    }

    // format data into UI
    _handleUI(data){
        this.view.CreateAndDisplay(data);
    }

    handleRequest(e){
        e.preventDefault();
        let coordinates = this._searchRequest();
        if (coordinates == null){return;}                   // Empty data request
        let promise = this._weatherRequest(coordinates);
        promise.then(this._handleUI.bind(this));
    }
}

// Begin the application
let controller = new Controller(WEATHER_API_KEY);