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









}