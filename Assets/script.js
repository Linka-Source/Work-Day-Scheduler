let currentTime = dayjs().format('dddd, MMMM D, YYYY h:mm A');
console.log(currentTime);

function displayTime(){
    document.getElementById("currentDay").innerHTML = currentTime;
    
};

setInterval(displayTime, 1000);
displayTime()