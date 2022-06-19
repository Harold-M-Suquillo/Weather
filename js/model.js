
export class SearchModel{
    static autocomplete = 0;

    constructor(){
        this.initAutocomplete();    // Initalize the search

    }
        // Google Autocomplete
    autocomplete = 0;
    initAutocomplete() {
        SearchModel.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'), 
            {
                //types: ['geocode'],
                //componentRestrictions: {'country': ['AU']},
                fields: ['place_id', 'geometry', 'formatted_address','name']
            });
            //console.log(autocomplete); // ---------------------------
            //SearchModel.autocomplete.addListener('place_changed', this.onPlaceChanged);
    }

    // Handles Option 
    onPlaceChanged(){
        //console.log(autocomplete); // ---------------------------
        let place =SearchModel.autocomplete.getPlace();
        console.log(place);         // ---------------------------
        if (!place.geometry){
            // User did not select a prediction; reset the input field
            document.getElementById('autocomplete').placeholder = 'Enter a place';
        }
        else{
            //document.getElementById('details').innerHTML = place.geometry.location;
        }
}

}



// Handle call to Weather API
export class WeatherModel{
    constructor(){
        this.a = 0;
    }

}
