let currentTime = dayjs().format('dddd, MMMM D, YYYY h:mm A');
console.log(currentTime);

function displayTime(){
    document.getElementById("currentDay").innerHTML = currentTime;
    
};

setInterval(displayTime, 1000);
displayTime()


$(document).ready(function() {


$(".save-button").on("click", function(){
    const hour = $(this).parent().attr("id")
    console.log(hour)
    const input = $(this).parent().siblings(".task").val();
    console.log(input)
    localStorage.setItem(hour, input);
})  
});