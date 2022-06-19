

export class SearchModel{
    static autocomplete = 0;
    static place = null;
    constructor(){
        this.initAutocomplete();    // Initalize the search
    }
    initAutocomplete() {
        SearchModel.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'), 
            {
                //types: ['geocode'],
                //componentRestrictions: {'country': ['AU']},
                fields: ['place_id', 'geometry', 'formatted_address','name',]
            });
            SearchModel.autocomplete.addListener('place_changed', this.onPlaceChanged);
    }

    // Handles Option 
    onPlaceChanged(){
        let place = SearchModel.autocomplete.getPlace();
        if (!place.geometry){
            // User did not select a prediction; reset the input field
            document.getElementById('autocomplete').placeholder = 'Enter a place';
            SearchModel.place = null;
        }
        else{
            // find set the latitude and longitude
            //console.log(place.geometry.location);
            console.log(place);
            SearchModel.place = {
                formatted_address: place.formatted_address,
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
                }
                
        }
}

}



// Handle call to Weather API
export class WeatherModel{
    constructor(){
        this.data = null;
    }
    async fetchdata(){
        try{
            const response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=5acdfa352226498c98955739221706&q=41.394817,-73.4540111&days=3");
            if (response.ok){
                console.log("Response Gotten");
                const jsonResponse = await response.json();
                console.log(jsonResponse);

            }
        }
        catch(error){
            console.log("Failed to GET");
            paragraph.innerHTML = error;
        }


    }



}
