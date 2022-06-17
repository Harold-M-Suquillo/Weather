// Controller UI




// Google Autocomplete
let autocomplete;
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            //types: ['geocode'],
            //componentRestrictions: {'country': ['AU']},
            fields: ['place_id', 'geometry', 'formatted_address','name']
        });
    autocomplete.addListener('place_changed', onPlaceChanged);
}

// Handles Option 
function onPlaceChanged(){
    let place = autocomplete.getPlace();
    if (!place.geometry){
        // User did not select a prediction; reset the input field
        console.log
        document.getElementById('autocomplete').placeholder = 'Enter a place';
    }
    else{
        console.log(place);
        document.getElementById('details').innerHTML = place.geometry.location;
    }
}

// Timer 
const myTimer = setInterval(Time, 1000)
function Time(){
    let time = document.getElementById("time");
    let date = new Date();
    let hours = (date.getHours() < 10) ? ("0" + date.getHours()) : date.getHours();
    let minutes = (date.getMinutes() < 10) ? ("0" + date.getMinutes()) : date.getMinutes();
    let seconds = (date.getSeconds() < 10) ? ("0" + date.getSeconds()) : date.getSeconds();
    time.textContent = `${hours}:${minutes}:${seconds}`;
}

