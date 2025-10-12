let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minutes");
let secondEl = document.getElementById("seconds");
let ampmEl = document.getElementById("ampm");

function updateClock() {
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12){
        h = h - 12;
        ampm = "PM";
    }
}
