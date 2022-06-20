// Controller UI
import {SearchModel, WeatherModel} from './js/model.js';
import {View} from './js/view.js';

// SET YOUR API KEYS
const PLACES_API_KEY = null;
const WEATHER_API_KEY = null;

class Controller{
    constructor(){
        this.view = new View();
        this.search = new SearchModel();
        this.weather = new WeatherModel();
        document.getElementById("submit-btn").addEventListener('click', this.handleRequest.bind(this));
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
        let promise = this._weatherRequest();
        promise.then(this._handleUI.bind(this));
        
    }



}


// Begin the application
let a = new Controller();







