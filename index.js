// Controller UI
import {SearchModel, WeatherModel} from './js/model.js';
import {View} from './js/view.js';
class Controller{
    constructor(){
        console.log("Constructor Called Controller");
        this.search = new SearchModel();
        this.weather = new WeatherModel();
        this.view = new View();
    }

}

// Begin the application
let a = new Controller();







