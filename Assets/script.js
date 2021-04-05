let currentTime = dayjs().format('MMMM D, YYYY');
console.log(currentTime);

function displayTime(){
    document.getElementById("currentDay").innerHTML = currentTime;
    
};

setInterval(displayTime, 1000);
displayTime()