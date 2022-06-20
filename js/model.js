// Google Places API Model
export class SearchModel{
    static autocomplete = 0;
    static place = null;
    constructor(){
                                    // Load the API library with API key provided
        this.initAutocomplete();    // Init the search component

    }
    initAutocomplete() {
        SearchModel.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'), 
            {
                fields: ['place_id', 'geometry', 'formatted_address','name',]
            });
            SearchModel.autocomplete.addListener('place_changed', this.onPlaceChanged);
    }
    // Handles Input option change 
    onPlaceChanged(){
        let place = SearchModel.autocomplete.getPlace();
        if (!place.geometry){
            // User did not select a prediction; reset the input field
            document.getElementById('autocomplete').placeholder = 'Enter a place';
            SearchModel.place = null;
        }
        else{
            SearchModel.place = {
                formatted_address: place.formatted_address,
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
                }           
        }
    }
}

// Weather API Model
export class WeatherModel{
    constructor(WEATHER_API_KEY){
        this._WEATHER_API_KEY = WEATHER_API_KEY;
    }
    async fetchdata(target){
        try{
            console.log(this);
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${this._WEATHER_API_KEY}&q=${target.latitude},${target.longitude}&days=3`);
            if (response.ok){
                const jsonResponse = await response.json();
                return jsonResponse;
            }
        }
        catch(error){
            console.log("Failed to GET weather data");
        }
    }
}
