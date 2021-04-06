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

    
function timeTracker() {
    var timeNow = dayjs().hour();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

timeTracker();

    
});
