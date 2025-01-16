setInterval(() => {
    // Getting references to HTML elements
    let dayElem = document.querySelector(".day");
    let dateElem = document.querySelector(".date");
    let monthElem = document.querySelector(".month");
    let yearElem = document.querySelector(".year");
    let clockElem = document.getElementById("clock");
    let amOrPmElem = document.getElementById("amOrPm");
  
    // Getting the current date and time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.toLocaleString("en-US", { weekday: "long" });
    let date = now.getDate();
    let month = now.toLocaleString("en-US", { month: "long" });
    let year = now.getFullYear();
  
    // Format hours to 12-hour format and determine AM/PM
    let amOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
  
    // Formatting minutes and seconds to always have two digits
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    // Updating the elements with the current date and time
    dayElem.textContent = day;
    dateElem.textContent = date;
    monthElem.textContent = month;
    yearElem.textContent = year;
    clockElem.textContent = `${hours}:${minutes}:${seconds}`;
    amOrPmElem.textContent = amOrPm;
  }, 1000); // Update every second
  