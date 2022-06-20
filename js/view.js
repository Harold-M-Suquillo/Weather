const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export class View{
    constructor(){
        setInterval(this.clock, 1000);
    }
    clock(){
        let time = document.getElementById("time");
        let date = new Date();
        let hours = (date.getHours() < 10) ? ("0" + date.getHours()) : date.getHours();
        let minutes = (date.getMinutes() < 10) ? ("0" + date.getMinutes()) : date.getMinutes();
        let seconds = (date.getSeconds() < 10) ? ("0" + date.getSeconds()) : date.getSeconds();
        time.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Creates all the elements and add to the DOM
    CreateAndDisplay(e){
        let container = document.getElementById("weather-container")
        // Remove old data
        let child = container.lastElementChild; 
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
        // Append all the new elements to the DOM
        for (let i = 0; i < 3; i++){
            container.append(this._CreateElement(i, e.forecast.forecastday[i]))
        }
    }

    // Acquire the date
    _AcquireDate(i){
        var day = new Date();
        var nextDay = new Date(day);
        nextDay.setDate(day.getDate() + i);
        return days[nextDay.getDay()] + " " + nextDay.getDate();
    }

    _AquireIcon(data){
        let icon = data.day.condition.icon.split("/");
        icon = icon[icon.length - 1];
        return "./img/day/"+icon;
    }

    _AcquireDayInfo(data){
        return {
            maxTemp: data.day.maxtemp_f + " °F",
            minTemp: data.day.mintemp_f + " °F",
            forecast: data.day.condition.text
        };
    }

    // Create sinle card element
    _CreateElement(id, data){

        // Create outer containers
        let NewElement = Object.assign(document.createElement('div'),{classList:"col-lg-3 col-sm-6 py-3"});
        let temp = Object.assign(document.createElement('div'),{classList:"bg-container"});
        NewElement.append(temp);
        let temp2 = Object.assign(document.createElement('div'),{classList:"text-center card"});
        temp.append(temp2);

        let date = this._AcquireDate(id);   // Get the date
        temp2.append(Object.assign(document.createElement('div'),{classList:"card-header h3 m-0", textContent:date}));

        let temp3 = document.createElement("div");  // Data Container
        temp3.classList.add("card-body");
        temp2.append(temp3);        
        temp3.append(Object.assign(document.createElement('img'),{src:this._AquireIcon(data)}));    // Assign the icon

        // Add the forecast data 
        let forecast = this._AcquireDayInfo(data);
        temp3.append(Object.assign(document.createElement('p'),{classList:"card-text mt-3 m-0", textContent:`Forecast: ${forecast.forecast}`}));
        temp3.append(Object.assign(document.createElement('p'),{classList:"card-text m-1", textContent:`Max Temp: ${forecast.maxTemp}`}));
        temp3.append(Object.assign(document.createElement('p'),{classList:"card-text m-1", textContent:`Min Temp: ${forecast.minTemp}`}));

        return NewElement;
    }
}